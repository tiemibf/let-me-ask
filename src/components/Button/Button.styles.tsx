import { styled } from "@stitches/react";

export const ButtonStyle = styled("button", {
    marginTop:"64px",
    height:"50px",
    borderRadius:"8px",
    fontWeight:500,
    background:"#835afd",
    color:"#FFF",
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    cursor:"pointer",
    border:0,
    transition: "filter 0.2s",
    img: {
        marginRight:"8px"
    },
    "&:not(:disabled):hover":{
        filter:"brightness(0.9)"
    },
    "&:disabled":{
        opacity:"0.6",
        cursor:"not-allowed"
    }
})

