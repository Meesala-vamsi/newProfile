import {Component} from 'react'
import { FaLongArrowAltLeft,FaDribbble,FaBehance,FaTwitter} from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { CiMenuKebab } from "react-icons/ci";

import './index.css'

class ProfileName extends Component {
    state={pictures:[],name:[]}

    componentDidMount(){
        this.getDetails()
    }

    getDetails=async()=>{
        const url='https://randomuser.me/api/?page=1&results=1&seed=abc'
        const options={
            method:"GET"
        }

        const response = await fetch(url,options)
        const data = await response.json()

        
        this.setState({pictures:data.results[0].picture,name:data.results[0].name})


    }


  render(){
    const {pictures,name} = this.state
    
    
    console.log(pictures.medium)
    
        return(
            <div className='bg-container'>
                <div className='card-container'>
                    <div className='nav-container'>
                        <div>
                            <FaLongArrowAltLeft className='arrow'/>
                        </div>
                        <div className='container1'>
                            <FcLikePlaceholder className='like-icon'/>
                            <CiMenuKebab className='menu-icon'/>
                        </div>
                    </div>
                    <img src={pictures.large} alt = '' className='user-image'/>
                    <div className='name-container'>
                        <h1 className='user-name'>{`${name.first} ${name.last}`}</h1>
                        <p className='role-desc'>Frontend Developer</p>
                        <p className='description'>Laura Woods is an User interface designer and <br/> front-end developer</p>
                    </div>
                    <button type='button' className='hire-button'>Hire Me</button>
                    <hr className='horizontal-line'/>
                    <div className='footer-section'>
                        <div className='container3'>
                            <div className='container2 pink'>
                                <FaDribbble className='footer-icon'/>
                            </div>
                            <p className='followers-number'>12.6k</p>
                            <p className='followers-text'>Followers</p>
                        </div>
                        <div className='container3'>
                            <div className='container2 violet'>
                                <FaBehance className='footer-icon'/>
                            </div>
                            <p className='followers-number'>6.6k</p>
                            <p className='followers-text'>Followers</p>
                        </div>
                        <div className='container3'>
                            <div className='container2 violet'>
                                <FaTwitter className='footer-icon'/>
                            </div>
                            <p className='followers-number'>10.3k</p>
                            <p className='followers-text'>Followers</p>
                        </div>
                    </div>
                </div>
            
            </div>
        )
  }
    
}

export default ProfileName;