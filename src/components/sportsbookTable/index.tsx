/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames";
import style from "./sportsbookTable.module.css";
import { SideBar } from "../sideBar";
import clear from "../../icons/clear.png";
import refresh from "../../icons/refresh_live.gif";
import televisionOn from "../../icons/television.on.png";
import lc from "../../icons/lc.png";
import uncheck from "../../icons/uncheck.png";
import chart from "../../icons/chart1.png";
import forecast from "../../icons/forecast.png";
import trade from "../../icons/tradein.png";
import rightArrow from "../../icons/right-arrow.png";
import { Link } from "react-router-dom";

export const SportsbookTable: React.FC = () => {
  return (
    <div className={style.container}>
      <SideBar />
      <table className={style.table}>
        <thead>
          <tr>
            <th className={classNames(style.headerCell, style.time)} rowSpan={2}>
              Time
            </th>

            <th className={classNames(style.headerCell, style.runningBall)} rowSpan={2}>
              running ball
              <img src={clear} alt="clear" className={style.clearIcon} />
            </th>

            <th className={classNames(style.headerCell, style.fullTime)} colSpan={3}>
              full time
            </th>

            <th className={classNames(style.headerCell, style.firstHalf)} colSpan={4}>
              first half
            </th>
          </tr>

          <tr className={style.headerRow}>
            <th className={classNames(style.headerCell, style.hdp)}>HDP</th>

            <th className={classNames(style.headerCell, style.ou)}>O/U</th>

            <th className={classNames(style.headerCell, style.oneXTwo)}>1x2</th>

            <th className={classNames(style.headerCell, style.hdp)}>HDP</th>

            <th className={classNames(style.headerCell, style.ou)}>O/U</th>

            <th className={classNames(style.headerCell, style.oneXTwo)}>1x2</th>

            <th className={classNames(style.headerCell, style.empty)}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={style.bodyCellHeader} colSpan={8}>
              Australia victoria premier league
            </td>

            <td className={style.bodyCellHeader}>
              <button className={style.refreshButton}>
                <img src={refresh} alt="refresh" />
              </button>
            </td>
          </tr>

          <tr className={style.bodyRow}>
            <td className={classNames(style.bodyCell, style.time)}>
              <p className={style.textBlack}>0 : 0</p>
              <p className={style.textBlue}>HT</p>
            </td>

            <td className={classNames(style.bodyCell, style.runningBall)}>
              <div className={style.runningBallRow}>
                <p className={style.textRed}>Port melporne sharks</p>

                <div className={style.linkBlock}>
                  <Link to="#" className={style.runningBallLink}>
                    <img src={televisionOn} alt="tv" className={style.TVIcon} />
                  </Link>

                  <Link to="#" className={style.runningBallLink}>
                    <img src={lc} alt="live" className={style.liveIcon} />
                  </Link>

                  <Link to="#" className={style.runningBallLink}>
                    <img src={uncheck} alt="star" className={style.starIcon} />
                  </Link>
                </div>
              </div>

              <div className={style.runningBallRow}>
                <p className={style.textBlue}>Heidelberg United</p>

                <div className={style.linkBlock}>
                  <Link to="#" className={style.runningBallLink}>
                    <img src={chart} alt="chart" className={style.TVIcon} />
                  </Link>

                  <Link to="#" className={style.runningBallLink}>
                    <img src={forecast} alt="forecast" className={style.liveIcon} />
                  </Link>

                  <Link to="#" className={style.runningBallLink}>
                    <img src={trade} alt="trade" className={style.starIcon} />
                  </Link>
                </div>
              </div>

              <div className={style.runningBallRow}>
                <p className={style.textGray}>Draw</p>
              </div>
            </td>

            <td className={classNames(style.bodyCell, style.hdp, style.hdpColumn)}>
              <div className={style.hdpRow}>
                <p className={style.textDarkGrey}>0/-0.5</p>
                <p className={classNames(style.textRed, style.activeNumber)}>-0.96</p>
              </div>

              <div className={style.hdpRow}>
                <p className={style.textDarkGrey}></p>
                <p className={classNames(style.textBlack, style.activeNumber)}>0.84</p>
              </div>
            </td>

            <td className={classNames(style.bodyCell, style.ou, style.ouColumn)}>
              <div className={style.ouRow}>
                <p className={style.textDarkGray}>1.5</p>
                <p className={style.textLightGray}>o</p>
                <p className={classNames(style.textBlue, style.activeNumber)}>0.94</p>
              </div>

              <div className={style.ouRow}>
                <p className={style.textDarkGray}></p>
                <p className={style.textLightGray}>u</p>
                <p className={classNames(style.textBlue, style.activeNumber)}>0.92</p>
              </div>
            </td>

            <td className={classNames(style.bodyCell, style.oneXTwo, style.oneXTwoColumn)}>
              <p className={classNames(style.textBlue, style.activeNumber, style.oneXTwoRow)}>2.44</p>

              <p className={classNames(style.textBlue, style.activeNumber, style.oneXTwoRow)}>3.25</p>

              <p className={classNames(style.textBlue, style.activeNumber, style.oneXTwoRow)}>2.62</p>
            </td>

            <td className={classNames(style.bodyCell, style.firstHalf)} colSpan={3}></td>

            <td className={classNames(style.bodyCell, style.empty)}>
              <button className={style.showMore}>
                <img src={rightArrow} alt="arrow" className={style.arrowIcon} />8
              </button>
            </td>
          </tr>

          <tr className={style.bodyRow}>
            <td className={classNames(style.bodyCell, style.time)}></td>

            <td className={classNames(style.bodyCell, style.runningBall)}></td>

            <td className={classNames(style.bodyCell, style.hdp, style.hdpColumn)}>
              <div className={style.hdpRow}>
                <p className={style.textDarkGrey}>0</p>
                <p className={classNames(style.textBlue, style.activeNumber)}>0.69</p>
              </div>

              <div className={style.hdpRow}>
                <p className={style.textDarkGrey}></p>
                <p className={classNames(style.textRed, style.activeNumber)}>-0.81</p>
              </div>
            </td>

            <td className={classNames(style.bodyCell, style.ou, style.ouColumn)}>
              <div className={style.ouRow}>
                <p className={style.textDarkGray}>1.5/2</p>
                <p className={style.textLightGray}>o</p>
                <p className={classNames(style.textRed, style.activeNumber)}>-0.80</p>
              </div>

              <div className={style.ouRow}>
                <p className={style.textDarkGray}></p>
                <p className={style.textLightGray}>u</p>
                <p className={classNames(style.textBlue, style.activeNumber)}>0.66</p>
              </div>
            </td>

            <td className={classNames(style.bodyCell, style.oneXTwo, style.oneXTwoColumn)}>
              <p className={classNames(style.textBlue, style.activeNumber, style.oneXTwoRow)}></p>

              <p className={classNames(style.textBlue, style.activeNumber, style.oneXTwoRow)}></p>

              <p className={classNames(style.textBlue, style.activeNumber, style.oneXTwoRow)}></p>
            </td>

            <td className={classNames(style.bodyCell, style.firstHalf)} colSpan={3}></td>

            <td className={classNames(style.bodyCell, style.empty)}></td>
          </tr>

          <tr className={style.bodyRow}>
            <td className={classNames(style.bodyCell, style.time)}></td>

            <td className={classNames(style.bodyCell, style.runningBall)}></td>

            <td className={classNames(style.bodyCell, style.hdp, style.hdpColumn)}>
              <div className={style.hdpRow}>
                <p className={style.textDarkGrey}>0.5</p>
                <p className={classNames(style.textRed, style.activeNumber)}>-0.71</p>
              </div>

              <div className={style.hdpRow}>
                <p className={style.textDarkGrey}></p>
                <p className={classNames(style.textBlue, style.activeNumber)}>0.59</p>
              </div>
            </td>

            <td className={classNames(style.bodyCell, style.ou, style.ouColumn)}>
              <div className={style.ouRow}>
                <p className={style.textDarkGray}>1/1.5</p>
                <p className={style.textLightGray}>o</p>
                <p className={classNames(style.textBlue, style.activeNumber)}>0.64</p>
              </div>

              <div className={style.ouRow}>
                <p className={style.textDarkGray}></p>
                <p className={style.textLightGray}>u</p>
                <p className={classNames(style.textRed, style.activeNumber)}>-0.78</p>
              </div>
            </td>

            <td className={classNames(style.bodyCell, style.oneXTwo, style.oneXTwoColumn)}>
              <p className={classNames(style.textBlue, style.activeNumber, style.oneXTwoRow)}></p>

              <p className={classNames(style.textBlue, style.activeNumber, style.oneXTwoRow)}></p>

              <p className={classNames(style.textBlue, style.activeNumber, style.oneXTwoRow)}></p>
            </td>

            <td className={classNames(style.bodyCell, style.firstHalf)} colSpan={3}></td>

            <td className={classNames(style.bodyCell, style.empty)}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
