import React from 'react'
import bgImg from '../assets/img1.png';

export default function Form() {
    return(
        <section>
            <div className="register">
                <div className="col-1">
                    <div className='whitebox'>
                    <div className='reg-box'>
                    <h2>Register</h2>

                    <form id='form' className='flex flex-col'>
                        <label>University Email Address</label>
                        <input type="email" placeholder='Enter your ousl email' />
                        <label>Your Name</label>
                        <input type="text" placeholder='Enter your name' />
                        <label>Password</label>
                        <input type="password" placeholder='Type your password' />
                        <label>Confirm Password</label>
                        <input type="password" placeholder='Re-type your password' />

                        <button className="btn">Register</button>
                    </form>
                     </div>
                   </div>

                    </div>
                    <div className='blue-bak'>
                    <div className="col-2">
                        <img src={bgImg} alt="" />
                    </div></div>
            </div>
        </section>
    )
}