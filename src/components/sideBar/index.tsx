import classNames from "classnames";
import {Link} from "react-router-dom";
import style from "./sideBar.module.css";
import redo from "../../icons/redo.png";
import arrow from "../../icons/arrowhead-up.png";

export const SideBar: React.FC = () => {
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
              <Link to="https://www.cmd328.com/member/lists/password.aspx?type=3" className={style.blueText} target="_blank">Config Now</Link>
              <button className={classNames( style.configButton)}>
                  <img src={arrow} alt="arrow" />
              </button>
          </div>
          <div className={style.sideBarBlockItem}>
              <p className={style.title}>Bet Credit</p>
              <p className={style.credit}>EUR 995.65</p>
          </div>
      </div>

      <div className={classNames(style.forecastHeader, style.sideBarBlock)}>
        <div className={style.sideBarBlockItem}>
            <p>Sum Forecast</p>
            <button className={classNames(style.refreshButton, style.refreshButtonForecast)}>
                <img src={redo} alt="redo" />
            </button>
        </div>
      </div>
    </div>
  );
};
