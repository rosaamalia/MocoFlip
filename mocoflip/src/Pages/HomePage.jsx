
// import LogoImg from '../images/MocoFLip_adobespark.png';
// import NavbarComp from "../components/NavbarComp";
import { Container } from "react-bootstrap";
import background from "../images/bgHomePage.png";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import React, {useState} from "react";
import HeroSection from "../components/HeroSection";


const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
        </div>
    );
};

export default HomePage;









// function HomePage() {
//     return (
//         <Container fluid className="p-0">
//

//         <div style={{ backgroundImage: `url(${background})`, 
//             width:"100%", 
//             height:"100vh",
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat" }}>
//         </div>
//         </Container>
//     );
// };