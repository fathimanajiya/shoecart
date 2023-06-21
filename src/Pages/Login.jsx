import React from 'react'

export default function Login() {
    return (
        <div>
            <div style={{ height: '500px', width: '400px', border: '2px solid', marginLeft: '35%', marginTop: '5%',background: 'rgb(2,0,36)',
background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(24,31,181,1) 0%, rgba(145,190,208,1) 0%, rgba(188,214,219,1) 0%, rgba(216,25,216,1) 0%, rgba(185,209,202,1) 0%, rgba(196,225,216,1) 100%)' }}>
                <div className='mt-4'>
                    <h4 className='text-center' style={{fontStyle:'italic'}}>Log in to shoecart</h4>
                </div>
                <div className='mt-5'>
                    <form>

                        <input style={{ marginLeft: '5%', height: '50px', width: '355px' }} type='text' placeholder='Email or username'></input><br></br><br></br><br></br>

                        <input style={{ marginLeft: '5%', height: '50px', width: '355px' }} type='password' placeholder='password'></input><br></br><br></br><br></br>
                        <button 
                         style={{ marginLeft: '5%', height: '50px', width: '355px' }} className='btn bg-success '>Login</button>
                    </form>
                </div>
                <div className='mt-3' style={{ marginLeft:'45%'}}>
                    <p style={{fontSize:'20px'}}>or</p>
                </div>
                <a href='/signup'>
                <button href='/signup'  style={{background:'blue',marginLeft: '24%', height: '50px',width:'203px'}}>Sign up</button>
            </a>
            </div>


        </div>

    )
}

{/*  <div style={{ marginLeft: '35%', marginTop: '120px' }}>
            <div style={{
                height: '370px', width: '520px', border: '2px solid', background: ' rgb(2,0,36)',
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(172,16,167,1) 0%, rgba(80,159,187,1) 0%, rgba(145,190,208,1) 0%, rgba(82,84,198,1) 0%, rgba(66,86,200,1) 50%, rgba(193,91,228,1) 89%)'
            }}  >
                <div style={{ height: '320px', background: 'white', width: '460px', border: '2px solid', marginLeft: '30px', marginTop: '25px' }} className='ml-auto'>
                    <div >
                        <h6 style={{ color: 'blue', marginLeft: '62%', marginTop: '20%' }}>USERLOGIN</h6>
                        <form>
                            <input style={{ marginLeft: '50%', height: '35px', width: '200px' }} type='text' placeholder='Email'></input><br></br><br></br>
                            <input style={{ marginLeft: '50%', height: '35px', width: '200px' }} type='password' placeholder='Enter your password'></input>
                            <button style={{
                                background: 'rgb(2,0,36)',
                                background: ' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(172,16,167,1) 0%, rgba(145,190,208,1) 0%, rgba(82,84,198,1) 0%, rgba(216,25,216,1) 0%)', height: '36px', width: '130px', marginLeft: '55%', marginTop: '4%'
                            }} class="btn ">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  */}