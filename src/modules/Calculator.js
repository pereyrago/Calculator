import React, {useState} from 'react'
import './Calculator.css'

export default function Calculator() {

  const [state, setState]=useState('Welcome')
  const [bool, setBool]=useState(false)
  const [dot, setDot]=useState(true)

  function entryNumber (num) {
    if (state.length>=13) setState(state)
    else if (state=== ('Infinity') ||state=== ('NaN') ||state=== ('Welcome')) {
      setState('')
    }else{

    switch(num){
      case '+': if (bool){
        setState(state+num)
        setBool(false)
        setDot(true)
        break
      }break
      case '-': if (bool){
        setState(state+num)
        setBool(false)
        setDot(true)
        break
      }break
      case '/': if (bool){
        setState(state+num)
        setBool(false)
        setDot(true)
        break
      }break
      case '*': if (bool){
        setState(state+num)
        setBool(false)
        setDot(true)
        break
      }break
      case '.': if (bool){
        if (dot===false){
          setState(state)
          break
        }
        else {setState(state+num)
          setBool(false)
          setDot(false)
        break
        }
      }break
      default: {
        state!=='0' ? setState(state+num) : setState(num)
        setBool(true)
      }
    }
  }
  }
   
  function restart () {
    setState('')
  }
  
  function erase () {
    if (state=== ('Infinity') ||state=== ('NaN') ||state=== ('Welcome')) {
      setState('')
    }else{
    setState(state.slice([0],state.length-1))
    }
  }
  
  function calculate() {
    if (state=== ('Welcome')) setState("")
    else{
      let last=(state[state.length-1])
      
      if (last==='-' ||last==='+' ||last==='*' ||last==='/') setState('NaN')
      else {
      let preResult=String(eval(state))
      
      let result= preResult.substring(0,13)
      setState(String(result))
      }
    }
  }
  
  return (
    <div className='container'>
      
      <div className={"fondo"}>
        <div>
          <div className='display' >{state}</div>
        </div>
        
        <div className='contDisplay'>
          <button className={'boton botonC'} onClick={()=>restart()}>Restart</button>
          <button className={'boton boton2'} onClick={()=>erase()}>Del</button>
          <button className={'boton boton2'} onClick={()=>entryNumber('/')}>/</button>
        </div>
        <div>
          <button className={'boton'} onClick={()=>entryNumber('7')}>7</button>
          <button className={'boton'} onClick={()=>entryNumber('8')}>8</button>
          <button className={'boton'} onClick={()=>entryNumber('9')}>9</button>
          <button className={'boton boton2'} onClick={()=>entryNumber('*')}>x</button>
        </div>
        <div>
          <button className={'boton'} onClick={()=>entryNumber('4')}>4</button>
          <button className={'boton'} onClick={()=>entryNumber('5')}>5</button>
          <button className={'boton'} onClick={()=>entryNumber('6')}>6</button>
          <button className={'boton boton2'} onClick={()=>entryNumber('+')}>+</button>
        </div>
        <div>
          <button className={'boton'} onClick={()=>entryNumber('1')}>1</button>
          <button className={'boton'} onClick={()=>entryNumber('2')}>2</button>
          <button className={'boton'} onClick={()=>entryNumber('3')}>3</button>
          <button className={'boton boton2'} onClick={()=>entryNumber('-')}>-</button>
        </div>
        <div>
          <button className={'boton'} onClick={()=>entryNumber('0')}>0</button>
          <button className={'boton boton2'} onClick={()=>entryNumber('.')}>.</button>
          <button className={'boton boton2 botonI'} onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}
