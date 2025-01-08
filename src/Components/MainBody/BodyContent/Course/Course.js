import React from 'react'
import style from './Course.module.css'
import { Button, Input } from 'semantic-ui-react'
const Course = () => {
  return (
    <div className={style.coursecontent}>
      
      <div className={style.leftside}>
            <h1>Register now and get a discount <span>50%</span> discount until 1 January</h1>
            <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae 
                tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. 
                Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.
                </p>
            <Button>Register Now</Button>
      </div>
      <div className={style.rightside}>
      <h1 style={{fontSize:"45px"}}>Search for your course</h1>
            <Input className={style.input} placeholder="Course Name"/>
            <Input className={style.input} placeholder="Category"/>
            <Input className={style.input} placeholder="Degree"/>
            <Button className={style.button}>Search Course</Button>
 
      </div>
    </div>
  )
}

export default Course
