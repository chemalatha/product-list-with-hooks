import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';

const url = "http://localhost:8900/products"
function Home(){
    const [products,setProductList] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState(products);
    const [searchStr,setSearchStr] = useState('');

    useEffect(()=>{
        fetch(url,{method:'GET'})
            .then(res => res.json())
            .then(res => {
                setProductList(res);
                setFilteredProducts(res);
            })
    },[]);
    const renderProducts = (products)=>{
        console.log("products:"+products);
        if(products){
            return products.map((item)=>{
                return (
                        <Link key={item.id} to={`/details/${item.id}`} className="item" >
                        <div className="left"
                            style={{background:`url(${item["product-image-url"]})`,width:'100px',height:'100px'}}>

                        </div>
                        <div className="right">
                            <h3>{item["product-name"]}</h3>
                        </div>
                        </Link>

                )
            })
        }
    }
    const searchProducts = (event)=>{
        console.log(event.target.value);
        let searchStr = (event.target.value).toLowerCase();
        if(products && products.length>0){
            let output = products.filter((item)=>{
                return (item["product-name"].toLowerCase().indexOf(searchStr)!=-1)
            });
            setFilteredProducts(output);
        }
    } 
    return(
        <div>
        <input style={{textAlign:"center",margin:"0 auto",padding:"20px"}} type="text" placeholder="Search Products by Title"
        onChange={searchProducts}/>
            <div className="other-news">

                <h2>Product List</h2>
                <div className="other-news-items">
                {renderProducts(filteredProducts)}
                </div>
            </div>
        </div>


    )
}
export default Home;