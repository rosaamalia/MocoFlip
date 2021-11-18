
// import LogoImg from '../images/MocoFLip_adobespark.png';
// import NavbarComp from "../components/NavbarComp";
// import { Container } from "react-bootstrap";
// import background from "../images/bgHomePage.png";
import React from "react";
// import HeroSection from "../components/HeroSection";
import './css/style.css';
import background from "../images/bgHomePage.png";
import {CardGroup, 
        Card, 
        CardImg, 
        // CardBody, 
        // CardTitle,
        // ListGroup,
        // ListGroupItem,
} from "reactstrap";


function HomePage() {
    // default login status
    if(!localStorage.getItem("loginstatus")){
        localStorage.setItem("loginstatus", JSON.stringify({'status': false, 'id': NaN}));
    }
    
    return (
        <div className="container-fluid">
            {/* Jumbotron */}
            <div className="row">
                <div className="jumbotron text-white jumbotron-image shadow p-5" style={{ backgroundImage: `url(${background})`, height: '100vh' }}>
                    <div className="area-content-jumbotron d-flex flex-column">
                        <h1 className="mb-2">
                            Convert PDF Files to FlipBooks
                        </h1>
                        <p className="mb-4 badge text-wrap">
                        Enhance your audience experience by adding a realistic page flip effect to your PDF documents!
                        </p>
                        <a href="footer.jsx" className="btn btn-success" style={{backgroundColor: '#362565', borderColor: '#543474'}}>Get FLip</a>
                    </div>
                </div>
            </div>

            {/* Section Card */}
            <div className="row" style={{ marginTop: 50 }}>
                <h2 className="text-center my-4"> FLipBook Samples </h2>
                <CardGroup className="mb-5" style={{ width: '100rem' }}>
                    <Card className="m-2" style={{objectFit: "cover"}}>
                        <CardImg
                        alt="Card image cap"
                        src="https://www.pdf-flip.com/examples/pubs/Brochures/Bro_03.jpg"
                        top
                        width="100%"
                        />
                        {/* <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        </CardBody> */}
                    </Card>
                    <Card className="m-2">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.pdf-flip.com/examples/pubs/Magazines/Mag_01.jpg"
                        top
                        width="100%"
                        />
                        {/* <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        </CardBody> */}
                    </Card>
                    <Card className="m-2">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.pdf-flip.com/examples/pubs/Magazines/Mag_03.jpg"
                        top
                        width="100%"
                        />
                        {/* <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        </CardBody> */}
                    </Card>
                    <Card className="m-2">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.pdf-flip.com/examples/pubs/Magazines/Mag_02.jpg"
                        top
                        width="100%"
                        />
                        {/* <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        </CardBody> */}
                    </Card>
                    <Card className="m-2">
                        <CardImg
                        alt="Card image cap"
                        src="https://www.pdf-flip.com/examples/pubs/Magazines/Mag_04.jpg"
                        top
                        width="100%"
                        />
                        {/* <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        </CardBody> */}
                    </Card>
                </CardGroup>
                <div className="row-cols-1 m-5">
                    <h5 className="text-center mb-3"> Suka dengan FLipBook? Kasih testimoni kamu disini yuk ! </h5>
                    <div className="button-testimoni mb-5">
                        <a href="/testimoni">
                        <button type="button" className="btn btn-primary" style={{ backgroundColor: '#362565', borderStyle: 'none'}}>Tulis Testimoni</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;