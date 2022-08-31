import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { createStyles, Paper } from '@mantine/core';

import Home from './components/Home';
import Step1 from './components/Step1';

const useStyles = createStyles((theme, _params, getRef) => ({
  container: {

  }
}));

function App() {
  const { classes } = useStyles();
  return (
    <Paper shadow="sm" radius="lg" p="xl" withBorder>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step1" element={<Step1 />} />
        </Routes>
      </BrowserRouter>
    </Paper>
  )
}

export default App
