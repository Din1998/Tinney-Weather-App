import React,{useState} from "react";


export default function WatchComponent() {

  let time = new Date().toLocaleTimeString()
  
  const [currentTime,setTime] = useState()

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setTime(time)
  }

  setInterval(UpdateTime,1000)

  return(
    <div className='watch__comp'>
        <h1 className="time__text">{currentTime}</h1>
    </div>
  )
}