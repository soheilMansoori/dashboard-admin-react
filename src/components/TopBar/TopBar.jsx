import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import './TopBar.css'
function TopBar() {
  return (
    <nav>
<div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SabzLearn ❤</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src="images/profile.jfif" className="topAvatar" />
        </div>
      </div>
    </div>
    </nav>
  )
}

export default TopBar
