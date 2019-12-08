import React from 'react';
import './styles/Component2.css';
import data from './data'
import Component3 from './Component3'


class Component2 extends React.Component{
    constructor () {
        super ()

        this.state = {
            myArray: data,
            index: 0
        }
    }

    indexPlus = () => {

        this.setState({
            index: this.state.index +1
        })
        if (this.state.index >= this.state.myArray.length-1){
            this.setState({index: 0})
        }
    }


    indexMinus = () => {
        
        this.setState({
            index: this.state.index - 1
        })

        if(this.state.index <= 0 ){
            this.setState({index: 24});
        }
    }

render (){
    return(
        <div className="container">
            <h1>{this.state.myArray[this.state.index].name.first} {this.state.myArray[this.state.index].name.last}</h1>
            <h1>From: {this.state.myArray[this.state.index].city}, {this.state.myArray[this.state.index].country}</h1>
            <h1>Employer:  {this.state.myArray[this.state.index].employer}</h1>
            <h1>Title: {this.state.myArray[this.state.index].title}</h1>
            <h1>Favorite Movies: <ol>
            {this.state.myArray[this.state.index].favoriteMovies.map(element => {
            return <li>{element}</li>;
            })}
                </ol></h1>
            
            <Component3 
            indexPlus = {this.indexPlus}
            indexMinus = {this.indexMinus}
            />
        </div>
        
    )
}
}

export default Component2


{/* <ol>
{people[currIndex].favoriteMovies.map(element => {
  return <li>{element}</li>;
})}
</ol> */}

//mapping through favorite movies> loop through each movie that they have
//.map
//movies.map((element, i) => {
    //return <h1>element</h1> 
//})
//what i return becomes the new element, so if i return element, the element stays the same 

//{this.state.people[0].favoriteMovies.map(element => {
    // return <li>{element}</li>

// }
//)}

/** you can put an onlick function on anything */

/** */