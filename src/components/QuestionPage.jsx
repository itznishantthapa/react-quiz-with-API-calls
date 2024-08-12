import React from 'react'

function QuestionPage(props) {
    return(
        <>
    <div className='h-[80vh] w-2/4 shadow bg-gray-500 rounded-md text-center flex flex-col justify-evenly'>
     <p> {props.question} </p>
       <div className='flex flex-col justify-evenly items-center h-3/4'>
           <button className='bg-cyan-300 rounded w-auto py-5 px-20 ' onClick={props.toggler}>{props.option1}</button>
           <button className='bg-cyan-300 rounded w-auto py-5 px-20' onClick={props.toggler}>{props.option2}</button>
           <button className='bg-cyan-300 rounded w-auto py-5 px-20' onClick={props.toggler}>{props.option3}</button>
           <button className='bg-cyan-300 rounded w-auto py-5 px-20' onClick={props.toggler}>{props.option4}</button>
  
 
       </div>
    </div>
</>
  
    )

}

export default QuestionPage