import React from 'react'
import './index.css'
import WikipediaSearchResult from '../WikipediaSearchResult';

const WikipediaViewer = () => {
    const [lensClicked, setLensClicked] = React.useState(false);
    const [wikiSearchKey, setWikiSearchKey] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [noResults, setNoResults] = React.useState(true);
     
    const changeToInput = () => {
        setLensClicked(true);
    }

    const changeBack = () => {
        setLensClicked(false);
    }

    const inputOnChange = (event) => {
        setWikiSearchKey(event.target.value);
    }

    const gettingSearchResults = (event) => {
        if(event.key === 'Enter'){
            fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${wikiSearchKey}&gsrlimit=20&prop=pageimages|extracts&exchars=220&exintro&explaintext&exlimit=max&format=json&origin=*`)
               .then((response) => response.json())
               .then((data) => {
                    setNoResults(false)
                    if(data.hasOwnProperty('query')){
                        const arr = []
                        for(let key in data.query.pages){
                            arr.push({...data.query.pages[key], id: key});
                        }
                        setSearchResults(arr);
                    }
                    else{
                        setSearchResults([])
                    }
               });
        }
    }

    return (
            (searchResults.length !== 0) || !noResults ? 
               (<div className='search-results-main-container'>
                    <h1 className='heading-random-article'>Click here for a random article</h1>
                    <input className='input-field' type="search" placeholder="Search" value = {wikiSearchKey} onChange={inputOnChange} onKeyDown = {gettingSearchResults} />
                    {(!noResults && searchResults.length === 0) && <h1 class="no-results">No results found</h1>}
                    <div className='search-results-container'>
                        {searchResults.map((item) => <WikipediaSearchResult key = {item.id} title={item.title} summary = {item.extract} imgUrl = {item.hasOwnProperty('thumbnail') ? item.thumbnail.source: ""} wikiId = {item.id} />)}
                    </div>
               </div>)
               : 
               (<div className="main-container">
                    <div className="empty-search-container">
                        <h1 className='heading-random-article'>Click here for a random article</h1>
                        <div className="search-lens" onClick = {changeToInput} style={{display: lensClicked ? "none" : "block"}}></div>
                        <div className="input-container" style={{display: lensClicked ? "block" : "none"}} >
                            <input className='input-field' type="search" placeholder="Search" value = {wikiSearchKey} onChange={inputOnChange} onKeyDown = {gettingSearchResults} />
                            <div className='cross-left' onClick={changeBack}></div>
                            <div className="cross-right" onClick={changeBack}></div>
                        </div>
                        <p className='icon-search-para'>Click icon to search</p>
                    </div>
               </div>)
    )
}

export default WikipediaViewer