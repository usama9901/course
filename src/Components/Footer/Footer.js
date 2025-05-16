import React from "react";
import style from "./Footer.module.css";
import { Icon, Input, Button, Image, Popup } from "semantic-ui-react";
import Logo from '../Images/logo.png.webp'
const Footer = () => {
  return (
    <div className={style.footer_container}>
      <div className={style.newsletter_section}>
        <h2>Subscribe to New Journey</h2>
        <div className={style.newsletter_input}>
          <Input type="email" placeholder="Email Address" />
          <Button>Subscribe</Button>
        </div>
      </div>


      <div className={style.footer_content}>
        <div className={style.footer_logo}>
          <h2>
            <Image style={{display:"inline",padding:'10px'}}src={Logo} alt="Logo"/>
            COURSES</h2>
          <p>
          Our online learning platform is the best way to master any course. 
          With expert instructors we make learning easy and effective. 
          Experience the convenience of online education with tools that keep you motivated and on track. 
          Learn with us and unlock your full potential!
          </p>
        </div>

        <div className={style.footer_menu}>
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={style.footer_useful_links}>
          <h3>Useful Links</h3>
          <ul>
            <li>Testimonials</li>
            <li>FAQ</li>
            <li>Community</li>
            <li>Campus Pictures</li>
            <li>Tuitions</li>
          </ul>
        </div>


        <div className={style.footer_contact}>
          <h3>Contact</h3>
          <ul>
            <li><Icon className={style.Icons} name='map marker alternate'/>Palestine</li>
            <li><Icon className={style.Icons} name='phone'/>91234567890</li>
            <li><Icon className={style.Icons} name='mail outline'/> hello@company.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={style.footer_bottom}>
        <p> Copyright ©2025 All rights reserved to me </p>
        <div className={style.social_icons}>
          <a href="#!"><Popup content="Twitter" trigger={<Icon className={style.Icons} name='twitter'/>}/></a>
          <a href="#!"><Popup content="Instagram" trigger={<Icon className={style.Icons} name='instagram'/>}/></a>
          <a href="#!"><Popup content="Facebook" trigger={<Icon className={style.Icons} name='facebook'/>}/></a>
          <a href="#!"><Popup content="LinkedIn" trigger={<Icon className={style.Icons} name='linkedin'/>}/></a>
          <a href="#!"><Popup content="Pinterest" trigger={<Icon className={style.Icons} name='pinterest'/>}/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
