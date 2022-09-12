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
            {imgUrl !== "" ? <img src={imgUrl} alt="thumbnail" className='thumbnail' /> : ""}
            <div className='wiki-details-container'>
                <h1 className='wiki-title'>{title}</h1>
                <p className='wiki-summary'>{summary}</p>
            </div>
        </button>
     )
}

export default WikipediaSearchResult