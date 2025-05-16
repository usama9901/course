import React from 'react'
import { Button, ButtonContent, Icon} from 'semantic-ui-react'
import style from './Header.module.css'
import img from '../Images/logo.png.webp'
const Header = () => {
  return (
    <div className={style.Headercontent}>
        <div className={style.Header}> 
            <div className={style.logo}>
                <img src={img} alt="logo"/>
                <h2>Courses</h2>
            </div>
            <div className={style.list}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>News</li>
                    <li>Element</li>
                </ul>
            </div>
            <div className={style.button}>
                <Button className={style.login}>Login</Button>
            </div>   
        </div>
        <div className={style.space}>
        </div>
        <h1 style={{color:"whitesmoke",fontSize:"80px"}}>Gain Your <span>Knowledge</span> Today</h1>
        <div className={style.centerHeader}>
            <div className={style.previous}>
                    <Button animated>
                        <ButtonContent visible>PREV</ButtonContent>
                        <ButtonContent hidden>
                            <Icon name='arrow left' />
                        </ButtonContent>
                    </Button>
                </div>
            
            <div className={style.carddata}>
                <div className={style.card}>
                    <Icon name="globe" className={style.custom_icon} />
                
                    <h2>Online Courses</h2>
                    <p>View More</p>
              
                </div>
                <div className={style.card}>
                    <Icon name="book" className={style.custom_icon} />
               
                    <h2>Our Library</h2>
                    <p>View More</p>
                
                </div>
                <div className={style.card}>
                    <Icon name="user" className={style.custom_icon} />
               
                    <h2>Our Teacher</h2>
                    <p>View More</p>
                </div>
            </div>
            <div className={style.next}>
                <Button animated>
                    <ButtonContent visible>NEXT</ButtonContent>
                    <ButtonContent hidden>
                        <Icon name='arrow right' />
                    </ButtonContent>
                </Button>
            </div>
        </div>
     </div>
  )
}

export default Header
