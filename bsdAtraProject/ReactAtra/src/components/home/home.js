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

  return (
    <>
     
      <div class="container-fluid">
        <div class="row col-12  a">
          {
            <div className="container-fluid aa"> 
               <div class="selectt col-10"><Select /></div>
            {/* <img
              className="d-block ggggg"
              src={img2}
              alt="First slide">
           
                
                </img>  */}
            </div>
          }
       
         </div>
        <div className="row b">
          <div className="container ">
            <div className="row d-flex justify-content-center  popularCategory">
              <button type="button" class="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3 btncategory"  >lead</button>
              <button type="button" class="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3 btncategory"  >event</button>
              <button type="button" class="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3 btncategory"  >form</button>
              <button type="button" class="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3 btncategory"  >meet</button>
              <button type="button" class="buttonpopularCategory btn btn-outline-primary mt-3 mb-3 mr-3 btncategory"  >stafmeeting</button>
            </div>
          </div>
        </div> 
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