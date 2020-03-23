import React from 'react'

function Header() {
    return (
        <header style={headerStyle} >
            <h1>Recipes</h1>
        </header>
    )
}

export default Header;

const headerStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}