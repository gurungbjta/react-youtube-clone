import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'
import meiyu from './images/meiyu.png';
import meiyu_pic from './images/meiyu_pic.png';
import eun_woo from './images/eun_woo.png';
import astro from './images/astro.png';
import cha_eun_woo from './images/cha_eun_woo.png';
import kdrama from './images/kdrama.png';
import startup from './images/startup.png';
import kbs from './images/kbs.png';
import aloha from './images/aloha.png';
import standing_egg from './images/standing_egg.png';
import kpaap from './images/kpaap.png';
import dreaming from './images/dreaming.png';
import cat from './images/cat.png';
import paul from './images/paul.png';
import mellow from './images/mellow.png';
import how from './images/how.png';
import new_music from './images/new_music.png';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <a href="https://www.youtube.com/watch?v=UKcqL9oUkIM">
                    <VideoCard 
                    image={meiyu_pic}
                    title="TAEYANG (태양) – Eyes, Nose, Lips (눈, 코, 입) cover" 
                    channel="Meiyu Gurung"
                    views="1K views" 
                    timestamp="1 month ago"
                    channelImage={meiyu}
                    />
                </a>
                
                <a href="https://www.youtube.com/watch?v=U7VyQpX6zT4&t=3s">
                    <VideoCard 
                    image={eun_woo}
                    title="EUNWOO LIKE 👍🏻 ‘Making cake for the first time of my life 🚗'" 
                    channel="ASTRO 아스트로"
                    views="2M views" 
                    timestamp="March 30, 2020"
                    channelImage={astro}
                    />
                </a>
                
                <a href="https://www.youtube.com/watch?v=kjpSuoySRtE">
                    <VideoCard 
                    image={aloha}
                    title="Davichi (다비치) - Aloha [SketchBook / ep.459]" 
                    channel="KBS World"
                    views="668K views" 
                    timestamp="1 year ago"
                    channelImage={kbs}
                    />
                </a>

                <a href="https://www.youtube.com/watch?v=GKR4nUJy9Aw&t=1s">
                    <VideoCard 
                    image={startup}
                    title="스타트업 OST (START-UP OST) Part 1-17 전곡 | Full Album" 
                    channel="kDramaFull OST"
                    views="185K views" 
                    timestamp="1 week ago"
                    channelImage={kdrama}
                    />
                </a>

                <a href="https://www.youtube.com/watch?v=FIv-APqHBdk">
                    <VideoCard 
                    image={cha_eun_woo}
                    title="EUNWOO LIKE👍🏻 'JUST ONE 10 MINUTE a small record #1'" 
                    channel="ASTRO 아스트로"
                    views="568K views" 
                    timestamp="Nov 17, 2019"
                    channelImage={astro}
                    />
                </a>

                <a href="https://www.youtube.com/watch?v=JbNr4nMbiTQ">
                    <VideoCard 
                    image={standing_egg}
                    title="Standing Egg - I'll Pick You Up (데리러 갈게) Lyrics [Weightlifting Fairy Kim Bok Joo OST Part 5]" 
                    channel="kpaap2230"
                    views="819K views" 
                    timestamp="3 years ago"
                    channelImage={kpaap}
                    />
                </a>
                
                <a href="https://www.youtube.com/watch?v=hQug3KQW7QY">
                    <VideoCard 
                    image={dreaming}
                    title="Han Hee Jung (한희정) – DREAMING (꿈꾼다) Weightlifting Fairy Kim Bok-Joo OST [Han/Kor/Trans lyrics]" 
                    channel="shoogashii"
                    views="1.3M views" 
                    timestamp="3 years ago"
                    channelImage={cat}
                    />
                </a>

                <a href="https://www.youtube.com/watch?v=e06qdluNOYU">
                    <VideoCard 
                    image={paul}
                    title="Paul Kim (폴킴) - Dream (The King: Eternal Monarch 더 킹: 영원의 군주 OST Part 8) LYRICS" 
                    channel="Kdrama Mellow"
                    views="401K views" 
                    timestamp="7 months ago"
                    channelImage={mellow}
                    />
                </a>
                
                <a href="https://www.youtube.com/watch?v=kTCmv8_AnhM">
                    <VideoCard 
                    image={how}
                    title="[MV] XIA(JUNSU) - How Can I Love You l 태양의 후예 OST Part.10" 
                    channel="MUSIC&NEW 뮤직앤뉴"
                    views="16M views" 
                    timestamp="4 years ago"
                    channelImage={new_music}
                    />
                </a>
            </div>
        </div>
    )
}

export default RecommendedVideos
