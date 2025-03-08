import React from 'react'
import '../styles/TeamComponent.css'
import TeamImg from '../assets/home-team.jpg'
import { Link } from 'react-router-dom'

const TeamComponent:React.FC = () => {
  return (
    <div className='team-component-container'>
        <div className="right">
            <div className="header">OUR TEAM</div>
            <div className="para">Our team is a passionate group of experts, each with their own specialized skills, working together to deliver innovative solutions. From visionary leadership to hands-on technical expertise, we empower businesses to succeed in the digital world.</div>
            <Link to={"/team"}>LEARN MORE</Link>
        </div>
        <div className="left">
            <img src={TeamImg} alt="" />
        </div>
    </div>
  )
}

export default TeamComponent