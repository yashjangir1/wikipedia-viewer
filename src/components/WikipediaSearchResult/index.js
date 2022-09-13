import React from 'react'
import './index.css'

const WikipediaSearchResult = (props) => {
     const {title, summary, imgUrl, wikiId} = props
     const wikipediaPage = `https://en.wikipedia.org/?curid=${wikiId}`
     
     const goToWikiPage = () => {
        window.open(wikipediaPage, '');
     }

     return (
        <button className='search-result-container' onClick = {goToWikiPage}>
            <div className="thumbnail-and-title-container">
                {imgUrl !== "" ? <img src={imgUrl} alt="thumbnail" className='thumbnail' /> : ""}
                <h1 className='wiki-title'>{title}</h1>
            </div>
            <p className='wiki-summary'>{summary}</p>
        </button>
     )
}

export default WikipediaSearchResult