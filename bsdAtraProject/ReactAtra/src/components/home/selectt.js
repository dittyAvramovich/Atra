
import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux';
// import { fechIdCategory } from '../../redux/actions/card.action';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
// function Home(props) {

  // useEffect(() => {
  //   props.fechCategories();
  // }, [])

export default class StartUpList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      categoryId: " ",
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
//  componentDidMount=()=>{
  // const dataFromServer = await startUpservice.getStartUp();

//  }
  handleChange=(e) =>
  {
    //  this.setState({category:e.target});
    //  console.log("category Selected!!",this.state.category);
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
      console.log("category Selected!!",this.state.categoryId);
      // props.fechIdCard(this.state.categoryId);
  }

  render() {
    const {category } = this.state;
    return (
      <div >
        <div>
      
           <select name="categoryId" value={category} onChange={ this.handleChange}>
           {/* onChange={(e)=>this.handleChange(e.target.value)} */}
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

// export default connect(
//   (state) => {
//     return {

//         categories: state.category.categories,
//         card:state.card.cardList
       
//     }
//   },
//   (dispatch) => {
//     return {
//       fechIdCard: function (id) {
//         dispatch(fechIdCard(id))
//       }
//     }

//   }
// )(Home)









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


