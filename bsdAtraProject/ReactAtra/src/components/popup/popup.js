import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import './popup.css'
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { propTypes } from 'react-bootstrap/esm/Image';
// npm install reactjs-popup --save


export default (props) => {

    const [degel, setDegel] = useState(true);
    const [url, setUrl] = useState(window.location);


    useEffect(() => {
        debugger
        if (props.cardsByIdCategory.length)
            if (props.cardsByIdCategory[0].categoryId) {
                debugger
                console.log("have cards!!!!")
            }
        // if (degel) {
        //     window.location.href = setUrl("localhost:3000")

        // }

    }, [props.cardsByIdCategory])
    return (
        <Popup
            // trigger={<h1 className="button"> s </h1>}
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
                    <div className="header"> {"תוצאות החיפוש שלך"}</div>
                    <div className="content">
                        {
                            props.cardsByIdCategory.length && props.cardsByIdCategory.map((card) =>
                                // <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                                //     <div class="card-header">Header</div>
                                    <div class="card stylecard" >
                                        <h5 className="App">
                                            {/* {card._id} */}
                                            {card.agentDetails.fullName} 

                                        </h5> 
                                    {/* </div>*/}
                                </div> 
                            )

                        }

                    </div>
                    <div className="actions">
                        <button style={{ width: '100px' }} className="btn btn-primary mr-4"
                            onClick={props.setFlagPopup}>
                            סגור
                         </button>

                        {/* <button
                            style={{ width: '100px' }} className="btn btn-primary">YES</button> */}
                    </div>
                </div>
            )}

        </Popup >
    );
}