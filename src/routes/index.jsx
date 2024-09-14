import { Route, Routes } from "react-router-dom";
import Dashboard from "../scence/dashboard/Dashboard";
import Team from "../scence/dashboard/Team";
import Contacts from "../scence/dashboard/Contacts";
import Invoice from "../scence/dashboard/Invoice";
import Profile from "../scence/dashboard/Profile";

const ComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard/team" element={<Team />} />
      <Route path="/dashboard/contacts" element={<Contacts />} />
      <Route path="/dashboard/invoice" element={<Invoice />} />
      <Route path="/dashboard/profile" element={<Profile />} />
    </Routes>
  );
};

export default ComponentRoutes;
