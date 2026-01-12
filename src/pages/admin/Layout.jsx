// React aur useEffect import kar rahe hain
import React, { useEffect } from "react";

// Admin panel ka top navbar
import AdminNavbar from "../../components/admin/AdminNavbar";

// Admin panel ka left sidebar
import AdminSidebar from "../../components/admin/AdminSidebar";

// React Router ka Outlet
// iska kaam hai child routes ka component yahin render karna
import { Outlet } from "react-router-dom";

// Global context se data lene ke liye custom hook
import { useAppContext } from "../../context/AppContext";

// Loading spinner component
import Loading from "../../components/Loading";

const Layout = () => {

  // Context se do cheezein le rahe hain
  // isAdmin  -> user admin hai ya nahi (true/false)
  // fetchIsAdmin -> backend API call karega admin check ke liye
  const { isAdmin, fetchIsAdmin } = useAppContext();

  // useEffect tab chalega jab component pehli baar load hoga
  useEffect(() => {
    // Backend ko request bhej raha hai:
    // "bhai ye user admin hai ya nahi?"
    fetchIsAdmin();
  }, []); // empty dependency => sirf first render pe chalega

  // Agar user admin hai tabhi admin layout dikhao
  return isAdmin ? (
    <>
      {/* Top navbar (fixed) */}
      <AdminNavbar />

      {/* Flex container taaki sidebar aur main content side-by-side aaye */}
      <div className="flex">

        {/* Left side admin sidebar */}
        <AdminSidebar />

        {/* 
          Main content area
          flex-1  -> sidebar ke baad bachi hui poori width le lega
          px / py -> padding
          h-[calc(100vh-64px)] -> full screen height minus navbar height
          overflow-y-auto -> sirf yeh section scroll hoga
        */}
        <div className="flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto">
          
          {/* 
            Outlet yahan pe child routes render honge
            Example:
            /admin/dashboard
            /admin/movies
            /admin/shows
          */}
          <Outlet />
        </div>
      </div>
    </>
  ) : (
    // Jab tak admin check complete nahi hota
    // ya user admin nahi hai
    // tab loading spinner dikhao
    <Loading />
  );
};

export default Layout;
