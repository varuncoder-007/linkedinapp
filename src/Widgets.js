import React from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {
    const newsArticle = (heading,subtitle) =>(
        <div className="widgets__article">

        <div className="widgets__articleLeft">
             <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Varun is back", "Top news-4555 readers ")}
            {newsArticle("Corona Virus Updates", "Top news-4335 readers ")}
            {newsArticle("Tesla has new heights", "Cars and auto-2345 readers ")}
            {newsArticle("Bitcoin breaks at $22K", "Finance news-1225 readers ")}
        </div>
    )
}

export default Widgets
