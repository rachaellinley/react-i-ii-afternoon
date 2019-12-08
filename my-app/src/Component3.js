import React from 'react';
import './styles/Component3.css';

class Component3 extends React.Component{
    constructor () {
        super ()

    }


render (){
    return(
        <div className="buttons">
            <button onClick={this.props.indexMinus}>Previous</button>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
            <button onClick={this.props.indexPlus}>Next</button>


        </div>
        
    )
}
}

export default Component3
