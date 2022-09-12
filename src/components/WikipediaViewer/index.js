import React from 'react'
import './index.css'

const WikipediaViewer = (props) => {
    const [lensClicked, setLensClicked] = React.useState(false);
     
    const changeToInput = () => {
        setLensClicked(true);
    }

    return (
        <div className="main-container">
            <div className="empty-search-container">
                <h1 className='heading-random-article'>Click here for a random article</h1>
                <div className="search-lens" onClick = {changeToInput} style={{display: lensClicked ? "none" : "block"}}></div>
                <div className="input-container" style={{display: lensClicked ? "block" : "none"}} >
                    <input className='input-field' type="search" placeholder="Search" />
                    <div className='cross-left'></div>
                    <div className="cross-right"></div>
                </div>
                <p className='icon-search-para'>Click icon to search</p>
            </div>
        </div>
    )
}

export default WikipediaViewer