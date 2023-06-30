import AboutMe from './AboutMe';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route index element={<AboutMe />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
