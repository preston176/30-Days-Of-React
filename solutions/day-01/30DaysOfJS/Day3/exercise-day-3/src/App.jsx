// import './App.css'
import Container from "./Components/Container"
import ImageComponent from "./Components/ImageComponent"
import { skillsData } from "./Components/Data"


function App() {

  const styles = {
    minWidth: "100%",
    height: "min-content",
    maxWidth: "100%",
  }

const buttonStyles = {padding: '15px', width: '50%', margin:'20px', outline: 'none', border: 'none', borderRadius: '6px', color: '#fff', backgroundColor: 'tomato', cursor: 'pointer'}

const inputStyles = {margin:'5px', padding: '2px', height: '20px', outline: 'none', border:'none'}

console.log("Voila!");

// const skillsData = ['HTML', 'CSS', "JAVASCRIPT"]

const displaySkills = skillsData.map((skill) => {

  return (<div key={crypto.randomUUID()} className="styles-card" style={{color: '#000', width: 'fit-content', padding: '0.25rem', backgroundColor: 'cyan', borderRadius: '0.2rem'}}>{skill}</div>);
});
  return (
    <>
      <div style={{fontFamily: 'sans-serif', minHeight : '10vh' , height: '20vh'}}>
        {/* <img src="../images/frontend_technologies.png" alt="frontend-tech" style={styles} /> */}
        <ImageComponent myStyle = {styles}/>
        <div className="user-card">
          <img src="./images/myavatar.jpg" alt="" style={{width: "10%", maxWidth: "20%"}} />
          <div className="" style={{}}>
          <h2 >Preston Mayieka <span><img src="./images/checkmark.png" alt="" style={{width: "20px", textAlign: "center", alignContent: "center", alignSelf: "center"}}/></span></h2>
          </div>
          <h2>Skills</h2>
          <div className="skills-container">
          <div className="skills-wrapper" style={{display: 'flex', gap: "1rem", padding : '0.5rem', flexWrap: 'wrap'}}>

        {displaySkills}
          
          </div>
          </div>
        </div>
        <Container myInputstyles = {inputStyles} myButtonstyle = {buttonStyles} />
      </div>
        
    </>
  )
}

export default App
