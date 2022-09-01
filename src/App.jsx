import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { NotificationsProvider } from '@mantine/notifications';

import { createStyles, Paper } from '@mantine/core';

import Home from './components/Home';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Final from './components/Final';

const useStyles = createStyles((theme, _params, getRef) => ({
  container: {

  }
}));

function App() {
  const { classes } = useStyles();
  return (
    <NotificationsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </BrowserRouter>
    </NotificationsProvider>
  )
}

export default App
