import React, { FC } from 'react'; 

interface Props {
  onReload: Function;
}

const ChangeAlertUI:FC<Props> = (props) => {

  return (
    <div className='ChangeAlert'>
      <h2>Changes detected</h2>
      <p>Do you want sincronize?</p>
      
      <div className='CreateTodoForm--actions'>
        <button 
          className='CreateTodoForm--actions--button button'
          type='button'
          onClick={() => props.onReload()}
        >Reload</button>
      </div>
    </div>
  )
}

export default ChangeAlertUI;
