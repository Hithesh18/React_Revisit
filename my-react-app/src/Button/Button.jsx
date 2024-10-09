import Student from '../Student'
import styles from './Button.module.css'
import PropTypes from 'prop-types'
//prop-types give error in console if we pass wrong data types

//defaultprops:Default values for props in case they are not passed from the parent component ex name:"Guest"


function Button()
{
let count=0;

const handleClick= (name) =>
   {
    if(count <3)
    {
        count++;
        console.log(` ${name} you clicked me ${count} time`);
    }
    else{
        console.log(`${name} stop`)
    }
   }

return <button className={styles.button} onClick={()=>handleClick("Hithesh")}> Click Me</button>
}

Student.PropTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}
Student.defaultProps=
{
    name:"Guest",
    age:0,
    isStudent:false

}
export default Button