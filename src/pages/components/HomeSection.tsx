import { Grid , SxProps,Theme, Typography} from "@mui/material";
import { NavbarList } from "./NavbarList";
import Photo from "../../assets/images/Photo.png";
import { Buttons } from "../../components/controllers/Buttons";
import Dot from "../../assets/images/Dot.png"


export const HomeSection = () =>{
    return (
     <Grid container className="home-section" sx={HomeSx()}>
      <NavbarList/>
     <Grid  className="content">
        <Grid className="text" >
            <Typography variant="h3"  className="title">
               Yoga teaches you how <br/>to listen to your body
            </Typography>
            <Typography variant="body1" className="description">
            Slow movements and deep breathing increase blood <br/>
            flow and warm up muscles, while holding a pose can <br/> 
            build strength.
            </Typography>
            <Grid className="buttons">
            <Buttons text="Get Started"/><Buttons bgColor="#2E4CFF" color="white"  text="Sign in"/>
            </Grid>
            
        </Grid>
        <Grid className="image">
            <img src={Dot} className="imgDot"/>
          <img src={Photo} className="imgPhoto"/>
        </Grid>
     </Grid>
        
     </Grid>
    )
};


const HomeSx = ():SxProps<Theme> => ({
    width:"100%",
    height:"100vh",
    backgroundColor:"#2E4CFF",
    position:"relative",
    
    "& .content":{
        width:"100%",
        display:"flex",
       flexDirection:{xs:"column",md:"row"},
       justifyContent:"space-around",
    },
    "& .text":{
       marginTop:{xs:"-30px", md:"30px"},
    },
  
    "& .title":{
      color:"#fff",
      fontSize:{xs:"27px",md:"45px"},
      textAlign:{xs:"center",md:"unset"},
    },
    "&  .description":{
       color:"#fff",
       textAlign:{xs:"center", md:"unset"},
       fontSize:{xs:"13px", md:"unset"},
       marginTop:{xs:"30px", md:"unset"},
    },
   
    "&  .imgPhoto":{
        height:"400px",
        display:{xs:"none",md:"block"},
        position:"relative",
        top:"20px",
    },
    "& .imgDot":{
        position:"absolute",
        top:"145px",
        right:"110px",
        width:"130px",
        display:{xs:"none",md:"block"}
    },
    "& .buttons":{
        display:"flex",
        flexDirection:"row",
        gap:"10px",
        paddingTop:"40px",
    }

    })