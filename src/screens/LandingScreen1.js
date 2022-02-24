import React,{useState, useEffect} from "react";
import Art3d from "../components/art3d";
import './LandingScreen1.css'
import Navigation from "../components/navigation";
import Api from "../node/ex"
import Button from "../components/button";
import { Data } from "../components/data";
import Grow from "@material-ui/core/Grow";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const LandingScreen1 = () => {
    const [data , setData] = useState(null)
    const [submit, Setsubmit] = useState(false);
    const [input, setInput] = useState('')
    var [i , seti] = useState(0);
    const [ischecked, setischecked] = useState(true)

    useEffect(()=>{
        Api.get("/").then((response) => setData(response.data.message))

    })

    useEffect(() => {
        if(submit) {
            Api.post("/email", {email: input})
            Setsubmit(false)
        }
    }, [submit])
    const Submit = () => {
        Api.post("/email", {email: input})
        console.log(input)
    }

    const next = () =>{
        i = i+1;
        var j = Data.length
        var k = i%j;
        seti(k);
        setischecked(true);
        // setTimeout(() =>{
        //     setischecked(true);
        // }, 1000)
    }
    const textwala = () =>{
        return(
            <Grow in={ischecked} >
                <div style={{"marginBottom" : '15px'}}>
                    <h1 id="subone" >{Data[i].heading}</h1>
                    <p className="subtext">{Data[i].sub}</p>
                </div>
            </Grow>
        )
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    return(
        <>
            <Navigation />
        <div className="zero">
            <div id="one">
                {textwala()}
                <div className="btn">
                    <div className="formwrapper">
                        <form onSubmit={Submit}>
                            <input id="form1" type="email" placeholder="example@gmail.com" name="email" required value={input} onChange={e => setInput(e.target.value)} />
                            <button id="form2" type="submit">submit</button>
                        </form>
                        {/* <Mui /> */}
                        <i className="subtext" style={{"fontSize" : "15px", "marginTop" : "5px", "marginLeft" : "8px" }}>please submit your email to get early access</i>
                    </div>
                    <div onClick={() => {setischecked(false);setTimeout(() => {next()}, 500)}}>
                        <Button />
                    </div>
                </div>
                
            </div>
            <div id="two">
                <Art3d />
            </div>    
        </div>
        </>
    )
    
}


export default LandingScreen1;