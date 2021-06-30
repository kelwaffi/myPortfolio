import Header from '@components/Header';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';
import { themeContext } from './context/themeContext';
import { GlobalStyles } from './styles/globalStyle';


function App() {
  const { theme } = useContext(themeContext)
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">

        <GlobalStyles />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
