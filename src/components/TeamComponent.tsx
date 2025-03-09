import React from 'react'
import '../styles/TeamComponent.css'
import TeamImg from '../assets/home-team.jpg'
import { Link } from 'react-router-dom'

const TeamComponent: React.FC = () => {
  return (
    <div className='team-component-container'>
      <div className="right">
        <h1 className="header">OUR TEAM</h1>
        <div className="para">
          Our team is a passionate group of experts, each with their own specialized skills, working together to deliver innovative solutions. From visionary leadership to hands-on technical expertise, we empower businesses to succeed in the digital world. We pride ourselves on fostering a collaborative environment where creativity, problem-solving, and forward-thinking thrive. With a customer-centric approach.
          <br />
          <br />
          We focus on delivering tailored solutions that drive real business value and growth. Our diverse backgrounds and continuous pursuit of excellence ensure that we remain at the cutting edge of technology, always adapting to meet the evolving needs of our clients. Together, we are committed to turning challenges into opportunities, helping businesses navigate the ever-changing digital landscape.
        </div>
        <Link to={"/team"}>LEARN MORE</Link>
      </div>
      <div className="left">
        <img src={TeamImg} alt="" />
      </div>
    </div>
  )
}

export default TeamComponent