import React from 'react'
import '../styles/Team.css'
import TeamImg from '../assets/team.jpg'

import memberPhoto1 from "../assets/images/member/1.jpg";
import memberPhoto2 from "../assets/images/member/2.jpg";
import memberPhoto3 from "../assets/images/member/3.jpg";
import memberPhoto4 from "../assets/images/member/4.jpg";
import memberPhoto5 from "../assets/images/member/5.jpg";
import memberPhoto6 from "../assets/images/member/6.jpg";
import { Link } from 'react-router-dom';

const teamMembers = [
    {
        name: "Tilak Raj Bhandari",
        position: "Advisor",
        image: memberPhoto1,
        socials: {
            facebook: "https://www.facebook.com/tilakraj.bhandari.5",
            linkedin: "https://www.linkedin.com/in/tilak-raj-bhhandari-b5049334b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            twitter: "#",
            github: "#",
        }
    },
    {
        name: "Moti Kala Bhandari",
        position: "Founder",
        image: memberPhoto2,
        socials: {
            facebook: "https://www.facebook.com/moti.basnet.92",
            linkedin: "#",
            twitter: "#",
            github: "#",
        }
    },
    {
        name: "Yubraj Basyal",
        position: "Chief Digital Officer",
        image: memberPhoto3,
        socials: {
            facebook: "",
            linkedin: "",
            twitter: "#",
            github: "#",
        }
    },
    {
        name: "Nirajan Basnet",
        position: "Director of Engineering",
        image: memberPhoto4,
        socials: {
            facebook: "https://www.facebook.com/profile.php?id=61563473620678",
            linkedin: "https://www.linkedin.com/in/nirajan-basnet-b3526b321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            twitter: "#",
            github: "#",
        }
    },
    {
        name: "Rajan Naeupane",
        position: "Chief Innovation Officer",
        image: memberPhoto5,
        socials: {
            facebook: "https://www.facebook.com/profile.php?id=61553572617056",
            linkedin: "https://www.linkedin.com/in/rajan-neupane-598191312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            twitter: "#",
            github: "",
        }
    },
    {
        name: "Rajesh Thapa",
        position: "Lead Developer",
        image: memberPhoto6,
        socials: {
            facebook: "#",
            linkedin: "https://www.linkedin.com/in/devrajeshthapa",
            twitter: "#",
            github: "https://github.com/devRajeshThapa",
        }
    },
];

const Team: React.FC = () => {
    return (
        <div className='team-container'>
            <div className="first-row">
                <div className="first-col">
                    <div className="header">Meet Our Team</div>
                    <div className="para">
                        <p className='quote'>The talented individuals behind Pearl Softech's success</p>
                        <br />
                        Our diverse team of experts is passionate about delivering innovative solutions that drive your business forward. With deep industry knowledge and a commitment to excellence, we leverage cutting-edge technologies to create customized, scalable, and future-ready solutions tailored to your unique needs.
                        <br />
                        <br />
                        We thrive on challenges and continuously push the boundaries of innovation to help you stay ahead in a rapidly evolving digital landscape.
                    </div>
                </div>
                <div className="second-col">
                    <img src={TeamImg} alt="" />
                </div>
            </div>
            <div className="second-row">
                {
                    teamMembers.map((member, index) => (
                        <div key={index} className="member">
                            <div className="picture">
                                <img src={member.image} alt={"Profile picture of " + member.name + ", " + member.position + " at Pearl Softech Pvt. Ltd."} />
                            </div>
                            <div className="name">{member.name}</div>
                            <div className="position">{member.position}</div>
                            <div className="socials">
                                {member.socials.facebook !== "#" && (
                                    <a href={member.socials.linkedin}><i className="fa-brands fa-facebook"></i></a>
                                )}
                                {member.socials.linkedin !== "#" && (
                                    <a href={member.socials.linkedin}><i className="fa-brands fa-linkedin"></i></a>
                                )}
                                {member.socials.twitter !== "#" && (
                                    <a href={member.socials.twitter}><i className="fa-brands fa-x-twitter"></i></a>
                                )}
                                {member.socials.github !== "#" && (
                                    <a href={member.socials.github}><i className="fa-brands fa-github"></i></a>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="third-row">
                <div className="header">Want to Join Our Team?</div>
                <div className="para">We're always looking for talented individuals to join our growing team.</div>
                <Link to={"/career"}>APPLY NOW</Link>
            </div>
        </div>
    )
}

export default Team