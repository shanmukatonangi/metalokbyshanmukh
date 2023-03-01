import { AddCircleOutlineOutlined, AddCircleOutlineRounded, CheckBoxOutlined, CottageOutlined, DoorFrontOutlined, DownloadingOutlined, EmojiEventsOutlined, ExploreOutlined, FavoriteBorderOutlined, Home, HomeMaxOutlined, HomeOutlined, SettingsOutlined, StarBorderOutlined, VerifiedOutlined, WatchLaterOutlined } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div>
        <div className='sidebar'>
            <div className='dashboard'>Dashboard</div>
            <div className='menu1'>
                <p className='menu'>Menu</p>
               <div className='home'>
                <CottageOutlined className='homeic' />
                <p className='homeic1'>Home</p>
               </div>
               <div className='discover'>
                <ExploreOutlined className='discic' />
                <p className='discic1'>Discover</p>


               </div>

               <div className='awards'>
                <EmojiEventsOutlined className='awardsic' />
                <p className='awardsic1' >Awards</p>


               </div>

               <div className='celebrities'>
                <VerifiedOutlined className='celeic' />
                <p className='celeic1'>Celebrities</p>

               </div>


            </div>

            <div className='library'>

                <div className='lib'>library</div>

                <div className='recent'>

                    <WatchLaterOutlined className='rece' />
                    <p className='rece1'>Recent</p>
                </div>

                <div className='top'>
                    <StarBorderOutlined className='tr' />

                    <p className='tr1'>Top</p>


                </div>

                <div className='downloads'>
                    <DownloadingOutlined className='dws' />

                    <p className='dws1'>Downloads</p>


                </div>

                <div className='playlist'>

                    <FavoriteBorderOutlined className='ply' />
                    <p className='ply1'>PlayLists</p>
                </div>

                <div className='watchlist'>
                    <AddCircleOutlineRounded  className='wt' />

                    <p className='wt1'>Watchlist</p>

                </div>

                <div className='completed'>
                    <CheckBoxOutlined className='cmp' />

                    <p className='cmp1'>Completed</p>

                </div>

            </div>

            <div className='general'>
              <p className='gene'>General</p>

              <div className='settings'>
                <SettingsOutlined className='set' />


                <p className='set1'>Settings</p>
              </div>

              <div className='logout'>
                <DoorFrontOutlined className='log' />

                <p className='log1'>Log Out</p>
              </div>

            </div>


        </div>
      
    </div>
  )
}

export default Sidebar
