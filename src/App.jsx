import './App.css'
import React, { useState } from 'react'

function App() {

  const [yes, setYes] = useState(false)
  const [no, setNo] = useState(false)

  const handleNo = () => {
    setNo(true)
    setTimeout(() => {
      setNo(false)
    }, 2000)
  }

  return (
    <div className='grid grid-cols-1 gap-4 p-4 text-center h-lvh items-center justify-items-center bg-[url(/2.png)] bg-repeat'>
      <div className=' bg-red-200 w-fit rounded-xl p-3 py-10  text-white'>
      <h1 className='text-wrap  font-semi-bold text-4xl'> Alejandra Rodriguez, ¿Serías mi cita de San Valentín?</h1>
      <div className='flex justify-center gap-5 p-4 text-3xl'>
      <button className='rounded-xl bg-green-400 py-1 px-5' onClick={()=>{setYes(true)}}>Sí</button>
      <button className='rounded-xl bg-red-400 py-1 px-5' onClick={handleNo}>No</button>
      </div>
      </div>
      <div className={`absolute bg-[url(/2.png)] bg-repeat w-lvw h-lvh grid grid-cols-1 gap-4 p-4 text-center items-center justify-items-center ${yes ? 'absolute' : 'hidden'}`}>
        <div className='bg-red-200 w-fit rounded-xl p-3 justify-items-center py-10 grid grid-cols-1 text-white'>
        <h1 className='text-wrap  font-semi-bold text-4xl'> ¡Sabía que ibas a decir que sí, nos vemos el 14!</h1>
        <img src="/heart-gif.gif" className='w-1/2' alt="heart-gif" />
        </div>
      </div>
      <div className={`absolute bg-[url(/2.png)] bg-repeat w-lvw h-lvh grid grid-cols-1 gap-4 p-4 text-center items-center justify-items-center ${no ? 'absolute' : 'hidden'}`}>
        <div className='bg-red-200 w-fit rounded-xl p-3 justify-items-center py-10 grid grid-cols-1 text-white'>
        <h1 className='text-wrap  font-semi-bold text-4xl'> ¡Respuesta incorrecta, inténtalo de nuevo!</h1>
        <img src="/x.gif" className='w-1/3 pt-2' alt="x" />
        </div>
      </div>
    </div>
  )
}

export default App
