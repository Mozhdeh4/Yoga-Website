import { HomeSection } from "./components/HomeSection"
 import { AboutSection } from "./components/AboutSection"
 import { AmazingSection } from "./components/AmazingSection"
 import {PricingSection} from "./components/PricingSection"
 import {EmailSection} from "./components/EmailSection"
 import {FooterSection} from "./components/FooterSection"

const Landing = () => {
    return(
        <>
    <HomeSection/>
     <AboutSection/>
    <AmazingSection/>
    <PricingSection/>
    <EmailSection/>
    <FooterSection/> 
        </>
    )
} 

// const fakeData =[
//     {title:"jennifer lopez" , subtitle:"company director", date:"1398/39/8",image:Ellipse1 },
//     {title:"jennifer lopez" , subtitle:"company director", date:"1398/39/8",image:Ellipse2 },
//     {title:"jennifer lopez" , subtitle:"company director", date:"1398/39/8",image:Ellipse3 },
//     {title:"jennifer lopez" , subtitle:"company director", date:"1398/39/8",image:Ellipse4 },
// ]

export default Landing