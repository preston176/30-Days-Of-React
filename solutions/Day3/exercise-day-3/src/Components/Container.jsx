import React from 'react'

function Container({myInputstyles, myButtonstyle}) {
  return (
    <div className="Container" style={{display: 'flex', flexDirection: 'column', backgroundColor: 'cyan'}}>
          <div className="wrapper" style={{justifyContent: 'center', textAlign: 'center'}}>
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email address to receive news and updates</p>
            <div className="" style={{padding: '20px'}}>
            <input type="text" placeholder='First name' style={myInputstyles}/>
            <input type="text" placeholder='Last name' style={myInputstyles}/>
            <input type="email" placeholder='Email' style={myInputstyles}/>
            </div>
            <button style={myButtonstyle}>Subscribe</button>
          </div>
        </div>
  )
}

export default Container