import React from 'react'

const MainLayout = (props) => {

  return (
    <div 
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between',
            marginRight: "10px",
            marginLeft: "10px"

        }}
    >
        {props.children}
    </div>
  )
}

export default MainLayout

