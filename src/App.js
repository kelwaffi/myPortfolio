import Header from '@components/Header';
import { Fragment, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';
import { themeContext } from './context/themeContext';
import { GlobalStyles } from './styles/globalStyle';

const Button = () => {
  const { toggleTheme, name } = useContext(themeContext)
  return (
    <Fragment>
      <h2>{name}</h2>
      <button style={{ cursor: 'pointer' }} onClick={(e) => toggleTheme()}>toggletheme</button>
    </Fragment>
  )
}
function App() {
  const { theme } = useContext(themeContext)
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <div className="App">
        <>
          <GlobalStyles />
          <Header />
          <Button />
        </>
      </div>

    </ThemeProvider>
  );
}

export default App;
