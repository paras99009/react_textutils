import React , {useState} from 'react'



export default function TextForm(props) {
 const handleUpClick=()=>{
  console.log("click succeesfull")
  let newText= text.toUpperCase();
  setext(newText)
  props.showalert(" Your Text Change Into UpperCase","success")
 }

 const handleLoClick=()=>{
  let newText= text.toLowerCase();
  setext(newText)
  props.showalert(" Your Text Is Changed Into LowerCase","success")
 }
 
  const changeAble=(e)=>{
    console.log("value just changed");
    setext(e.target.value)
  }
  const handleCopy=()=>{
    var boxv =document.getElementById("myBox")
    boxv.select();
    navigator.clipboard.writeText(boxv.value)
    props.showalert(" Your Text is Copied","success")
  }
  const handlespace=()=>{
  let new_text= text.split(/[ ]+/);
     console.log(new_text)
     
    
    setext(new_text.join(" "))
    

  }
  const[text,setext]= useState("");
  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?"white":"black"}}>
      <h1 >{props.heading}</h1>  
  <div>
    <textarea className="form-control" id="myBox" value={text} onChange={changeAble} style={{backgroundColor:props.mode==='dark'?"black":"white",
  color:props.mode==='dark'?"white":"black"}} rows="8" aria-describedby="emailHelp"/>
</div>
<button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button> 
<button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>convert to Lower case </button> 
<button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text </button> 
<button className="btn btn-primary my-2 mx-2" onClick={handlespace}>Remove spaces </button> 
  </div>
  <div className="container my-2"  style={{color:props.mode==='dark'?"white":"black"}}>
    <h1>Your Text summary</h1>
    <p>
    word {text.split(" ").filter((element)=>{ return element.length!==0}).length} and Characters {text.length} <br/>
    Total Time to Read This {0.008* text.split(" ").filter((element)=>{ return element.length!==0}).length}minutes</p>
    <h2>Preview</h2>
   <p>{text.length>0? text:"Write something first in the above box"}
    </p>
  </div>
  </>
  )
}



