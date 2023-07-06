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

export const SportsbookTable: React.FC = () => {
  return (
    <div className={style.container}>
      <SideBar />
      <table className={style.table}>
        <thead>
          <tr className={style.headerFirstRow}>
            <th
              className={classNames(style.headerCell, style.time)}
              rowSpan={2}
            >
              Time
            </th>

            <th
              className={classNames(style.headerCell, style.runningBall)}
              rowSpan={2}
            >
              running ball
              <img src={clear} alt="clear" className={style.clearIcon} />
            </th>

            <th
              className={classNames(style.headerCell, style.fullTime)}
              colSpan={3}
            >
              full time
            </th>

            <th
              className={classNames(style.headerCell, style.firstHalf)}
              colSpan={4}
            >
              first half
            </th>
          </tr>

          <tr className={style.headerSecondRow}>
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
          <tr className={style.bodyRowHeader}>
            <td className={style.bodyCellHeader} colSpan={8}>
              Australia victoria premier league
            </td>

            <td className={style.bodyCellHeader}>
              <img src={refresh} alt="refresh" />
            </td>
          </tr>

          <tr className={style.bodyRow}>
            <td className={classNames(style.bodyCell, style.time)}>
              <div className={style.textBlack}>0 : 0</div>
              <div className={style.textBlue}>HT</div>
            </td>

            <td className={classNames(style.bodyCell, style.runningBall)}>
              <div className={style.runningBallRow}>
                <div className={style.textRed}>Port melporne sharks</div>

                <div className={style.linkBlock}>
                  <div className={style.runningBallLink}>
                    <img
                      src={televisionOn}
                      alt="tv"
                      className={style.TVIcon}
                    />
                  </div>

                  <div className={style.runningBallLink}>
                    <img src={lc} alt="live" className={style.liveIcon} />
                  </div>

                  <div className={style.runningBallLink}>
                    <img
                      src={uncheck}
                      alt="star"
                      className={style.starIcon}
                    />
                  </div>
                </div>
              </div>

              <div className={style.runningBallRow}>
                <div className={style.textBlue}>Heidelberg United</div>

                <div className={style.linkBlock}>
                  <div className={style.runningBallLink}>
                    <img
                      src={chart}
                      alt="chart"
                      className={style.TVIcon}
                    />
                  </div>

                  <div className={style.runningBallLink}>
                    <img
                      src={forecast}
                      alt="forecast"
                      className={style.liveIcon}
                    />
                  </div>

                  <div className={style.runningBallLink}>
                    <img
                      src={trade}
                      alt="trade"
                      className={style.starIcon}
                    />
                  </div>
                </div>
              </div>

              <div className={style.textGray}>Draw</div>
            </td>

            <td
              className={classNames(style.bodyCell, style.hdp, style.hdpColumn)}
            >
              <div className={style.hdpRow}>
                <div className={style.textDarkGrey}>0/-0.5</div>
                <div className={classNames(style.textRed, style.activeNumber)}>
                  -0.96
                </div>
              </div>

              <div className={style.hdpRow}>
                <div className={style.textDarkGrey}></div>
                <div
                  className={classNames(style.textBlack, style.activeNumber)}
                >
                  0.84
                </div>
              </div>
            </td>

            <td
              className={classNames(style.bodyCell, style.ou, style.ouColumn)}
            >
              <div className={style.ouRow}>
                <div className={style.textDarkGray}>1.5</div>
                <div className={style.textLightGray}>o</div>
                <div className={classNames(style.textBlue, style.activeNumber)}>
                  0.94
                </div>
              </div>

              <div className={style.ouRow}>
                <div className={style.textDarkGray}></div>
                <div className={style.textLightGray}>u</div>
                <div className={classNames(style.textBlue, style.activeNumber)}>
                  0.92
                </div>
              </div>
            </td>

            <td
              className={classNames(
                style.bodyCell,
                style.oneXTwo,
                style.oneXTwoColumn
              )}
            >
              <div className={style.oneXTwoRow}>
                <div className={classNames(style.textBlue, style.activeNumber)}>
                  2.44
                </div>
              </div>

              <div className={style.oneXTwoRow}>
                <div className={classNames(style.textBlue, style.activeNumber)}>
                  3.25
                </div>
              </div>

              <div className={style.oneXTwoRow}>
                <div className={classNames(style.textBlue, style.activeNumber)}>
                  2.62
                </div>
              </div>
            </td>

            <td
              className={classNames(style.bodyCell, style.firstHalf)}
              colSpan={3}
            ></td>

            <td className={classNames(style.bodyCell, style.empty)}>
              <button className={style.showMore}>
                <img
                  src={rightArrow}
                  alt="arrow"
                  className={style.arrowIcon}
                />
                8
              </button>
            </td>
          </tr>

          <tr className={style.bodyRow}>
            <td className={classNames(style.bodyCell, style.time)}></td>

            <td className={classNames(style.bodyCell, style.runningBall)}></td>

            <td
              className={classNames(style.bodyCell, style.hdp, style.hdpColumn)}
            >
              <div className={style.hdpRow}>
                <div className={style.textDarkGrey}>0</div>
                <div className={classNames(style.textBlue, style.activeNumber)}>
                  0.69
                </div>
              </div>

              <div className={style.hdpRow}>
                <div className={style.textDarkGrey}></div>
                <div className={classNames(style.textRed, style.activeNumber)}>
                  -0.81
                </div>
              </div>
            </td>

            <td
              className={classNames(style.bodyCell, style.ou, style.ouColumn)}
            >
              <div className={style.ouRow}>
                <div className={style.textDarkGray}>1.5/2</div>
                <div className={style.textLightGray}>o</div>
                <div className={classNames(style.textRed, style.activeNumber)}>
                  -0.80
                </div>
              </div>

              <div className={style.ouRow}>
                <div className={style.textDarkGray}></div>
                <div className={style.textLightGray}>u</div>
                <div className={classNames(style.textBlue, style.activeNumber)}>
                  0.66
                </div>
              </div>
            </td>

            <td
              className={classNames(
                style.bodyCell,
                style.oneXTwo,
                style.oneXTwoColumn
              )}
            >
              <div className={style.oneXTwoRow}>
                <div
                  className={classNames(style.textBlue, style.activeNumber)}
                ></div>
              </div>

              <div className={style.oneXTwoRow}>
                <div
                  className={classNames(style.textBlue, style.activeNumber)}
                ></div>
              </div>

              <div className={style.oneXTwoRow}>
                <div
                  className={classNames(style.textBlue, style.activeNumber)}
                ></div>
              </div>
            </td>

            <td
              className={classNames(style.bodyCell, style.firstHalf)}
              colSpan={3}
            ></td>

            <td className={classNames(style.bodyCell, style.empty)}></td>
          </tr>

          <tr className={style.bodyRow}>
            <td className={classNames(style.bodyCell, style.time)}></td>

            <td className={classNames(style.bodyCell, style.runningBall)}></td>

            <td
              className={classNames(style.bodyCell, style.hdp, style.hdpColumn)}
            >
              <div className={style.hdpRow}>
                <div className={style.textDarkGrey}>0.5</div>
                <div className={classNames(style.textRed, style.activeNumber)}>
                  -0.71
                </div>
              </div>

              <div className={style.hdpRow}>
                <div className={style.textDarkGrey}></div>
                <div className={classNames(style.textBlue, style.activeNumber)}>
                  0.59
                </div>
              </div>
            </td>

            <td
              className={classNames(style.bodyCell, style.ou, style.ouColumn)}
            >
              <div className={style.ouRow}>
                <div className={style.textDarkGray}>1/1.5</div>
                <div className={style.textLightGray}>o</div>
                <div className={classNames(style.textBlue, style.activeNumber)}>
                  0.64
                </div>
              </div>

              <div className={style.ouRow}>
                <div className={style.textDarkGray}></div>
                <div className={style.textLightGray}>u</div>
                <div className={classNames(style.textRed, style.activeNumber)}>
                  -0.78
                </div>
              </div>
            </td>

            <td
              className={classNames(
                style.bodyCell,
                style.oneXTwo,
                style.oneXTwoColumn
              )}
            >
              <div className={style.oneXTwoRow}>
                <div
                  className={classNames(style.textBlue, style.activeNumber)}
                ></div>
              </div>

              <div className={style.oneXTwoRow}>
                <div
                  className={classNames(style.textBlue, style.activeNumber)}
                ></div>
              </div>

              <div className={style.oneXTwoRow}>
                <div
                  className={classNames(style.textBlue, style.activeNumber)}
                ></div>
              </div>
            </td>

            <td
              className={classNames(style.bodyCell, style.firstHalf)}
              colSpan={3}
            ></td>

            <td className={classNames(style.bodyCell, style.empty)}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
