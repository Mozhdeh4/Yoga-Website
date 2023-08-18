import {Grid, Button , SxProps, Theme} from "@mui/material";

interface IButton {
  text:string;
  bgColor?:string
  color?:string
  className?:string
}

export const Buttons = ({text,bgColor,color,className,...props}: IButton ) => {
    return (
    <Grid item sx={buttonSx(bgColor,color)}>
        <Button  {...{...props,className:className + " button"}}>{text}</Button>
    </Grid>
    )
} 

const buttonSx = (bgColor?:string,color?:string):SxProps<Theme> => ({
    
 "& .button":{
    color:color   ?? "#2E4CFF",
    backgroundColor:bgColor ?? "#fff",
    width:{xs:"120px", md:"150px"},
    height:"50px",
    border:"1px solid #FFF",
    borderRadius:"12px",
    fontSize:"16px",
    fontWeight:"500",
    textTransform:"capitalize",
    marginLeft:{xs:"20px", md:"unset"},
     
    "&:hover":{
      backgroundColor: "#2E4CFF",
      color:"white"
    }
 }
})