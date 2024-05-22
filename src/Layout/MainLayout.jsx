import React from 'react'

const MainLayout = (props) => {

  return (
    <div 
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between',
            marginRight: "50px",
            marginLeft: "50px"

        }}
    >
        {props.children}
    </div>
  )
}

export default MainLayout

