import React from 'react'
import { RiTeamFill } from "react-icons/ri";
import { PiForkKnifeFill } from "react-icons/pi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdHotelClass } from "react-icons/md";
import { Md24Mp } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { TiChevronRightOutline } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../assets/css/home.css';



function Home() {
  return (
    <>
     <div className="header-div">
        
        <header className="head-bar">
        <img src="src/images/WhatsApp_Görsel_2025-05-03_saat_19.21.20_19b032e1-removebg-preview.png" alt="" className="basqal-logo" />
       
       
        <ul className="list-menu">
          <li className="list-item"><Link className='link-item' to='/'>Ana səhifə</Link> </li>
          <li className="list-item"><Link className='link-item'  to='/About'>Haqqında</Link></li>
          <li className="list-item"><Link className='link-item'  to='/Servis'>Xidmət</Link></li>
          <li className="list-item"><Link className='link-item'  to='/Menyu'>Menyu</Link></li>
          <li className="list-item"><Link className='link-item'  to='/Pages'>Pages</Link></li>
          <li className="list-item"><Link className='link-item' to='/Contact'>Əlaqə</Link></li>
        </ul>
  
        </header>
        <div className="head-info">
  
          <div className="writings">
         <h1 className="header-one">Ləzzət burada başlayır</h1>
           <p className="paragraf-one">"Mətbəximizdən qəlbinizə gedən yol"</p>
           <button className="start-btn"><Link to='/Menyu' className='link-btn'>Yeməkləri kəşf et</Link></button>
           </div>
  
           <img src="https://themewagon.github.io/restoran/img/hero.png" alt="" className="rotating"/>
        
        </div>
        </div>

        <div className="about-div">

<div className="team"><RiTeamFill  className="team-icon"/>
<h2 className="team-header">Komandamız</h2>
<p className="team-paraqraf">“Gülərüz xidmətlə həmişə xidmətinizdəyik!”</p>
</div>

<div className="qualityfood"><PiForkKnifeFill  className="food-icon"/>
<h2 className="food-header">Keyfiyyətli Qida</h2>
<p className="food-paraqraf">“Yemək, hər təamda bir sevgi, hər loxmada bir zövqdür.”</p>
</div>

<div className="hall"><SiHomeassistantcommunitystore   className="hall-icon"/>
<h2 className="hall-header">Banket Zalı</h2>
<p className="hall-paraqraf">“Ad günü və nişan günlərinizi bizimlə unudulmaz edin.”</p>
</div>

<div className="hotel"><MdHotelClass className="hotel-icon" />
<h2 className="hotel-header">Hotel</h2>
<p className="hotel-paraqraf">“Restoranımızda otel xidmətidə fəaliyyət gösterir.”</p>
</div>

<div className="opentoeveryone"><Md24Mp  className="open-icon"/>
<h2 className="open-header">24/7 Servis</h2>
<p className="open-paraqraf">“Restoranımız 7 gün, 24 saat xidmətinizdədir!”</p>
</div>

</div>
{/* About div End */}
<div className="aboutus-div">
 <div className="aboutus-image">
  <img src="https://themewagon.github.io/restoran/img/about-1.jpg" alt=""   className="image-one"/>
  <img src="https://themewagon.github.io/restoran/img/about-2.jpg" alt="" width={230} height={214} className="image-two"/>
  <img src="https://themewagon.github.io/restoran/img/about-3.jpg" alt="" width={230} height={214} className="image-three"/>
  <img src="https://themewagon.github.io/restoran/img/about-4.jpg" alt="" width={214} height={214} className="image-four"/>

 </div>

 <div className="aboutus-text">
  <h5 className="us">About Us-</h5>
 
  <div className="welcome">
   <h1>Xoş gəldiniz </h1>
   <img src="src/images/ChatGPT Image May 2, 2025, 10_13_44 AM.png" alt="" />
   </div>

   <h3 style={{paddingBottom:"10px"}}>Restoranımız dad, keyfiyyət və ənənəni bir araya gətirərək qonaqlarına unudulmaz bir təcrübə bəxş edir.</h3>
   <h3 style={{paddingTop:"10px"}}>Peşəkar komandamızla, hər yeməkdə sevgi və ustalığı hiss etdiririk.</h3>
    <div className="aboutus-numbers">
       <h1>| </h1>
        <h2>20</h2>
        <h3>İlin <br />Fəaliyyəti</h3>
       <h1 className="line">| </h1>
        <h2>2</h2>
        <h3>Usta <br />Aşpazlar</h3>
    </div>
 <button><Link to='/About' className='link-btn'>Əlavə məlumat</Link></button>
 
 </div>

</div>
      <div className='referans'>
      <h1 className='referans-text'>-Referans-</h1>
       <h1 className='referans-text-two'>Müştərilərimiz deyir ki!!!</h1>

       <div className='referans-comment-div'>

        <div className='Clients-comment'>
             <FaCommentDots  style={{fontSize:"40px",marginLeft:"30px",marginTop:"10px",color:"orange"}}/>
            <h1> Yeməklər çox gözəl və dadlıdır.</h1>

            <div className='clients'>
            <div className='foto'><img src="https://themewagon.github.io/restoran/img/testimonial-2.jpg" alt="" width={50} height={50} style={{borderRadius:"50%"}} /></div>
              <h4>Elnur Mammadli <br /> Developer</h4>
              
            </div>
        </div>




        <div className='Clients-comment'>
        <FaCommentDots  style={{fontSize:"40px",marginLeft:"30px",marginTop:"10px",color:"orange"}}/>
            <h1> Xidmət çox möhtəşəmdir.</h1>

            <div className='clients'>
            <div className='foto'><img src="https://themewagon.github.io/restoran/img/testimonial-3.jpg" alt="" width={50} height={50} style={{borderRadius:"50%"}} /></div>
              <h4>Ruslan Hüseynli <br /> Chef</h4>
              
            </div>
        </div>

        <div className='Clients-comment'>
           <FaCommentDots  style={{fontSize:"40px",marginLeft:"30px",marginTop:"10px",color:"orange"}}/>
            <h1> Hərşey çox gözəldir..... </h1>

            <div className='clients'>
            <div className='foto'><img src="https://themewagon.github.io/restoran/img/testimonial-4.jpg" alt="" width={50} height={50} style={{borderRadius:"50%"}} /></div>
              <h4> Aysu Babayeva <br /> Design</h4>
            </div>
        </div>
       </div>
 </div>   



      <footer className='foot-bar'>
        <div className='div-bars'>
           <div className='div'>
                <h1>-Şirkət-</h1>
                <div><TiChevronRightOutline  className='line-icon'/> <h3><Link to='/About' className='link-btn'>Haqqında</Link></h3></div>
                <div><TiChevronRightOutline  className='line-icon'/><h3><Link to='/Contact' className='link-btn'>Əlaqə</Link></h3></div>
                <div><TiChevronRightOutline  className='line-icon'/><h3>Rezervasiya</h3></div>
                <div><TiChevronRightOutline className='line-icon'/><h3><Link to='/Menyu' className='link-btn'>Menyu</Link></h3></div>
                <div><TiChevronRightOutline className='line-icon'/><h3><Link to='/Hotel' className='link-btn'>Hotel</Link></h3></div>
           </div>
           <div className='div2'>
                  <h1>-Əlaqə-</h1>
                  <div><FaLocationDot  className='line-icon'/><h3>Cəlilabad şəhəri,qurtuluş prospekti</h3></div>
                  <div><MdLocalPhone className='line-icon' /><h3>+994 50 645 60 55</h3></div>
                  <div><IoMail className='line-icon'/><h3>info@basqalrestaurant.com</h3></div>
                  <div>
                    <a href="https://www.instagram.com/basqal_restoran_celilabad/" target="_blank" rel="noopener noreferrer" className="icon-sosial"><BsInstagram style={{fontSize:"25px"}}/></a>
                    <a href="https://wa.me/994513919160" target="_blank" rel="noopener noreferrer" className="icon-sosial"><FaWhatsapp style={{fontSize:"25px"}}/></a>
                    


                  </div>
           </div>
           <div className='div3'>
                <h1>-Açılış-</h1>
                <div><IoPartlySunnyOutline  className='line-icon' style={{fontSize:"20px"}}/><h3>Gündüz Növbəsi</h3></div>
                <div><h4>10AM - 10PM</h4></div>
                <div><FaMoon  className='line-icon' style={{fontSize:"20px"}}/><h3>Gecə Növbəsi</h3></div>
                <div><h4>10PM - 10AM</h4></div>         
           </div>
           <div className='div4'>
                  <h1>-Referans-</h1>
           </div>
           







           </div>
           <hr />
           <h3 className='coder'>© Your Basqal Restaurant, All Right Reserved. Designed By Elnur Mammadli</h3>
           <h3 className='coder2 '>Distributed By Elnur Mammadli</h3>
      </footer>
    </>
  )
}

export default Home
