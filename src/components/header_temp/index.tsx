/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import classnames from "classnames";
import { useEffect, useState } from "react";

export const Header: React.FC = () => {
  const languages = [
    "English",
    "中文(简体)",
    "中文(繁體)",
    "한국어",
    "日本語",
    "ไทย",
    "Tiếng Việt",
    "Indonesia",
    "Português",
    "España",
  ];
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const localTimeString = currentDate.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const localDateString = currentDate.toLocaleDateString([], {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      const timezoneOffset = currentDate.getTimezoneOffset() / -60;
      const timezoneString =
        timezoneOffset >= 0
          ? `GMT +${timezoneOffset}`
          : `GMT ${timezoneOffset}`;
      const localTime = `${localTimeString} ${localDateString} ${timezoneString}`;
      setLocalTime(localTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className={style.header}>
      <div className={style.headerTop}>
        <div className={style.headerTopLogo}>
          <img src="/logo.png" alt="logo"></img>
        </div>
        <div className={`${style.headerTopMenu} ${style.menu}`}>
          <div className={style.menuTop}>
            <div className={style.action}>
              <NavLink to="/help" className={style.actionLink}>
                <img
                  src="/Question_mark_white_icon.png"
                  alt="question"
                  className={style.actionIconQuestion}
                ></img>
                Help
              </NavLink>
            </div>

            <div className={style.action}>
              <NavLink to="/chat" className={style.actionLink}>
                <img
                  src="/chat.png"
                  alt="chat"
                  className={style.actionIconConversation}
                ></img>
                Live Chat
              </NavLink>
            </div>

            <select className={style.languageSelect}>
              {languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>

            <button className={style.logoutButton}>Logout</button>
          </div>
          <div className={style.menuBottom}>
            <nav className={style.nav}>
              <ul className={style.navList}>
                <li className={style.navItem}>
                  <NavLink
                    to="/sportsbook"
                    className={({ isActive }) =>
                      classnames(style.navLink, {
                        [style.navLinkActive]: isActive,
                      })
                    }
                  >
                    Sportsbook
                  </NavLink>
                </li>
                <li className={style.navItem}>
                  <NavLink
                    to="/e-sports"
                    className={({ isActive }) =>
                      classnames(style.navLink, {
                        [style.navLinkActive]: isActive,
                      })
                    }
                  >
                    <img
                      src="/hot.png"
                      alt="hot"
                      className={style.navLinkIcon}
                    />
                    E-Sports
                  </NavLink>
                </li>
                <li className={style.navItem}>
                  <NavLink
                    to="/virtual-sports"
                    className={({ isActive }) =>
                      classnames(style.navLink, {
                        [style.navLinkActive]: isActive,
                      })
                    }
                  >
                    <img
                      src="/hot.png"
                      alt="hot"
                      className={style.navLinkIcon}
                    />
                    Virtual Sports
                  </NavLink>
                </li>
                <li className={style.navItem}>
                  <NavLink
                    to="/4d"
                    className={({ isActive }) =>
                      classnames(style.navLink, {
                        [style.navLinkActive]: isActive,
                      })
                    }
                  >
                    4D
                  </NavLink>
                </li>
                <li className={style.navItem}>
                  <NavLink
                    to="/casino"
                    className={({ isActive }) =>
                      classnames(style.navLink, {
                        [style.navLinkActive]: isActive,
                      })
                    }
                  >
                    <img
                      src="/hot.png"
                      alt="hot"
                      className={style.navLinkIcon}
                    />
                    Casino
                  </NavLink>
                </li>
                <li className={style.navItem}>
                  <NavLink
                    to="/games"
                    className={({ isActive }) =>
                      classnames(style.navLink, {
                        [style.navLinkActive]: isActive,
                      })
                    }
                  >
                    <img
                      src="/hot.png"
                      alt="hot"
                      className={style.navLinkIcon}
                    />
                    Games
                  </NavLink>
                </li>
                <li className={style.navItem}>
                  <NavLink
                    to="/keno"
                    className={({ isActive }) =>
                      classnames(style.navLink, {
                        [style.navLinkActive]: isActive,
                      })
                    }
                  >
                    <img
                      src="/hot.png"
                      alt="hot"
                      className={style.navLinkIcon}
                    />
                    Keno
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={style.headerBottom}>
        <div className={style.time}>{localTime}</div>
        <div className={style.headerBottomContainer}>
          <div className={style.news}>
            <div className={style.announcements}>
              <a href="#" className={style.announcementsLink}>
                <img
                  src="/tv.png"
                  alt="tv"
                  className={style.announcementsIcon}
                />
                Announcements
              </a>
              <div className={style.announcementsCount}>270</div>
            </div>
            <div className={style.msg}>
              |
              <a href="#" className={style.msgLink}>
                Personal Msg
              </a>
            </div>
          </div>
          <div className={style.search}>
            <div className={style.searchTeam}>
              <input
                type="text"
                className={style.searchInput}
                placeholder="Search Team"
              />
              <div className={style.searchButton}>
                <img
                  src="/search.png"
                  alt="search"
                  className={style.searchIcon}
                />
              </div>
            </div>
            <a className={style.headerButton} href="#">
              Bet List
            </a>
            <a className={style.headerButton} href="#">
              Statement
            </a>
            <a className={style.headerButton} href="#">
              Result
            </a>
            <a className={style.headerButton} href="#">
              Preferences
            </a>
          </div>
        </div>
        <div className={style.miniGameContainer}>
          <div className={style.miniGameTitle}>Mini Game</div>
          <a className={style.miniGameButton} href="#">
            <img
              src="/arrowhead-up.png"
              alt="arrowhead-up"
              className={style.miniGameButtonIcon}
            />
          </a>
        </div>
      </div>
    </header>
  );
};
