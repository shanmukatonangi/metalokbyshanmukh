import { ChevronLeft, KeyboardArrowRight, NotificationsActive, NotificationsActiveOutlined } from '@mui/icons-material'
import React from 'react'
import "./extras.css"

const Extras = () => {
  return (
   <>
    <div className='extras'>
        <div className='extrasbg'>
        <div className="third">
<div className="tf1">
    <div id="tf11" style={{textAlign:" center",display:"flex",alignItems:"center",justifyContent:"center",color:"white"}}><NotificationsActiveOutlined /></div>
    <p style={{color:"white"}}>Samantha</p>
    <div id="tf12"></div>
</div>



<div className="continue">
    <div className="con1">Continue <div><ChevronLeft /></div><div><KeyboardArrowRight /></div></div>
    <div className="con2">See more<div><KeyboardArrowRight /></div></div>
</div>

<div className="lmd">
    <div className="lmd1">
        <div className="lmd11"></div>
        <div className="lmd12"><div className="insd">WandaVision</div>
        <div className="ind1">1 Episode left</div>
        <div className="ind2"></div>
    </div>
    </div>

    <div className="lmd2">
        <div className="lmd21">Drop</div>
        <div className="lmd22">Watch</div>
    </div>
</div>

<div className="continue">
    <div className="con1">Top Rated <div><ChevronLeft /></div><div><KeyboardArrowRight /></div></div>
    <div className="con2">See more<div><KeyboardArrowRight /></div></div>
</div>




<div className="lmd" style={{backgroundImage:"url(./images/picture\ \(5\).png)" }}>
    <div className="lmd1" style={{flexDirection:" column"}}>
        <div className="lmd11" style={{background:"none" ,color: "white"}}>Supernatural</div>
        
    </div>

    <div className="lmd2">
        <div className="lmd21">Drop</div>
        <div className="lmd22">Watch</div>
    </div>
</div>

<div className="continue">
    <div className="con1">Genres<div><ChevronLeft /></div><div><KeyboardArrowRight /></div></div>
    <div className="con2">See more<div><KeyboardArrowRight /></div></div>
</div>


<div className="lmd" style={{color: "white", display: 'flex',
justifyContent:" center",
alignItems:' center',fontFamily:" 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",height: "99px"}}>
    Drama
</div>

<div className="lmd" style={{ color:' white',display:" flex",
justifyContent:" center",
alignItems: "center",fontFamily:" 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",backgroundRepeat: "no-repeat",height:" 99px"}}>
    Sitcom
</div>



</div>


        </div>

      
    </div></>
  )
}

export default Extras
