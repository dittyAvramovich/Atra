import React, { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import img2 from '../../assets/home1.jpg';
import './home.css';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import Footer from '../footer';
import Select from './selectt';
import { connect } from 'react-redux';
import { fechCategories } from '../../redux/actions/category.action';




function Home(props) {

  useEffect(() => {
    props.fechCategories();
  }, [])


  function search() {


  }
  return (
    <>

      <div class="container-fluid">
        <div class="row col-12  a">
          {
            <div className="container-fluid"> 
            <img
              className="d-block ggggg"
              src={img2}
              alt="First slide"

            />
            </div>
          }
          <div class="selectt  "><Select /></div>
          {/* <div class="container input col-9 ">
            <div class="container searchcontainer col-0  ">
              <p class="p pt-3 ">
                What are you looking for?
              </p>
            </div>
            <div class="container searchcontainer col-4 pt-0">
              <Select />
            </div>
            <div class="container searchcontainer col-8">
            
            </div> 
          </div>*/}
        </div>
        <div className="row b">
          <div className="container ">
            <div className="row d-flex justify-content-center  popularCategory">
              <button type="button" class="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3 btncategory" onClick={search()}>lead</button>
              <button type="button" class="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3 btncategory" onClick={search()}>event</button>
              <button type="button" class="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3 btncategory" onClick={search()}>form</button>
              <button type="button" class="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3 btncategory" onClick={search()}>meet</button>
              <button type="button" class="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3 btncategory" onClick={search()}>stafmeeting</button>
            </div>

            {/* <div className="row  d-flex justify-content-center popularCategory">
              <button type="button" className="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3" onClick={search()}>accesorice</button>
              <button type="button" className="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3" onClick={search()}>dfdfssfzc</button>
              <button type="button" className="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3" onClick={search()}>fffffffff</button>
              <button type="button" className="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3" onClick={search()}>fffff</button>
              <button type="button" className="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3" onClick={search()}>fffff</button>

            </div> */}
          </div>
        </div>

        {/*  <div class="container input">
<div class="container"><p class="p pt-3 ">
                What are you looking for?                 
              </p></div>
<div class="container">
</div>
<div class="container">
<button type="submit" className="buttonsearch" onClick={search()}></button> 
</div>
      </div>
      {/* 
     <div className="container-fluid">  
    </div> */}
        {/* <div class="container-fluid">
      <div class="row" >
       <div class="col-12"></div>*/}

      </div>
    </>
  )
}

export default connect(
  (state) => {
    return {
      categories: state.category.categories,

    }
  },
  (dispatch) => {
    return {
      fechCategories: function () {
        dispatch(fechCategories())
      }
    }

  }
)(Home)