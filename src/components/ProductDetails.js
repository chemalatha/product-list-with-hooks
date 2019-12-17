import React, { useEffect,useState } from 'react';

const url = "http://localhost:8900/products"
function ProductDetails(props){
    const [productDetails,setProductDetails] = useState(null);

    useEffect(()=>{
        fetch(`${url}/${props.match.params.id}`,{method:'GET'})
            .then(res => res.json())
            .then(res => {
                setProductDetails(res);
            })
    },[]);
    const renderSelectedProduct = (details)=>{
        console.log("products:"+details);
        if(details){
                return (
                    
                        <div className="top">
                            <h2>{details["product-name"]}</h2>
                            <img src={`${details["product-image-url"]}`}/>
                            <div className="body_news">
                                {details["product-url"]}
                                {details["header-top-right-url"]}
                            </div>
                    </div>


                )
        }
    }
    return(
        <div className="news_container">
            <div>{renderSelectedProduct(productDetails)}</div>
        </div>

    )
}
export default ProductDetails;