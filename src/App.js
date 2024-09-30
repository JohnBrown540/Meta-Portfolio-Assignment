import './App.css';

import ContactForm from './components/ContactForm';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectSection';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <>
        <Header />
        <LandingSection />
        <ProjectsSection />
        
        <ContactForm />
        
      </>
    </ChakraProvider>
  );
}

export default App;