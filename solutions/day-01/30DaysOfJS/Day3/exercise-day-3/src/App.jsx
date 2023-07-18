// import './App.css'

import Container from "./Components/Container"
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

        <Container myInputstyles = {inputStyles} myButtonstyle = {buttonStyles} />
      </div>
        
    </>
  )
}

export default App
