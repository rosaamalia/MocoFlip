import React from "react";
import './css/style.css';
import background from "../images/bgHomePage.png";
import {CardGroup, 
        Card, 
        CardImg, 
} from "reactstrap";
import { Link } from 'react-router-dom';


function HomePage() {
    // default login status
    if(!localStorage.getItem("loginstatus")){
        localStorage.setItem("loginstatus", JSON.stringify({'status': false, 'id': NaN}));
    }
    let loginstatus = JSON.parse(localStorage.getItem("loginstatus")).status;
    
    return (
        <div className="container-fluid">
            {/* Jumbotron */}
            <div className="row">
                <div className="jumbotron text-white jumbotron-image shadow p-5" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1599488059863-ac95a7f49193?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80")`, height: '100vh' }}>
                    <div className="area-content-jumbotron d-flex flex-column">
                        <h1 className="mb-2" style={{ fontWeight: 600 }}>
                            MocoFlip
                        </h1>
                        <p className="mb-4 text-wrap">
                        Books give us new knowledge and strength.
                        </p>
                        {loginstatus ? <Link to="/list" className="btn btn-succedd" style={{backgroundColor: '#362565', borderColor: '#543474', color:'white'}}>Read Book</Link>
                        : <Link to="/login" className="btn btn-succedd" style={{backgroundColor: '#362565', borderColor: '#543474', color:'white'}}>Login to read your favorite books!</Link>}
                    </div>
                </div>
            </div>

            {/* Section Card */}
            <div className="row" style={{ marginTop: 50 }}>
                <h2 className="text-center my-4" style={{ fontWeight: 600 }}>Our Books</h2>
                <CardGroup className="mb-5" style={{ width: '100rem' }}>
                    <Card className="m-2" style={{objectFit: "cover"}}>
                        <CardImg
                        alt="Card image cap"
                        src="https://www.pdf-flip.com/examples/pubs/Brochures/Bro_03.jpg"
                        top
                        width="100%"
                        />

                    </Card>
                    <Card className="m-2">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.pdf-flip.com/examples/pubs/Magazines/Mag_01.jpg"
                        top
                        width="100%"
                        />
                    </Card>
                    <Card className="m-2">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.pdf-flip.com/examples/pubs/Magazines/Mag_03.jpg"
                        top
                        width="100%"
                        />
                    </Card>
                    <Card className="m-2">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.pdf-flip.com/examples/pubs/Magazines/Mag_02.jpg"
                        top
                        width="100%"
                        />
                    </Card>
                    <Card className="m-2">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.pdf-flip.com/examples/pubs/Magazines/Mag_04.jpg"
                        top
                        width="100%"
                        />
                    </Card>
                </CardGroup>
                <div className="row-cols-1 m-5">
                    <h5 className="text-center mb-3"> Suka dengan FLipBook? Kasih testimoni kamu disini yuk ! </h5>
                    <div className="button-testimoni mb-5">
                        <Link to="/testimoni">
                        <button type="button" className="btn btn-primary" style={{ backgroundColor: '#362565', borderStyle: 'none'}}>Tulis Testimoni</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;