import React from 'react'
import './Tasks.css'

const Tasks = () => {
  return (
    <div className='body'>
        <div className='paper'>
            <div className='lines'>
                <div className='text' contentEditable spellCheck="false">
                    We can edit it
                </div>
            </div>
        </div>
        <div className='holes-top'></div>
        <div className='holes-middle'></div>
        <div className='holes-bottom'></div>
    </div>
  )
}

export default Tasks