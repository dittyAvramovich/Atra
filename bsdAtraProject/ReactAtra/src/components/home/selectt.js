
import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux';
import { fetchCards } from '../../redux/actions/card.action';
import { fechCategories } from '../../redux/actions/category.action';
import Popup from '../popup/popup';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class SelectComponent extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      categoryId: 2,
      category: {},
      cardsByIdCategory: {},
      flagPopup: false

    };

    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    console.log(this.props.categories);
    // this.props.fechCategories();
    debugger
    this.props.fetchCards();
    console.log(this.props.categories + "this is my categories");
    ///  console.log(this.props.categories.id);

  }

  componentDidUpdate(prevProps, prevstate) {


    let cards = [];

    if (prevstate.category != this.state.category)
      if (this.state.category._id && this.props.cardList.length) {

        this.props.cardList.forEach(card => {
          if (card.categoryId === this.state.category._id) {
            cards.push(card);
          }
        });

        this.setState({ cardsByIdCategory: cards })

      }
    if (prevstate.cardsByIdCategory != this.state.cardsByIdCategory) {
      console.log(this.state.cardsByIdCategory)
    }


  }



  //  componentDidMount=()=>{
  // const dataFromServer = await startUpservice.getStartUp();

  //  }
  handleChange = (e) => {
    //  this.setState({category:e.target});
    //  console.log("category Selected!!",this.state.category);
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log("category Selected!!", this.state.categoryId);
    this.props.fechIdCard(this.state.categoryId);
  }


  setFlagPopup=()=>{
    this.setState({flagPopup:false})
  }

  yourChangeHandler(event) {

  
  this.setState({flagPopup:false})

    this.setState({ flagPopup: true })
    this.props.categories.forEach(async (element) => {
      if (element.categoryName === event.target.value) {
        await this.setState({ category: element })
        console.log(this.state.category)
      }
    });


  }

  render() {
    return (
      <div>
        {
          this.state.flagPopup && <Popup setFlagPopup={this.setFlagPopup} cardsByIdCategory={this.state.cardsByIdCategory}></Popup>
        }
        {
          this.state.cardsByIdCategory && this.state.cardsByIdCategory.cagetoryId
        }

        <div>
          <select class="form-control" id="exampleFormControlSelect1"
            onChange={this.yourChangeHandler.bind(this)}>
            {this.props.categories.length
              && this.props.categories.map((category) =>
                <option key={category._id}>{category.categoryName}</option>
              )}
          </select>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      categories: state.category.categories,
      cardList: state.cards.cardList
    }
  },
  (dispatch) => {
    return {
      fetchCards: function () {
        dispatch(fetchCards())
      },
      fechCategories: function () {
        dispatch(fechCategories())
      }
    }

  }
)(SelectComponent)









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


