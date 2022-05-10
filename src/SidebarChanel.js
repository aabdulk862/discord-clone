import React from 'react'
import './SidebarChannel.css'

function SidebarChanel({id, channelName}) {
  return (
    <div className='sidebarChannel'>
        <h4><span className="sidebarChannel__hash">#</span>{channelName}</h4>
    </div>
  )
}

export default SidebarChanel