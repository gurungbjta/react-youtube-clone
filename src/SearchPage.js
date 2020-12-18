import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow'
import BlackPink from './images/BlackPink.png'
import fire from './images/fire.png'
import du from './images/du.png'
import stay from './images/stay.png'
import last from './images/last.png'
import kill from './images/kill.png'
import whistle from './images/whistle.png'
import solo from './images/solo.png'
import VideoRow from './VideoRow'


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
            <VideoRow views="595M"
            subs="54.6M"
            description="Available @ https://BLACKPINK.lnk.to/SQUARETWOID #BLACKPINK #SQUARETWO #불장난 #PLAYINGWITHFIRE"
            timestamp="4 years ago"
            channel="BLACKPINK"
            title="BLACKPINK - '불장난 (PLAYING WITH FIRE)' M/V"
            image={fire} />

            <VideoRow views="1.4B"
            subs="54.6M"
            description="Download on iTunes @ http://smarturl.it/BP_SquareUp/itunes Download on AppleMusic ..."
            timestamp="2 years ago"
            channel="BLACKPINK"
            title="BLACKPINK - ‘뚜두뚜두 (DDU-DU DDU-DU)’ M/V"
            image={du} />

            <VideoRow views="247M"
            subs="54.6M"
            description="Available @ https://BLACKPINK.lnk.to/SQUARETWOID #BLACKPINK #SQUARETWO #STAY #MV #20161101"
            timestamp="4 years ago"
            channel="BLACKPINK"
            title="BLACKPINK - 'STAY' M/V"
            image={stay} />

            <VideoRow views="926M"
            subs="54.6M"
            description="Download on iTunes @ http://smarturl.it/BLACKPINK_3RD Download on AppleMusic @"
            timestamp="3 years ago"
            channel="BLACKPINK"
            title="BLACKPINK - '마지막처럼 (AS IF IT'S YOUR LAST)' M/V"
            image={last} />

            <VideoRow views="1.1B"
            subs="54.6M"
            description="BLACKPINK - 'Kill This Love' Available on iTunes @ http://smarturl.it/KillThisLove/iTunes Available on Apple"
            timestamp="1 year ago"
            channel="BLACKPINK"
            title="BLACKPINK - 'Kill This Love' M/V"
            image={kill} />

            <VideoRow views="594M"
            subs="54.6M"
            description="Available @ https://BLACKPINK.lnk.to/SQUAREONEID #‎BLACKPINK #‎휘파람 #‎WHISTLE #‎DEBUTSINGLE"
            timestamp="4 years ago"
            channel="BLACKPINK"
            title="BLACKPINK - '휘파람'(WHISTLE) M/V"
            image={whistle} />

            <VideoRow views="583M"
            subs="54.6M"
            description="Download on Apple Music @ http://smarturl.it/SOLOJennie/applemusic Download on"
            timestamp="2 years ago"
            channel="BLACKPINK"
            title="JENNIE - 'SOLO' M/V"
            image={solo} />
        </div>
    )
}

export default SearchPage
