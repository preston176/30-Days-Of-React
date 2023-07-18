// import './App.css'

import ImageComponent from "./Components/ImageComponent"

function App() {

  const styles = {
    width: "100%",
    height: "100%"
  }

const buttonStyles = {padding: '15px', width: '50%', margin:'20px', outline: 'none', border: 'none', borderRadius: '6px', color: '#fff', backgroundColor: 'tomato', cursor: 'pointer'}

const inputStyles = {margin:'5px', padding: '2px', height: '20px', outline: 'none', border:'none'}

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif'}}>
        {/* <img src="../images/frontend_technologies.png" alt="frontend-tech" style={styles} /> */}
        <ImageComponent myStyle = {styles}/>

        <div className="Container" style={{display: 'flex', flexDirection: 'column', backgroundColor: 'cyan'}}>
          <div className="wrapper" style={{justifyContent: 'center', textAlign: 'center'}}>
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email address to receive news and updates</p>
            <div className="" style={{padding: '20px'}}>
            <input type="text" placeholder='First name' style={inputStyles}/>
            <input type="text" placeholder='Last name' style={inputStyles}/>
            <input type="email" placeholder='Email' style={inputStyles}/>
            </div>
            <button style={buttonStyles}>Subscribe</button>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default App
