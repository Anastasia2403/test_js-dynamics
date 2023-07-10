import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import style from "./sideBar.module.css";
import redo from "../../icons/redo.png";
import arrow from "../../icons/arrowhead-up.png";
import { useState } from "react";

export const SideBar: React.FC = () => {
  const [inputValue, setInputValue] = useState(10);
  const [isPendingOpen, setIsPendingOpen] = useState(true);
  const [isLastOpen, setIsLastOpen] = useState(false);
  const [isBetListOpen, setIsBetListOpen] = useState(false);
  return (
    <div className={style.sideBar}>
      <div className={style.sideBarBlock}>
        <div className={style.sideBarBlockItem}>
          <p>e06903003005</p>
          <button className={style.refreshButton}>
            <img src={redo} alt="redo" />
          </button>
        </div>
        <div className={style.sideBarBlockItem}>
          <Link to="https://www.cmd328.com/member/lists/password.aspx?type=3" className={style.blueText} target="_blank">
            Config Now
          </Link>
          <button className={classNames(style.openMore)}>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className={style.sideBarBlockItem}>
          <p className={style.title}>Bet Credit</p>
          <p className={style.credit}>EUR 995.65</p>
        </div>
      </div>

      <div className={classNames(style.blueHeader, style.sideBarBlock)}>
        <div className={style.sideBarBlockItem}>
          <Link to="https://www.cmd328.com/Member/BetOdds/ForecastList.aspx?type=0&cur=EUR#0" target="_blank" className={style.blueHeaderTitle}>
            Sum Forecast
          </Link>
          <button className={classNames(style.refreshButton, style.refreshButtonForecast)}>
            <img src={redo} alt="redo" />
          </button>
        </div>
        <div className={classNames(style.sideBarBlockItemContent, style.sideBarBlockItem)}>
          <select className={style.select}>
            <option>All</option>
            <option>Live</option>
            <option>Today</option>
            <option>Early</option>
          </select>
          <Link to="https://www.cmd328.com/Member/BetOdds/ForecastList.aspx?type=0&cur=EUR#0" target="_blank" className={style.sumTitle}>
            EUR 0.00
          </Link>
        </div>
      </div>

      <div className={style.coeficientInfo}>
        <p className={style.coeficientInfoTitle}>Soccer-Handicap</p>

        <div className={style.coeficientInfoDetails}>
          <p className={style.coeficientInfoDetailsTitle}>Real Betis (Arcos)</p>
          <div className={style.coeficientInfoDetailsContent}>
            <span className={style.textBlue}>+0,25 &nbsp;</span>
            <span>[0-0] @ &nbsp;</span>
            <span className={style.textBlue}>0.85</span>
          </div>
          <label className={style.autoRefresh}>
            Auto Refresh
            <input type="checkbox" />
          </label>
        </div>
        <div className={style.coeficientInfoDescription}>
          <p className={style.coeficientInfoDescriptionTitle}>Esoccer battle - 8 mins play</p>
          <p>Real Betis (Arcos)</p>
          <p>Barcelona (DriLLer)</p>
        </div>
        <div className={style.coeficientInfoInput}>
          <label>
            EUR:
            <input type="text" value={inputValue} className={style.inputBlock} onChange={(e) => setInputValue(Number(e.target.value))} />
          </label>
        </div>
        <div className={classNames(style.coeficientInfoValue, style.coeficientInfoValuePayout)}>
          <p className={style.coeficientInfoValueTitle}>Max Payout</p>
          <p className={style.coeficientInfoValueContent}>8.50</p>
        </div>
        <div className={style.coeficientInfoValue}>
          <p className={style.coeficientInfoValueTitle}>Bet Limit</p>
          <p className={classNames(style.coeficientInfoValueContent, style.contentBlue)}>5 / 750</p>
        </div>
        <div className={style.coeficientInfoButton}>
          <button className={classNames(style.infoButton, style.buttonBet)}>Bet</button>
          <button className={classNames(style.infoButton, style.buttonCancel)}>Cancel</button>
        </div>
      </div>

      <NavLink to="#" className={style.liveCenter}>
        <p className={style.liveCenterTitle}>Live Center</p>
        <div className={style.liveCenterCounter}>16</div>
      </NavLink>

      <NavLink to="#" className={style.favorites}>
        <p className={style.favoritesTitle}>My Favorites</p>
      </NavLink>

      <button className={style.betList} onClick={() => setIsBetListOpen(!isBetListOpen)}>
        <div className={style.betListContainer}>
          <button className={style.openMore}>
            <img src={arrow} alt="arrow" />
          </button>
          <p className={style.betListTitle}>Mini Bet List</p>
        </div>
        <button className={classNames(style.refreshButton, style.refreshButtonForecast)}>
          <img src={redo} alt="arrow" />
        </button>
      </button>

      <div className={classNames(style.betListContent, isBetListOpen && style.betListOpen)}>
        <div className={style.betListContentMain}>
          <button
            className={classNames(style.betListContentItem, isPendingOpen && style.active)}
            onClick={() => {
              setIsPendingOpen(true);
              setIsLastOpen(false);
            }}
          >
            Pending Bets
          </button>
          <button
            className={classNames(style.betListContentItem, isLastOpen && style.active)}
            onClick={() => {
              setIsPendingOpen(false);
              setIsLastOpen(true);
            }}
          >
            Last Bets
          </button>
        </div>
        <p className={style.betListContentBottom}>No information is available</p>
      </div>
    </div>
  );
};
