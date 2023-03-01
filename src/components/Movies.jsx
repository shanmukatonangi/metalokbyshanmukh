import { AddOutlined, ArrowBack, ArrowBackIosOutlined, ArrowBackOutlined, ArrowForwardIosOutlined, FilterAltOutlined, SearchOutlined, Star } from '@mui/icons-material'
import React from 'react'
import "./movies.css"

const Movies = () => {
  return (
    <div>
        <div className='movies'>
            <div className='categ'>
                <p className='movip'>Movies</p>
                <p className='movip1'>TV Shows</p>
                <div className='linm'></div>
                <p className='movip2'>Anime</p>
            </div>

            <div className='search'>

                <div className='srchbar'>

                    <SearchOutlined className='sbr'/>
                    <p className='sbr1'>Search</p>
                    <FilterAltOutlined className='sbr2' />
                </div>


            </div>

            <div className='poster'>
                <div className='pst1' >
                    <h3 className='potit'>The Crown</h3>

                    <div className='prev'>
                        <div className='prev1'><ArrowBackIosOutlined sx={{color:"white"}} className="arrowl" /></div>

                    </div>

                    <div className='next'>
                          <div className='next1'>

                           <ArrowForwardIosOutlined className='arrowr' /> 
                          </div>

                    </div>
                    <div className='watchlists'>
                       <div className='wtlist'>
                       <AddOutlined className='wtch' />
                        <p className='wtch1'>Watchlist</p>
                       </div>
                    </div>
                    <div className='tdots'>
                        <div className='tdot1'></div>
                        <div className='tdot2'></div>
                        <div className='tdot3'></div>
                    </div>
                    <div className='watchnow'>
                        <p className='wtchnow'>Watch Now</p>
                    </div>

                </div>


            </div>

<h2 className='potm'>Popular On TinyMoviez</h2>


<div className='mov'>
    <div className='qwe'>
        <p className='qwetit'>loki</p>
        <div className='review' style={{gap:"1px"}}>
            <Star sx={{color:"#00B9AE",height:"19px"}} className="starsicons"  />
            <Star sx={{color:"#00B9AE",height:"19px"}} className="starsicons" />
            <Star sx={{color:"#00B9AE",height:"19px"}} className="starsicons" />
            <Star sx={{color:"#00B9AE",height:"19px"}} className="starsicons" />
        </div>
        <div className='episodes'>6ep</div>
        <div className='catesuper'>Super Hero</div>
         <div className='addnowatch'><AddOutlined sx={{color:"white"}}   className="addoutl" /></div>
         <div className='watchnowbutton'><p className='pwatchnow'>Watch</p></div>
    </div>
    </div>
<div className='mov1'>
    <div className='qwe1'>
    <p className='qwetit1'>Chernobyl</p>
    <div className='review1'>
    <Star sx={{color:"#00B9AE",height:"19px"}} className="starsicons"  />
            <Star sx={{color:"#00B9AE",height:"19px"}} className="starsicons" />
            <Star sx={{color:"#00B9AE",height:"19px"}} className="starsicons" />
            
    </div>
     <div className='episodes'>5ep</div>
     <div className='catesuper'>Mini Series</div>
      <div className='addnowatch'><AddOutlined sx={{color:"white"}}   className="addoutl" /></div>
      <div className='watchnowbutton'><p className='pwatchnow'>Watch</p></div>
    

    </div>
    </div>
<div className='mov2'>
    <div className='qwe2'>
    <p className='qwetit2'>Rick & Monty</p>
    <div className='review2'> <Star sx={{color:"#00B9AE",height:"19px"}} className="starsicons"  />
            <Star sx={{color:"#00B9AE",height:"19px"}} className="starsicons" />
            <Star sx={{color:"#00B9AE",height:"19px"}} className="starsicons" />
          </div>
    <div className='episodes'>49ep</div>
    <div className='catesuper'>Fantasy</div>
     <div className='addnowatch'><AddOutlined sx={{color:"white"}}   className="addoutl" /></div>
     <div className='watchnowbutton'><p className='pwatchnow'>Watch</p></div>
   
    </div>
    </div>

        </div>
      
    </div>
  )
}

export default Movies
