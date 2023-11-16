import React from 'react'
import Navbar from './Navbar'
import Bank from '../Bank'
import Fotter from './Fotter'
function Main() {
  return (
    <>
    <Navbar />

    <div className='container-xl'style={{position:"relative", top:"150px" }} >
      <div className=" main d-flex justify-content-between">
        {/* left */}
       <div className='mainLeft'>
         <h1 className='lh-base'>Let's find you <br /> the <strong>Best Banking Sector</strong> </h1>
          <div className='my-4 d-flex justify-content-between mainIn'>
           <div className=' border rounded-3 p-3 m-2  d-flex'>
            <img src="https://cdn-icons-png.flaticon.com/512/1838/1838239.png" style={{width:"30px", height:"30px"}} alt="" />
            <h5 className='px-3'>50+ Banks with one <br /> of the best place</h5>
            </div>  
            <div className=' border rounded-3 p-3 m-2 d-flex'>
            <img src="https://cdn-icons-png.flaticon.com/512/5442/5442064.png" style={{width:"30px", height:"30px"}} alt="" />
            <h5 className='px-3'>Quick, easy & <br /> hassle free</h5>
            </div> 
          </div>       
       </div>
       {/* right */}
       <div className='mainRight' style={{width:"600px", height:"200px"}}>
       <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"310px"}} src="https://pbs.twimg.com/media/CmA0cj9WEAAYNkR.jpg" class="rounded-4 image d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://pbs.twimg.com/media/DVRccs9VAAA3E_d.jpg" class="rounded-4 d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://pbs.twimg.com/media/DUm0FmmV4AApt-R.jpg" class="rounded-4 d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       </div>
      </div>

    <div style={{marginTop:"100px"}}>
        <h1 className='fw-bolder'>Bank Advantages</h1>
        <p className=''>When you buy insurance from us, you get more than just financial safety. You also get: <br /> our promise of simplifying complex insurance terms and conditions,  quick stress-free <br /> claims, instant quotes from top insurers and being present for you in the toughest of times.</p>
        <button className='btn btn-primary'>know more</button>
    </div>

    <div className='features d-flex justify-content-between m-3'>
        <div className=' rounded-3 p-2 border'>
            <img style={{width:"150px"}} src="https://cdn.iconscout.com/icon/premium/png-256-thumb/multiple-cards-3591358-3021593.png?f=webp" alt="" />
            <div className='m-3'>

            <h3 >One of the best <br /> Prices</h3>
            <p>Guaranteed</p> 
            </div>
        </div>
        <div className=' rounded-3 border p-2'>
            <img style={{width:"150px"}} src="https://previews.123rf.com/images/burntime555/burntime5551807/burntime555180700003/104228234-%D0%BEnline-assistant-vector-illustration-icon-customer-service-male-hotline-operator-advises-client.jpg" alt="" />
            <div className='m-3'>

            <h3 >Unbiased Advice</h3>
            <p>Keeping customers first</p> 
            </div>
        </div>
        <div className=' rounded-3 border p-2'>
            <img style={{width:"150px"}} src="https://static.vecteezy.com/system/resources/thumbnails/002/698/552/small/young-man-using-smartphone-chatting-character-free-vector.jpg" alt="" />
            <div className='m-3'>

            <h3 >100% Reliable</h3>
            <p>Regulated by IRDAI</p> 
            </div>
        </div>
        <div className=' rounded-3 border p-2'>
            <img style={{width:"150px"}} src="https://static.vecteezy.com/system/resources/previews/006/368/136/original/person-holding-document-with-cogwheels-flat-icon-of-file-configuration-vector.jpg" alt="" />
            <div className='m-3'>
            <h3 >Claims Support</h3>
            <p>Made stress-free</p> 
            </div>
        </div>
        <div className=' rounded-3 border p-2'>
            <img style={{width:"150px"}} src="data:image/png;base64,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" alt="" />
            <div className='m-3'>
            <h3 >Happy to Help</h3>
            <p>Every day of the week</p> 
            </div>
        </div>
    </div>
    </div>
     <Bank />    
     <Fotter />

     </>
  )
}

export default Main
