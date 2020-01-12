import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  },
  btn: {
    border: 'none',
    margin: 20,
    width: 250,
    height: 65,
    borderRadius: 6,
    textTransform: 'uppercase',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    cursor: 'pointer',
    color: '#fff',
    backgroundSize: '200%',
    transition: '0.4s',
    '&:hover': {
      backgroundPosition: 'right'
    }
  },
   btn1: {
     backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00A8FF)'
   },
   btn2: {
    backgroundImage: 'linear-gradient(45deg, #e74c3c, #8e44ad, #f1c40f)'
   },
   btn3: {
    backgroundImage: 'linear-gradient(to left, #c0392b, #27ae60, #f39c12)'
   },
   btn4: {
    backgroundImage: 'linear-gradient(to left, #34495e, #9b59b6, #3498db)'
   }
})

export default function Buttons() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
        <Button className={ `${classes.btn} ${classes.btn1}` }>Hover Button</Button>
        <Button className={ `${classes.btn} ${classes.btn2}` }>Hover Button</Button>
        <Button className={ `${classes.btn} ${classes.btn3}` }>Hover Button</Button>
        <Button className={ `${classes.btn} ${classes.btn4}` }>Hover Button</Button>
      </div>
    </>
  )
}
