import { styled } from "@stitches/react"

export const HomeStyle = styled("div",{
    display:"flex",
    alignItems: "stretch",
    height:"100vh",
    aside: {
        flex: "7",
        background: "#835afd",
        color:"#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        padding: "120px 80px",
        img: {
            maxWidth: "320px"
        },
        strong: {
            fontWeight:"bold",
            fontSize: "36px",
            fontFamily:"Poppins, sans-serif",
            lineHeight: "42px",
            marginTop:" 16px",
        },
        p: {
            fontSize:"24px",
            lineHeight:"32px",
            marginTop: "16px",
            color:"#f8f8f8"
        }
    },
    main: {
        flex: "8",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    ".main-content": {
        display:"flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "320px",
        alignItems: "stretch",
        textAlign: "center",
        img: {
            alignSelf: "center"
        },
        form: {
            input: {
                height:"50px",
                borderRadius: "8px",
                padding: "0 16px",
                background:"#FFF",
                border:"1px solid #a8a8b3"
            },
            button:{
                marginTop:"16px"
            },
            "button, input": {
                width:"100%"
            }
        },
        ".create-room":{
            marginTop:"64px",
            height:"50px",
            borderRadius:"8px",
            fontWeight:500,
            background:"#ea4335",
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
            "&:hover":{
                filter:"brightness(0.9)"
            }
        },
        ".separator":{
            fontSize:"14px",
            color:"#a8a8b3",
            margin:"32px 0",
            display: "flex",
            alignItems:"center",

            "&::before":{
                content:"",
                flex:1,
                height: "1px", 
                background: "#a8a8b3",
                marginRight:"16px"
            },

            "&::after":{
                content:"",
                flex:1,
                height: "1px",
                background: "#a8a8b3",
                marginLeft:"16px"
            }
        },

        
    }
})