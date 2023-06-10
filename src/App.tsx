import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import TopBar from './scenes/Global/TopBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/Dashboard/dashboard';
import SideBar from './scenes/Global/SideBar';
import Team from './scenes/Team/Team';
import Contacts from './scenes/Contacts/Contacts';
import Invoices from './scenes/Invoices/invoices';
import Form from './scenes/Form/form';
import CalendarView from './scenes/Calender/calender';
import FAQ from './scenes/FAQ/faq';
import Bar from "./scenes/Bar/bar";
import Pie from "./scenes/Pie/pie";
import Line from "./scenes/Line/line";
import Geography from "./scenes/Geography/geography";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/calender" element={<CalendarView />}></Route>
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/line" element={<Line />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/geography" element={<Geography />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
