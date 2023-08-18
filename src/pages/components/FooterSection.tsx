import {Grid, SxProps, Theme, Typography, Link} from "@mui/material"
import logoFooter from "../../assets/images/logoFooter.png"
import twitter1 from "../../assets/images/twitter1.png"
import youtube1 from "../../assets/images/youtube1.png"


export const FooterSection = () =>{
    return(
        <Grid container className="footer-section" sx={FooterSx()}>
            <Grid className="content">
                <Grid className="logo-footer">
                    <img src={logoFooter}/>
                </Grid>
                <Grid className="explore">
                    <Typography className="title-explore">Quick Explore</Typography>
                    <Grid className="list">
                    <Link href='#'>Home</Link>
                    <Link href='#'>About</Link>
                    <Link href='#'>Classes</Link>
                    <Link href='#'>Teachers</Link>
                    <Link href='#'>Blog</Link>
                    </Grid>
                    <Typography className="copy-right">Designed by Rostam Sadiqi 2021</Typography>
                </Grid>
                <Grid className="connect">
                    <Typography className="title-connect">Stay Connected</Typography>
                    <img className="twitter1" src={twitter1}/>
                    <img className="youtube1" src={youtube1}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

const FooterSx =():SxProps<Theme> =>({
    width:"100%",
    height:{xs:"mx-content", md:"50vh"},
    backgroundColor:"#2E4CFF",
   
    "& .content":{
        display:"flex",
        flexDirection:{xs:"column", md:"row"},
        width:"100%",
        justifyContent:"space-around",
    },
    "& .logo-footer":{
        paddingTop:"80px",
        display:{xs:"none", md:"unset"},

    },
    "& .logo-footer img":{
        width:"90px",
    },
    "& .title-explore":{
        color:"#fff",
        fontWeight:"bold",
        fontSize:"25px",
        paddingTop:"65px",
        textAlign:"center",
    },
    "& .list":{
        paddingTop:"50px",
    },
    "& .list a":{
        fontSize: {xs:"10px", md:"15px"},
        textDecoration: "none",
        color: "white",
        textTransform: "uppercase",
        padding:"14px",
    },
    "& .copy-right":{
        color:"#FFFFFF",
        fontSize:"15px",
        paddingTop:"80px",
        textAlign:"center",
        display:{xs:"none", md:"block"},
    },
    "& .title-connect":{
        color:"#fff",
        fontWeight:"bold",
        fontSize:"25px",
        paddingTop:"65px",
        textAlign:{xs:"center", md:"unset"},
    },
    "& .twitter1":{
        width:"30px",
        height:"30px",
        paddingTop:"30px",
        paddingLeft:{xs:"120px",md:"60px"},
    },
    "& .youtube1":{
        width:"30px",
        height:"30px",
        paddingTop:"30px",
        paddingLeft:"20px"
    },

})