import { Route, Routes } from "react-router-dom";
import Dashboard from "../scence/dashboard/Dashboard";
import Team from "../scence/dashboard/Team";
import Contacts from "../scence/dashboard/Contacts";
import Invoice from "../scence/dashboard/Invoice";
import Profile from "../scence/dashboard/Profile";
import Bar from "../scence/dashboard/Bar";
import Calender from "../scence/dashboard/Calender";
import Faq from "../scence/dashboard/Faq";
import Geography from "../scence/dashboard/Geography";
import Line from "../scence/dashboard/Line";
import Pie from "../scence/dashboard/Pie";

const ComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard/team" element={<Team />} />
      <Route path="/dashboard/contacts" element={<Contacts />} />
      <Route path="/dashboard/invoice" element={<Invoice />} />
      <Route path="/dashboard/profile" element={<Profile />} />
      <Route path="/dashboard/bar" element={<Bar />} />
      <Route path="/dashboard/calender" element={<Calender />} />
      <Route path="/dashboard/faq" element={<Faq />} />
      <Route path="/dashboard/geography" element={<Geography />} />
      <Route path="/dashboard/line" element={<Line />} />
      <Route path="/dashboard/pie" element={<Pie />} />
    </Routes>
  );
};

export default ComponentRoutes;
