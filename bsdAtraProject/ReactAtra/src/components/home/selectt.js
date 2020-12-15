
import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export default class StartUpList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      category: " ",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) 
  {
     this.setState({category:e.target});
     console.log("category Selected!!",this.state.category);
    
  }

  render() {
    return (
      <div >
        <div>
      
           <select value={this.state.category} onChange={(e)=>this.handleChange(e.target.value)}>
            {options.map((option) => (
              <option value={option.value} >{option.label} 
              </option>
            ))}  
              {/* onClick={this.handleChange(option.value)}   */}
          </select>  
        </div>
      </div>
    );
  }
}











//   constructor(props) {
//     super(props)
//     debugger;
//    this.state=options;
//     this.state = {
//      category:"",
      
//     };
//   }
//   setCategory=(category)=>{

// this.setState({category}) 
// console.log(category);
//   }
//   render(){
//     return(
//       <>
//   <Select options={options} value={this.state.value} onChange={(e)=>this.setCategory(e.target.value)}/>
      
      
      
//       </>
//     );
   


 
// const Selectt = () => (
  
// )
// export default Selectt;


