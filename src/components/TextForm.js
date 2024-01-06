import React, { useState } from 'react'

export default function TextForm(props) {

    const handlelowClick=()=>{
        const newText2 = text.toLowerCase();
        setText(newText2)

    }

    const handleUpClick = () => {
        // console.log("upperCase btn was clicked" + text);
        const newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("change  btn was clicked");
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="conatiner">
                <form>
                    <h1 style={{color:props.mode==="light" ? "black" : "white"}}>{props.heading}</h1>
                    <div className="mb-3" >
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"    style={{backgroundColor:props.mode==="light" ? "white" : "#212529",color:props.mode==="light" ? "black" : "white"}}> </textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase Letter</button>
                    <button className="btn btn-primary  mx-3" onClick={handlelowClick}>Convert To LowerCase Letter</button>
                </form>
            </div>
            <div className="container my-3"  style={{color:props.mode==="light" ? "black" : "white"}}>
                <h3>Yoour Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <p>{0.008* text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in textarea to  preview"}</p>


            </div>
        </>
    )
}
