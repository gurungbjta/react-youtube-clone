import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow'
import BlackPink from './images/BlackPink.png'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow 
            image={BlackPink}
            channel="BLACKPINK"
            verified
            subs="54.6M"
            noOfVideos={329}
            description="BLACKPINK Official YouTube Channel 블랙핑크 공식 유튜브 채널입니다. JISOO, JENNIE, ROSÉ, LISA 지수, 제니, 로제, 리사."
            />

            <hr/>
        </div>
    )
}

export default SearchPage
