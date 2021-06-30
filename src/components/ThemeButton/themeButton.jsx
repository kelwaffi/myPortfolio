import React from 'react'

function ThemeButton() {

  const { toggleTheme, name } = useContext(themeContext)
  return (
    <Fragment>
      <h2>{name}</h2>
      <button style={{ cursor: 'pointer' }} onClick={() => toggleTheme()}>toggletheme</button>
    </Fragment>
  )

}

export default themeButton
