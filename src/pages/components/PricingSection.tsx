import { Grid , Typography, Theme, SxProps} from "@mui/material"


const Items =[
    {title:"One Month" ,subtitle:"RM 150" ,save:"0% Save" , btn:"Get Started"},
    {title:"One Year", subtitle:"RM 1,350", save:"25% save", btn:"Get Started"},
    {title:"Six Month", subtitle:"RM 810", save:"10% save", btn:"Get Started"},
    
]
export const PricingSection =() =>{
  return(
    <Grid>
         <Grid container className="pricing-section" sx={PricingSx()}>
            < Grid className="pricing" width="100%">
                <Typography className="title-pricing">Pricing</Typography>
                <Grid className="cards">
                    {
                        Items?.map(({title, subtitle,save,btn},index:number)=>(
                            <Grid className="card1" key={index}>
                            <Typography className="six">{title}</Typography>
                            <Typography className="rm">{subtitle}</Typography>
                            <Typography className="save">{save}</Typography>
                            <Grid className="get">
                            <Typography className="t-get">{btn}</Typography>
                            </Grid>
                            
                         </Grid>
                        ))
                    }
                  
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )   
}

const PricingSx = ():SxProps<Theme> =>({
    width:"100%",
    height:{xs:"fit-content",md:"100vh"},
    backgroundColor:"#F9F6FF",
    pt:{xs:"350%", md:"unset"},
    "& .title-pricing":{
        fontSize:"30px",
        fontWeight:"bold",
        textAlign:"center"
        
      },
      "& .cards":{
        width:"100%",
        height:"100%",
        display:"flex",
        flexDirection:{xs:"column", md:"row"},
        justifyContent: "center",
        alignItems:"center",
        gap:"20px"
      },
      "& .card1":{
        width: "240px",
        height: "300px",
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 25px 25px 0px rgba(0, 0, 0, 0.05) ",
        textAlign:"center",
        padding:"20px",
        },
        "& .six":{
            fontWeight:"bold",
            paddingTop:"20px",
        },
        "& .rm":{
            fontSize:"40px",
            fontWeight:"bold",
            paddingTop:"20px",
        },
        "& .save":{
            color:"gray",
            paddingTop:"10px",
        },
        "& .get":{
            width: "130px",
            height: "40px",
            borderRadius: "10px",
            background: "#2E4CFF",
            marginTop:"40px",
            marginLeft:"30px",
            color:"#fff",
    },
    "& .t-get":{
        paddingTop:"9px",
        fontSize:"15px",
    }    
})