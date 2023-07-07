import style from "./sideBar.module.css";
import redo from "../../icons/redo.png";
import arrow from "../../icons/arrowhead-up.png";
import classNames from "classnames";

export const SideBar: React.FC = () => {
  return (
    <div className={style.sideBar}>
      <div className={style.topBlock}>
        <div className={style.topBlockItem}>
            <p>e06903003005</p>
            <button className={style.refreshButton}>
                <img src={redo} alt="redo" />
            </button>
        </div>
          <div className={style.topBlockItem}>
              <p className={style.blueText}>Config Now</p>
              <button className={classNames( style.configButton)}>
                  <img src={arrow} alt="arrow" />
              </button>
          </div>
      </div>
    </div>
  );
};
