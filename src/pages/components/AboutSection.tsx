import { Grid , SxProps, Theme, Typography} from "@mui/material";
import Dot1 from "../../assets/images/Dot1.png";
import Rectangle16 from "../../assets/images/Rectangle16.png";


export const AboutSection = () => {
    return (
      <Grid container className="about-section" sx={AboutSx()}>
        <Grid className="content">
            <Grid className="img">
              <img src={Rectangle16} className="rectangle16"/>
              <img src={Dot1} className="dot1img"/>

            </Grid>
            <Grid className="classes">
              <Typography className="title">Our Yoga Classess</Typography>
              <Grid className="box">
              <Grid className="box1">
               <Grid className="master"><Typography className="master-fit" >Yoga Master</Typography></Grid>  
               <Grid className="rock"><Typography className="rock-life" >Rock and Yoga</Typography></Grid> 
                
              </Grid>
              <Grid className="box2">
              <Grid className="life"><Typography className="rock-life" >Relive your life</Typography></Grid> 
              <Grid className="fit"><Typography className="master-fit"  >Fit to health</Typography></Grid> 
              </Grid>
              </Grid>
              

            </Grid>
        </Grid>
      </Grid>
    )
};

const AboutSx = ():SxProps<Theme> =>({
  width:"100%",
    height:"100vh",
    backgroundColor:"#F9F6FF",
    position:"relative",
    "& .content":{
      width:"100%",
      display:"flex",
     flexDirection:{xs:"column",md:"row"},
     justifyContent:"space-around",
    },
    "& .rectangle16":{
      position:"relative",
      width: "370px",
      height: "460px",
      top:"120px",
      zIndex:"1",
      display:{xs:"none",md:"block"},
    },
    "& .dot1img":{
      position:"absolute",
      top:"50px",
      left:"114px" ,
      width:"150px",
      display:{xs:"none",md:"block"},
    },
    "& .title":{
      fontSize:"30px",
      fontWeight:"bold",
      marginTop:"110px",
      textAlign:{xs:"center"},
    },
    "& .box":{
      width:"100%",
      height:"auto",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      paddingLeft:{xs:"15px", md:"unset"},
      
    
    },
    "& .box1":{
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      marginTop:"40px",
      paddingRight:"20px"
      
    },
    "& .box2":{
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      marginTop:"100px",
      gap:"12px"
    },
    "& .master":{
      borderRadius: "30px",
      background: "#2E4CFF",
      width:{xs:"140px", md:"150px"},
      height:{xs:"140px", md:"150px"},
      color:"#fff",
      boxShadow: "0px 25px 25px 0px rgba(0, 0, 0, 0.05) ",
      

    },
    "& .life":{
      borderRadius: "30px",
      background: "#fFF",
      width:{xs:"140px", md:"150px"},
      height:{xs:"140px", md:"150px"},
      color:"#2E4CFF",
      boxShadow: "0px 25px 25px 0px rgba(0, 0, 0, 0.05) ",
  
    },
    "& .rock":{
      borderRadius: "30px",
      background: "#fff",
      width:{xs:"140px", md:"150px"},
      height:{xs:"140px", md:"150px"},
      color:"#2E4CFF",
      marginBottom:"30px",
      boxShadow: "0px 25px 25px 0px rgba(0, 0, 0, 0.05) ",
   
    },
    "& .fit":{
      borderRadius: "30px",
      background: "#2E4CFF",
      width:{xs:"140px", md:"150px"},
      height:{xs:"140px", md:"150px"},
      color:"#fff",
      marginTop:"20px",
      boxShadow: "0px 25px 25px 0px rgba(0, 0, 0, 0.05) ",


    },
    "& .master-fit":{
      textAlign:"center",
      marginTop:"60px",
    },
    "& .rock-life":{
      textAlign:"center",
      marginTop:"60px",
    }
})