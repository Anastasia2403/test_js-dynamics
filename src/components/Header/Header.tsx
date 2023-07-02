/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import classnames from 'classnames';
import { useEffect, useState } from 'react';


export const Header: React.FC = () => {
  const languages = ["English", "中文(简体)", "中文(繁體)", "한국어", "日本語", "ไทย", "Tiếng Việt", "Indonesia", "Português", "España"];
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const localTimeString = currentDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      const localDateString = currentDate.toLocaleDateString([], {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
      const timezoneOffset = currentDate.getTimezoneOffset() / -60;
      const timezoneString = timezoneOffset >= 0 ? `GMT +${timezoneOffset}` : `GMT ${timezoneOffset}`;
      const localTime = `${localTimeString} ${localDateString} ${timezoneString}`;
      setLocalTime(localTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className={s.header}>
      <div className={s.header__top}>
        <div className={s.header__top__logo}>
          <img
            src="/logo.png"
            alt="logo"
          >
          </img>
        </div>
        <div className={`${s.header__top__menu} ${s.menu}`}>
          <div className={s.menu__top}>
            <div className={s.action}>
              <NavLink
                to="/help"
                className={s.action__link}
              >
                <img
                src="/Question_mark_white_icon.png"
                alt="question"
                className={s.action__icon__question}
                >
                </img>
                Help
              </NavLink>
            </div>

            <div className={s.action}>
              <NavLink
                to="/chat"
                className={s.action__link}
              >
                <img
                  src="/chat.png"
                  alt="chat"
                  className={s.action__icon__conversation}
                >
                </img>
                Live Chat
              </NavLink>
            </div>

            <select className={s.language__select}>
              {languages.map((language, index) => (
                <option
                  key={index}
                  value={language}
                >
                  {language}
                </option>
              ))}
            </select>

            <button className={s.logout__button}>
              Logout
            </button>
          </div>
          <div className={s.menu__bottom}>
            <nav className={s.nav}>
              <ul className={s.nav__list}>
                <li className={s.nav__item}>
                  <NavLink
                    to="/sportsbook"
                    className={({ isActive }) =>
                      classnames(
                        s.nav__link,
                        { [s.nav__link__active]: isActive }
                      )}
                  >
                    Sportsbook
                  </NavLink>
                </li>
                <li className={s.nav__item}>
                 <NavLink
                    to="/e-sports"
                    className={({ isActive }) =>
                      classnames(
                        s.nav__link,
                        { [s.nav__link__active]: isActive }
                      )}
                  >
                    <img
                      src="/hot.png"
                      alt="hot"
                      className={s.nav__link__icon}
                    />
                    E-Sports
                  </NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink
                    to="/virtual-sports"
                    className={({ isActive }) =>
                      classnames(
                        s.nav__link,
                        { [s.nav__link__active]: isActive }
                      )}
                  >
                    <img
                      src="/hot.png"
                      alt="hot"
                      className={s.nav__link__icon}
                    />
                    Virtual Sports
                  </NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink
                    to="/4d"
                    className={({ isActive }) =>
                      classnames(
                        s.nav__link,
                        { [s.nav__link__active]: isActive }
                      )}
                  >
                    4D
                  </NavLink>
                </li>
                <li className={s.nav__item}>
                 <NavLink
                    to="/casino"
                    className={({ isActive }) =>
                      classnames(
                        s.nav__link,
                        { [s.nav__link__active]: isActive }
                      )}
                  >
                    <img
                      src="/hot.png"
                      alt="hot"
                      className={s.nav__link__icon}
                    />
                    Casino
                  </NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink
                    to="/games"
                    className={({ isActive }) =>
                      classnames(
                        s.nav__link,
                        { [s.nav__link__active]: isActive }
                      )}
                  >
                    <img
                      src="/hot.png"
                      alt="hot"
                      className={s.nav__link__icon}
                    />
                    Games
                  </NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink
                    to="/keno"
                    className={({ isActive }) =>
                      classnames(
                        s.nav__link,
                        { [s.nav__link__active]: isActive }
                      )}
                  >
                    <img
                      src="/hot.png"
                      alt="hot"
                      className={s.nav__link__icon}
                    />
                    Keno
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={s.header__bottom}>
        <div className={s.time}>
          {localTime}
        </div>
        <div className={s.news}>
          <div className={s.announcements}>
            <a 
              href="#"
              className={s.announcements__link}
            >
              <img
                src="/tv.png"
                alt="tv"
                className={s.announcements__icon}
              />
              Announcements
            </a>
            <div className={s.announcements__count}>
              270
            </div>
          </div>
          <div className={s.msg}>
            |
            <a
              href="#"
              className={s.msg__link}
            >
              Personal Msg
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
