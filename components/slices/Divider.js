import React from 'react';


export default ({ type, backgroundColor, side, flipped }) => {
  return (
    <>
       { flipped == "horizontally" ? <div className={ type + "_" + ( side === "top" ? "bottom" : "top" ) + " " + backgroundColor }></div> : false }
       
       { flipped == "vertically" ? <div className={ type + "_" + side + "-vertically-flip " + backgroundColor }></div> : false }

       { flipped == "horizontally and vertically" ? <div className={ type + "_" + ( side === "top" ? "bottom" : "top" ) + "-vertically-flip " + backgroundColor }></div> : false }

       { flipped !== "horizontally" && flipped !== "vertically" && flipped !== "horizontally and vertically" ? <div className={ type + "_" + side + " " + backgroundColor }></div>  : false}
    </>
  )
}
