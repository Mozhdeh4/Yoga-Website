import {Box, Grid, Link, SxProps, Theme} from '@mui/material'
import {Buttons} from "../../components/controllers/Buttons"
import logo  from "../../assets/images/logo.png"
import ListIcon from  "../../assets/images/ListIcon.svg"



export const NavbarList = () => {
    return(
        <Grid container className='navbar-list' xs={12} sx={NavbarSx()}>
            <Box component="img" className="home-logo" src={logo} xs={6}   />
            <Box component="img" className="list-icon" src={ListIcon} xs={6}/>
            <Grid item className='menu' >
              <Link href='#'>Home</Link>
              <Link href='#'>About</Link>
              <Link href='#'>Classes</Link>
              <Link href='#'>Teachers</Link>
              <Link href='#'>Blog</Link>
            </Grid>
            
            <Buttons text='Contact Us'  className='buttonNavbar'/>
            
        </Grid>
        

    )
}

const NavbarSx = ():SxProps<Theme> =>({
        display:"flex",
        alignItems: "baseline",
        justifyContent: "space-around",
        marginTop: "20px",

    
    "& .menu a":{
       margin: "0px 20px",
       fontSize: "15px",
       textDecoration: "none",
       color: "white",
       textTransform: "uppercase",
       display:{xs:"none", md:"unset"},
    },
    "& .menu a:hover":{
        fontWeight: "500",
        webkitTextStroke: "1px white",
        color: "transparent",
    },
    
     "& .home-logo":{
        width: "50px",
        height: "50px",
        paddingTop:"30px",
        paddingLeft:{xs:"120px", md:"unset"}
    },
    "& .buttonNavbar":{
        display:{xs:"none", md:"block"},
    },
    "& .list-icon":{
        display:{xs:"flex", md:"none"},
        width:{xs:"30px", md:"unset"},
        paddingLeft:{xs:"110px", md:"unset"},
        paddingBottom:{xs:"70px"}
    }
    
})