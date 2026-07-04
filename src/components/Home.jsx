import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from './navbar/Navbar.'
import Footer from "./footer/Footer";
import Employee from "./Employees/Employee";
import EmployeePopup from "./EmployeePopup/EmployeePopup";
import DeletePopup from "./deletePopup/DeletePopup";

import { getEmployees } from "../store/features/employee/employee.thunk";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      <EmployeePopup />
      <DeletePopup />

      <Navbar />

      <div className="flex-1 py-12">
        <Employee />
      </div>

      <Footer />
    </div>
  );
};

export default Home;