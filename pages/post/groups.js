import React from "react";
let close = <div className="close" onClick={() => {
   
}}/>;

export default function Groups(){
    return <div id="main" style={{display: 'flex'}} >

        <article id="intro"
                 className={ 'active timeout'  }
                 >
            <h2 className="major">Groups</h2>
            <span className="image main"><img src={`/static/images/pic01.jpg`}
                                              alt=""/></span>
            <p>I want my customer to be able to open an account for his child, that's meen he can set the credit
                card, and restrict the child only to be able to buy specific goods </p>

            {close}
        </article>
        <video autoPlay={true} width="320" height="240" controls>
            <source src={`/static/video/groups.mp4`} type="video/mp4"/>
        </video>
    </div>
} 

