import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {

  const notification = useSelector(store => store.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  let code = ''
  if(notification){
    code = (
      <div style={style}>
        {notification.msg}
      </div>
    )
  }

  return code
}

export default Notification
