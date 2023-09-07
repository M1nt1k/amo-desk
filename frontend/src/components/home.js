import "../styles/App.css";
import logo from "../assets/images/logo.svg";
import ButtonSidebar from "button";
import DashSettings from "dashSettings";
import TopBar from "topbar";
import DashPanel from "dashPanel";

export default function Home(mode) {
    return (
        <div className="App">
          <sidebar className="sidebar">
            <a className="logo" href="/">
              <img src={logo} className="app-logo" alt="logo" />
            </a>
    
            <div className="sidebar-btn-block">
              <ButtonSidebar text="monitoring" />
              <ButtonSidebar text="manage_history" />
              <ButtonSidebar text="query_stats" />
              <ButtonSidebar text="donut_small" />
              <ButtonSidebar text="token" />
              <ButtonSidebar text="videocam" />
            </div>
    
            <ButtonSidebar className="logout-btn" text="logout" />
          </sidebar>
          <div className="main-content">
            <TopBar />
    
            <dashboard className="dashboard">
              <DashSettings />
    
              <DashPanel />
            </dashboard>
          </div>
        </div>
      );
}