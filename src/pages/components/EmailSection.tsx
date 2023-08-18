import {Grid, SxProps, Theme, Typography} from "@mui/material"

export const EmailSection =() =>{
    return(
        <Grid container className="email-section" sx={EmailSx()}>
            <Grid className="email">
                <Grid className="email-text">
                    <Typography className="question">Have any question about us</Typography>
                    <Typography className="drop">Jast drop us an email</Typography>
                </Grid>
                <Grid className="btn">
                    <Grid className="send">
                    <Typography className="t-email">Send Email</Typography>
                    </Grid>
                    
                </Grid>
                
                </Grid> 
        </Grid>
    )
}

const EmailSx =(): SxProps<Theme> =>({
    width:"100%",
    height:"65vh",
    backgroundColor:"#F9F6FF",
    "& .email":{
        width:"780px",
        height:"120px",
        background:"#fff",
        borderRadius:"25px",
        boxShadow: "0px 25px 25px 0px rgba(0, 0, 0, 0.05) ",
        outline:"none",
        marginLeft:{xs:"none",md:"290px"},
        marginTop:"120px",
    },
    "& .question":{
        fontWeight:"bold",
        fontSize:{xs:"19px",md:"23px"},
        paddingTop:"20px",
        paddingLeft:"20px",

    },
    "& .drop":{
        color:"gray",
        paddingTop:"10px",
        paddingLeft:"20px",
        fontSize:{xs:"13px",md:"unset"},
    },
    "& .btn":{
        display:"flex",
        justifyContent:"right",
        paddingTop:{xs:"20px", md:"unset"},

    },
    "& .send":{
        width: "130px",
        height: "40px",
        borderRadius: "10px",
        background: "#2E4CFF",
        color:"#fff",
        marginTop:"-39px",
        marginRight:"30px",
        textAlign:"center",
    },
    "& .t-email":{
        paddingTop:"9px",
        fontSize:"15px",
    }
}) 