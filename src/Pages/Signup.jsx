import React from 'react'

export default function Signup() {
    return (
        <div>
            <div style={{ width: '450px', height: '520px', border: '3px solid', marginLeft: '33%', marginTop: '3%' }}>
                <div className='mt-5'>
                    <form>
                    <input style={{ marginLeft: '5%', height: '50px', width: '170px' }} type='text' placeholder='Firstname'></input>
                    <input style={{ marginLeft: '5%', height: '50px', width: '170px' }} type='text' placeholder='Surname'></input><br></br><br></br>
                    <input style={{ marginLeft: '5%', height: '50px', width: '355px' }} type='text' placeholder='Email'></input><br></br><br></br>
                    <input style={{ marginLeft: '5%', height: '50px', width: '355px' }}  type='text' placeholder='Mobile Number'></input><br></br><br></br>
                    <input style={{ marginLeft: '5%', height: '50px', width: '355px' }}  type='password' placeholder='Password'></input><br></br><br></br>
                    <input style={{ marginLeft: '5%', height: '50px', width: '355px' }}  type='password' placeholder='Confirm password'></input><br></br><br></br>
                    <button style={{ marginLeft: '5%', height: '50px', width: '355px' }} className='btn bg-success '>Sign Up</button>
                    </form>
                </div>

            </div>

        </div>
    )
}
