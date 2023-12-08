import { useState } from 'react'


function App() {
  const [color,setcolor]=useState("#990836");

  return (
    <div className='w-screen h-screen' style={{backgroundColor: color}}>
      <div className='fixed flex-wrap flex justify-center inset-x-0 bottom-12'>
        <div className='flex flex-wrap px-3 py-2 rounded-xl gap-7 shawdow-lg' 
        style={{backgroundColor:'white'}}>
          <button onClick={()=>setcolor("red")} className='outline-none px-4 text-white shadow-lg'
           style={{backgroundColor: 'red'}}>Red</button>
           <button onClick={()=>setcolor("green")} className='outline-none px-4 text-white shadow-lg'
           style={{backgroundColor: 'green'}}>Green</button>
           <button onClick={()=>setcolor("yellow")} className='outline-none px-4 text-black shadow-lg'
           style={{backgroundColor: 'yellow'}}>yellow</button>
           <button onClick={()=>setcolor("orange")}  className='outline-none px-4 text-white shadow-lg'
           style={{backgroundColor: 'orange'}}>orange</button>
           <button onClick={()=>setcolor("violet")} className='outline-none px-4 text-white shadow-lg'
           style={{backgroundColor: 'violet'}}>violet</button>
           <button onClick={()=>setcolor("blue")} className='outline-none px-4 text-white shadow-lg'
           style={{backgroundColor: 'blue'}}>Blue</button>
           <button onClick={()=>setcolor("white")} className='outline-none px-4 text-black shadow-lg'
           style={{backgroundColor: 'white'}}>white</button>
           <button onClick={()=>setcolor("black")}  className='outline-none px-4 text-white shadow-lg'
           style={{backgroundColor: 'black'}}>Black</button>
           </div></div>
    </div>
  
  )
}

export default App
