import {Col, Container} from "reactstrap";
import TextLoop from "react-text-loop";
import React, {useState} from "react";
import YouTubePlayer from 'react-player/lib/players/YouTube';
import ReactPlayer from "react-player";

export default function Post({children, video, title}) {

    const [active, setActive] = useState('text')
    let goToVideo = <div className={"minimize"} onClick={() => {
        setActive('video')
    }}/>


    let goToText = <div className={"maximize"} onClick={() => {
        setActive('text')
    }}/>
 
    
const textDisplay=active === 'text' ? 'block' : 'none';
    return <div>
        <div id="video_box" >
            <div id={`${video}-text`} className={`center align-center video_overlays ${active === 'text' ? 'active' : ''} timeout`}
                     style={{display:textDisplay, 'vertical-align':"center"}}>
              <TextLoop  springConfig={{ stiffness: 180, damping: 8 }} mask={true} interval={2000} >
                    {children}
                </TextLoop>
                {goToVideo}
            </div>
 
            <div className={`${active === 'video' ? 'active' : ''} timeout`} style={{display:textDisplay}} >
                <a href={video}>Watch In YouTube</a>
                <ReactPlayer  className={`${active === 'video' ? 'active' : ''} timeout`} style={{display:textDisplay}}
                    url={`https://www.youtube.com/watch?v=${video}&html5=true`}
                />
              
            </div>
        </div>

    </div>

}

function Post2({children, video, title}) {

    const [active, setActive] = useState('text')
    let goToVideo = <div className={"close"} onClick={() => {
        setActive('video')
    }}>Go to Video</div>


    let goToText = <div onClick={() => {
        setActive('text')
    }}>Go to Titles</div>

    return <div>
        <h2 className="major">{title}</h2>
        <div id={video} style={{display: 'flex'}}>

            <article id={`${video}-text`} className={`${active === 'text' ? 'active' : ''} timeout`}
                     style={{display: 'none'}}>

                <div>
                    {goToVideo}
                    <TextLoop interval={2000} width="640" height="480">

                        {children}

                    </TextLoop>

                </div>
            </article>

            <article id={`${video}-vid`} className={`active timeout`}
                     style={{display: 'none'}}>
                <video width="640" height="480" controls>
                    <source src={video} type="video/mp4"/>
                    {goToText}

                </video>
            </article>

        </div>

    </div>

} 