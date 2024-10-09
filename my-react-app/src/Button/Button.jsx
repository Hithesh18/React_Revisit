import Student from '../Student'
import styles from './Button.module.css'
import PropTypes from 'prop-types'
//prop-types give error in console if we pass wrong data types

//defaultprops:Default values for props in case they are not passed from the parent component ex name:"Guest"


function Button()
{
return <button className={styles.button}> Click Me</button>
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