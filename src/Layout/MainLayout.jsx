import React from 'react'

const MainLayout = (props) => {
  return (
    <div 
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between'
        }}
    >
        {props.children}
    </div>
  )
}

export default MainLayout

