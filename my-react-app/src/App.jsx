import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from "./Button/Button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"


function App() {
  return(
    <>
    {/* <Header/>
    <Footer/>
    <Food/> */}
    {/* <Card/>
    <Button/> */}
    <Student name="HitheshCH" age={30} isStudent={true}/>
    <Student/>
   


    <UserGreeting isLoggedIn={true} username="Hithesh"/>



    </>
  )
}



export default App