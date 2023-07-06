/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames";
import style from "./sportsbookTable.module.css";
import { SideBar } from "../SideBar/sideBar";

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
              <img src="/clear.png" alt="clear" className={style.clearIcon} />
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
              <img src="/refresh_live.gif" alt="refresh" />
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
                  <a href="#" className={style.runningBallLink}>
                    <img
                      src="/television.on.png"
                      alt="tv"
                      className={style.TVIcon}
                    />
                  </a>

                  <a href="#" className={style.runningBallLink}>
                    <img src="/lc.png" alt="live" className={style.liveIcon} />
                  </a>

                  <a href="#" className={style.runningBallLink}>
                    <img
                      src="/uncheck.png"
                      alt="star"
                      className={style.starIcon}
                    />
                  </a>
                </div>
              </div>

              <div className={style.runningBallRow}>
                <div className={style.textBlue}>Heidelberg United</div>

                <div>
                  <a href="#" className={style.runningBallLink}>
                    <img
                      src="/chart1.png"
                      alt="chart"
                      className={style.TVIcon}
                    />
                  </a>

                  <a href="#" className={style.runningBallLink}>
                    <img
                      src="/forecast.png"
                      alt="forecast"
                      className={style.liveIcon}
                    />
                  </a>

                  <a href="#" className={style.runningBallLink}>
                    <img
                      src="/tradein.png"
                      alt="trade"
                      className={style.starIcon}
                    />
                  </a>
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
              <a href="#" className={style.showMore}>
                <img
                  src="/right-arrow.png"
                  alt="arrow"
                  className={style.arrowIcon}
                />
                8
              </a>
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
