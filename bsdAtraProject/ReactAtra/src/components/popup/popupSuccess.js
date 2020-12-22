import React from 'react';
import Popup from 'reactjs-popup';
import './popup.css'
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// npm install reactjs-popup --save


export default () => (
    <Popup
        
        modal
        nested
        open={true}
        className="pop"
    >
        {close => (
            <div className="modal1">
                {/* <button className="close" > */}
                {/* &times; */}
                {/* </button> */}
                <div className="header"> Dear user </div>
                <div className="content">
                    <h4 className="App">The payment was succesful</h4>

                </div>
                <div className="actions">
                  
                    <button className="btn btn-primary"
                        onClick={close} style={{width:'100px'}}
                    >

                            OK
                         </button>
                </div>
            </div>
        )}

    </Popup >
);