import React, { useState } from "react";

export default function Textform() {
    const [text, setText] = useState("");
    //Event Hander
    const handenOnchange = (event) => {
        setText(event.target.value);
    };

    //To Upper Case 
    const textUP = () => {
        let upText = text.toUpperCase();
        setText(upText);
    };

    //To Lower Case
    const textlow = () => {
        let lowText = text.toLowerCase();
        setText(lowText);
    }

    //Remove White Space
    const removeWhiteSpace = () => {
        let rws = text.trim();
        setText(rws);
        console.log(text.trim())
    }

    // //Count Latters
    // const countL = () => {
    //     let cl = text.length; 
    //     window.alert("Total Characters are: " + cl)
    // }
    


    return (
        <>
            <div className="container">
                <h3 className="my-3">Enter Text Here</h3>
                <textarea className="form-control" placeholder="Please Write" id="textbox" value={text} rows="10" onChange={handenOnchange}></textarea>
                <div className="row">
                    <button type="button" className="btn btn-primary mx-2 my-2 col-auto" onClick={textUP}> Convert To Uppercase </button>
                    <button type="button" className="btn btn-primary mx-2 my-2 col-auto" onClick={textlow}> Convert To Lowercase </button>
                    <button type="button" className="btn btn-primary mx-2 my-2 col-auto" onClick={removeWhiteSpace}> Remove White Scpaces </button>
                    <button type="button" className="btn btn-primary mx-2 my-2 col-auto" > Count Latters </button>
                </div>
            </div>
            {/* <div className=" card text-left card-header">
                <p className="my-0">{text.split(" ").length - 1} Words {text.length} Characters</p>
            </div> */}
            <div className="row">
                <div className="col-sm-3 text-center py-3">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title py-3">{text.split(" ").length - 1}</h1>
                            <button className="btn btn-primary px-auto fs-5 fw-bold" >Words</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 text-center py-3">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title py-3">{text.length}</h1>
                            <button className="btn btn-primary px-auto fs-5 fw-bold" >Characters</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 text-center py-3">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title py-3">{(text.match(/[.!?]+/g) || []).length}</h1>
                            <button className="btn btn-primary px-auto fs-5 fw-bold" >Paragraphs</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 text-center py-3">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title py-3">{(0.15189873417 * (text.split(" ").length - 1)/60).toFixed(3)}</h1>
                            <button className="btn btn-primary px-auto fs-5 fw-bold" >Read Time</button>
                        </div>
                        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark">Minutes</span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header"> Preview Panel</div>
                <div className="card-body">
                    {text}
                </div>
            </div>
        </>

    );
}
