import { Grid, Typography, Theme, SxProps} from "@mui/material"
import Ellipse1 from "../../assets/images/Ellipse1.png"
import Ellipse2 from "../../assets/images/Ellipse2.png"
import Ellipse3 from "../../assets/images/Ellipse3.png"
import Ellipse4 from "../../assets/images/Ellipse4.png"
import Twitter from "../../assets/images/twitter.png"
import Youtube from "../../assets/images/youtube.png"

// interface IAmazing {
//     data?: IData[]
// }
// interface IData {
//     image?:string;
//     title?:string;
//     subtitle?:string;
//     date?:string;
// }

const Items =[
    {title:"jennifer lopez" , subtitle:"company director", date:"1398/39/8",image:Ellipse1 },
    {title:"jennifer lopez" , subtitle:"company director", date:"1398/39/8",image:Ellipse2 },
    {title:"jennifer lopez" , subtitle:"company director", date:"1398/39/8",image:Ellipse3 },
    {title:"jennifer lopez" , subtitle:"company director", date:"1398/39/8",image:Ellipse4 },
]

export const AmazingSection =() =>{
    return(
        <Grid container className="amazing-section" sx={AmazingSx()}>
            <Grid className="amazing" width="100%">
                <Typography  className="title-our">Our Amazing Team</Typography>
                <Grid className="cards">
                    {
                        Items?.map(({image,title,subtitle,date},index:number)=>(  
                    <Grid className="card1" key={index}>
                       <img src={image}/>
                       <Typography className="jennifer1">{title}</Typography>
                       <Typography className="jennifer2">{subtitle}</Typography>
                       <img className="twitter" src={Twitter}/>
                       <img className="youtube" src={Youtube}/>
                       <Typography className="july">{date}</Typography>
                    </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}


const AmazingSx = ():SxProps<Theme> =>({
    width:"100%",
    height:"100vh",
    backgroundColor:"#F9F6FF",
    pt:{xs:"60px", md:"unset"},
    "& .amazing":{
        width:{xs:"100%"},
        height:{xs:"auto"},
        display:{xs:"flex"},
        flexDirection:{xs:"column"},
        
    },
    
    "& .title-our":{
        fontSize:"30px",
        fontWeight:"bold",
        textAlign:"center",
        paddingTop:{xs:"60px", md:"30px"}
        
      },
    "& .cards":{
        width:"100%",
        height:"100%",
        display:"flex",
        flexDirection:{xs:"column",md:"row"},
        justifyContent: "center",
        alignItems:"center",
        gap:"20px",
        paddingTop:{xs:"30px", md:"unset"}
      },
    "& .card1":{
    width: "260px",
    height: "330px",
    borderRadius: "10px",
    background: "#FFF",
    boxShadow: "0px 25px 25px 0px rgba(0, 0, 0, 0.05) ",
    textAlign:"center",
    padding:"20px",
    },
    "& .jennifer1":{
        fontSize:"20px",
        fontWeight:"bold",
        paddingTop:"20px",
    },
    "& .jennifer2":{
        paddingTop:"10px",
        color:"gray",
    },
    "& .july":{
        paddingTop:"20px",
        color:"gray",
        fontSize:"13px",
    },
    "& .twitter":{
        width:"20px",
        height:"20px",
        paddingTop:"20px"
    },
    "& .youtube":{
        width:"20px",
        height:"20px",
        paddingLeft:"5px"
    }

   
    
})