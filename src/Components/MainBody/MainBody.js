import React from 'react'
import { Image } from 'semantic-ui-react'
import style from './MainBody.module.css'
import c1 from '../Images/course_1.jpg.webp'
import c2 from '../Images/course_2.jpg.webp'
import c3 from '../Images/course_3.jpg.webp'
import author from '../Images/author.jpg.webp'

const MainBody = () => {
  return (
    <div>
        <div className={style.heading}>
             <h1>Popular Courses</h1>
        </div>
        <div className={style.carddetails}>
            <div className={style.maincontent}>
                <div className={style.imagetag}>
                    <img src={c1} alt="course_1"/>
                </div>
                <div className={style.centercontent}>
                    <h2>A complete guide to design</h2>
                    <p>Adobe Guide, Layes, Smart Objects etc...</p>
                </div>
                <div className={style.bottomcontent}>
                    <Image src={author} alt="image" className={style.profile}/>
                    <h1>Michael Smith, <span>Author</span></h1>
                    <div className={style.price}>
                        <h2>$29</h2>
                    </div>
                </div>
            </div>

            <div className={style.maincontent}>
                <div className={style.imagetag}>
                    <img src={c2} alt="course_1"/>
                </div>
                <div className={style.centercontent}>
                    <h2>Beginners guide to HTML</h2>
                    <p>Adobe Guide, Layes, Smart Objects etc...</p>
                </div>
                <div className={style.bottomcontent}>
                    <Image src={author} alt="image" className={style.profile}/>
                    <h1>Michael Smith, <span>Author</span></h1>
                    <div className={style.price}>
                        <h2>$25</h2>
                    </div>
                </div>
            </div>

            <div className={style.maincontent}>
                <div className={style.imagetag}>
                    <img src={c3} alt="course_1"/>
                </div>
                <div className={style.centercontent}>
                    <h2>Advanced Photoshop</h2>
                    <p>Adobe Guide, Layes, Smart Objects etc...</p>
                </div>
                <div className={style.bottomcontent}>
                    <Image src={author} alt="image" className={style.profile}/>
                    <h1>Michael Smith, <span>Author</span></h1>
                    <div className={style.price}>
                        <h2>$32</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  )
}
export default MainBody
