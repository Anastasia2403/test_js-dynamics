/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from "react-router-dom";
import style from "./header.module.css";
import classnames from "classnames";
import { useEffect, useState } from "react";
import logo from "../../icons/logo.png";
import question from "../../icons/question-mark.png";
import chat from "../../icons/chat.png";
import hot from "../../icons/hot.png";
import tv from "../../icons/tv.png";
import search from "../../icons/search.png";
import arrowUp from "../../icons/arrowhead-up.png";

export const Header: React.FC = () => {
  const languages = ["English", "中文(简体)", "中文(繁體)", "한국어", "日本語", "ไทย", "Tiếng Việt", "Indonesia", "Português", "España"];
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
      const timezoneString = timezoneOffset >= 0 ? `GMT +${timezoneOffset}` : `GMT ${timezoneOffset}`;
      const localTime = `${localTimeString} ${localDateString} ${timezoneString}`;
      setLocalTime(localTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className={style.header}>
      <div className={style.headerTop}>
        <div className={style.headerTopLogo}>
          <img src={logo} alt="logo" className={style.logo}></img>
        </div>
        <div className={`${style.headerTopMenu} ${style.menu}`}>
          <div className={style.menuTop}>
            <div className={style.action}>
              <Link to="https://www.cmd328.com/main/static.aspx?q=faq.html" className={style.actionLink} target="_blank">
                <img src={question} alt="question" className={style.actionIconQuestion}></img>
                Help
              </Link>
            </div>

            <div className={style.action}>
              <Link to="https://www.cmd328.com/main/livechat.aspx" className={style.actionLink} target="_blank">
                <img src={chat} alt="chat" className={style.actionIconConversation}></img>
                Live Chat
              </Link>
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
                    <img src={hot} alt="hot" className={style.navLinkIcon} />
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
                    <img src={hot} alt="hot" className={style.navLinkIcon} />
                    Virtual Sports
                  </NavLink>
                </li>
                <li className={style.navItem}>
                  <NavLink
                    to="/4d"
                    className={({ isActive }) =>
                      classnames(style.navLink, style.navLinkFourD, {
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
                    <img src={hot} alt="hot" className={style.navLinkIcon} />
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
                    <img src={hot} alt="hot" className={style.navLinkIcon} />
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
                    <img src={hot} alt="hot" className={style.navLinkIcon} />
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
              <Link to="https://www.cmd328.com/member/news/commnewslist.aspx" className={style.announcementsLink} target="_blank">
                <img src={tv} alt="tv" className={style.announcementsIcon} />
                Announcements
              </Link>
              <div className={style.announcementsCount}>270</div>
            </div>
            <div className={style.msg}>
              |
              <Link to="https://www.cmd328.com/member/news/commnewslist.aspx?t=MEMBER" className={style.msgLink} target="_blank">
                Personal Msg
              </Link>
            </div>
          </div>
          <div className={style.search}>
            <div className={style.searchTeam}>
              <input type="text" className={style.searchInput} placeholder="Search Team" />
              <div className={style.searchButton}>
                <img src={search} alt="search" className={style.searchIcon} />
              </div>
            </div>
            <Link className={style.headerButton} to="https://www.cmd328.com/member/betsview/betlist.aspx" target="_blank">
              Bet List
            </Link>
            <Link className={style.headerButton} to="https://www.cmd328.com/member/lists/paymentdaily.aspx" target="_blank">
              Statement
            </Link>
            <Link className={style.headerButton} to="https://www.cmd328.com/member/lists/matchresult.aspx" target="_blank">
              Result
            </Link>
            <Link className={style.headerButton} to="https://www.cmd328.com/member/lists/password.aspx?type=4" target="_blank">
              Preferences
            </Link>
          </div>
        </div>
        <div className={style.miniGameContainer}>
          <div className={style.miniGameTitle}>Mini Game</div>
          <div className={style.miniGameButton}>
            <img src={arrowUp} alt="arrowhead-up" className={style.miniGameButtonIcon} />
          </div>
        </div>
      </div>
    </header>
  );
};
