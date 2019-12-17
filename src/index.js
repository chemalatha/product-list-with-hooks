import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/Routing';

const App = ()=>{
    return(
        <div>
            <Routing />
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
export default App;