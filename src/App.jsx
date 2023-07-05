import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import { Cookies } from 'react-cookie';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
});

function App() {
  const cookies = new Cookies;
  let theme = cookies.get('theme');
  return (
    <ThemeProvider theme={(theme === undefined || theme === 'light')?lightTheme:darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<AboutMe />} />
          <Route path='/about/' element={<AboutMe />} />
          <Route path='/skills/' element={<Skills />} />
          <Route path='/projects/' element={<Projects />} />
          <Route path='/contact/' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
