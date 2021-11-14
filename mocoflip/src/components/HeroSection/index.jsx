import React, {useState} from 'react';
import { HeroContainer, 
        HeroBg, 
        HeroContent, 
        HeroH1, 
        HeroP, 
        HeroBtnWrapper, 
        ArrowForward, 
        ArrowRight 
    } from './HeroSectionElements';
import background from '../../images/bgHomePage.png';
import {Button} from './ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg style={{ backgroundImage: `url(${background})`, 
                width:"100%", 
                height:"100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat" }}>
                {/* <VideoBg autoPlay loop muted src={} type='video/mp4' /> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Convert PDF Files to FLipBooks</HeroH1>
                <HeroP>
                Enhance your audience experience by adding a realistic page flip effect to your PDF documents!
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to='/' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Get Your FLip {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
