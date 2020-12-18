import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChannelRow.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={image} alt={channel} />
            <div className="channelRow__text">
                <h4>{channel}{verified && <CheckCircleIcon/>} </h4> {/* if verified is true, then also add CheckCircleIcon  */}
                <p>{subs} subscribers • {noOfVideos} videos </p>
                <p>{description}</p>
            </div>
        </div>  
        
    )
}

export default ChannelRow
