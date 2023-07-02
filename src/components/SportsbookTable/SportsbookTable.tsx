/* eslint-disable jsx-a11y/anchor-is-valid */
import s from './SportsbookTable.module.css';

export const SportsbookTable: React.FC = () => {
  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead>
          <tr className={s.headerRow1}>
            <th
              className={`${s.headerCell} ${s.time}`}
              rowSpan={2}
            >
              Time
            </th>

            <th
              className={`${s.headerCell} ${s.runningBall}`}
              rowSpan={2}
            >
              running ball
              <img
                src="./clear.png"
                alt="clear"
                className={s.clearIcon}
              />
            </th>

            <th
              className={`${s.headerCell} ${s.fullTime}`}
              colSpan={3}
            >
              full time
            </th>

            <th
              className={`${s.headerCell} ${s.firstHalf}`}
              colSpan={4}
            >
              first half
            </th>
          </tr>

          <tr className={s.headerRow2}>
            <th
              className={`${s.headerCell} ${s.hdp}`}
            >
              HDP
            </th>

            <th
              className={`${s.headerCell} ${s.ou}`}
            >
              O/U
            </th>

            <th
              className={`${s.headerCell} ${s.oneXTwo}`}
            >
              1x2
            </th>

            <th
              className={`${s.headerCell} ${s.hdp}`}
            >
              HDP
            </th>

            <th
              className={`${s.headerCell} ${s.ou}`}
            >
              O/U
            </th>

            <th
              className={`${s.headerCell} ${s.oneXTwo}`}
            >
              1x2
            </th>

            <th
              className={`${s.headerCell} ${s.empty}`}
            ></th>
          </tr>
        </thead>
        <tbody>
            <tr className={s.bodyRowHeader}>
              <td
                className={s.bodyCellHeader}
                colSpan={8}
              >
                Australia victoria premier league
              </td>
            
              <td 
                className={s.bodyCellHeader}
              >
                <img
                  src="/refresh_live.gif"
                  alt="refresh"
                />
              </td>
            </tr>

            <tr className={s.bodyRow}>
              <td
                className={`${s.bodyCell} ${s.time}`}
              >
                <div className={s.textBlack}>0 : 0</div>
                <div className={s.textBlue}>HT</div>
              </td>

              <td
                className={`${s.bodyCell} ${s.runningBall}`}
              >
                <div className={s.runningBall__row}>
                  <div className={s.textRed}>Port melporne sharks</div>
                
                  <div className={s.linkBlock}>
                    <a href='#' className={s.runningBall__link}>
                      <img
                        src="/television.on.png"
                        alt="tv"
                        className={s.TVIcon}
                      />
                    </a>
                  
                    <a href="#" className={s.runningBall__link}>
                      <img
                        src="/lc.png"
                        alt="live"
                        className={s.liveIcon}
                      />
                    </a>
                  
                    <a href="#" className={s.runningBall__link}>
                      <img
                        src="/uncheck.png"
                        alt="star"
                        className={s.starIcon}
                      />
                    </a>
                  </div>
                </div>
              
                <div className={s.runningBall__row}>
                  <div className={s.textBlue}>Heidelberg United</div>
                
                  <div>
                    <a href='#' className={s.runningBall__link}>
                      <img
                        src="/chart1.png"
                        alt="chart"
                        className={s.TVIcon}
                      />
                    </a>
                  
                    <a href="#" className={s.runningBall__link}>
                      <img
                        src="/forecast.png"
                        alt="forecast"
                        className={s.liveIcon}
                      />
                    </a>
                  
                    <a href="#" className={s.runningBall__link}>
                      <img
                        src="/tradein.png"
                        alt="trade"
                        className={s.starIcon}
                      />
                    </a>
                  </div>
                </div>
              
                <div className={s.textGray}>Draw</div>
              </td>

              <td
                className={`${s.bodyCell} ${s.hdp}`}
                style={{borderRight: 'none'}}
              >
                <div className={s.hdp__row}>
                  <div className={s.textDarkGrey}>0/-0.5</div>
                  <div className={`${s.textRed} ${s.activeNumber}`}>-0.96</div>
                </div>
              
                <div className={s.hdp__row}>
                  <div className={s.textDarkGrey}></div>
                  <div className={`${s.textBlack} ${s.activeNumber}`}>0.84</div>
                </div>
              </td>

              <td
                className={`${s.bodyCell} ${s.ou}`}
                style={{borderRight: 'none', borderLeft: 'none'}}
              >
                <div className={s.ou__row}>
                  <div className={s.textDarkGray}>1.5</div>
                  <div className={s.textLightGray}>o</div>
                  <div className={`${s.textBlue} ${s.activeNumber}`}>0.94</div>
                </div>
              
                <div className={s.ou__row}>
                  <div className={s.textDarkGray}></div>
                  <div className={s.textLightGray}>u</div>
                  <div className={`${s.textBlue} ${s.activeNumber}`}>0.92</div>
                </div>
              </td>

              <td
                className={`${s.bodyCell} ${s.oneXTwo}`}
                style={{borderLeft: 'none', borderRight: '2px solid #DAAC9B'}}
              >
                <div className={s.oneXTwo__row}>
                  <div className={`${s.textBlue} ${s.activeNumber}`}>2.44</div>
                </div>
              
                <div className={s.oneXTwo__row}>
                  <div className={`${s.textBlue} ${s.activeNumber}`}>3.25</div>
                </div>
              
                <div className={s.oneXTwo__row}>
                  <div className={`${s.textBlue} ${s.activeNumber}`}>2.62</div>
                </div>
              </td>

              <td
                className={`${s.bodyCell} ${s.firstHalf}`}
                colSpan={3}
              >
              </td>

              <td
                className={`${s.bodyCell} ${s.empty}`}
              >
                <a
                  href='#'
                  className={s.showMore}
                >
                  <img
                    src="/right-arrow.png"
                    alt="arrow"
                    className={s.arrowIcon}
                  />
                  8
                </a>
              </td>
            </tr>

            <tr className={s.bodyRow}>
              <td
                className={`${s.bodyCell} ${s.time}`}
              >
              </td>

              <td
                className={`${s.bodyCell} ${s.runningBall}`}
              >
              </td>

              <td
                className={`${s.bodyCell} ${s.hdp}`}
                style={{borderRight: 'none'}}
              >
                <div className={s.hdp__row}>
                  <div className={s.textDarkGrey}>0</div>
                  <div className={`${s.textBlue} ${s.activeNumber}`}>0.69</div>
                </div>
              
                <div className={s.hdp__row}>
                  <div className={s.textDarkGrey}></div>
                  <div className={`${s.textRed} ${s.activeNumber}`}>-0.81</div>
                </div>
              </td>

              <td
                className={`${s.bodyCell} ${s.ou}`}
                style={{borderRight: 'none', borderLeft: 'none'}}
              >
                <div className={s.ou__row}>
                  <div className={s.textDarkGray}>1.5/2</div>
                  <div className={s.textLightGray}>o</div>
                  <div className={`${s.textRed} ${s.activeNumber}`}>-0.80</div>
                </div>
              
                <div className={s.ou__row}>
                  <div className={s.textDarkGray}></div>
                  <div className={s.textLightGray}>u</div>
                  <div className={`${s.textBlue} ${s.activeNumber}`}>0.66</div>
                </div>
              </td>

              <td
                className={`${s.bodyCell} ${s.oneXTwo}`}
                style={{borderLeft: 'none', borderRight: '2px solid #DAAC9B'}}
              >
                <div className={s.oneXTwo__row}>
                  <div className={`${s.textBlue} ${s.activeNumber}`}></div>
                </div>

                <div className={s.oneXTwo__row}>
                  <div className={`${s.textBlue} ${s.activeNumber}`}></div>
                </div>

                <div className={s.oneXTwo__row}>
                  <div className={`${s.textBlue} ${s.activeNumber}`}></div>
                </div>
              </td>

              <td
                className={`${s.bodyCell} ${s.firstHalf}`}
                colSpan={3}
              >
              </td>
              
              <td
                className={`${s.bodyCell} ${s.empty}`}
              >
              </td>
            </tr>

            <tr className={s.bodyRow}>
              <td
                className={`${s.bodyCell} ${s.time}`}
              >
              </td>

              <td
                className={`${s.bodyCell} ${s.runningBall}`}
              >
              </td>

              <td
                className={`${s.bodyCell} ${s.hdp}`}
                style={{borderRight: 'none'}}
              >
                <div className={s.hdp__row}>
                  <div className={s.textDarkGrey}>0.5</div>
                  <div className={`${s.textRed} ${s.activeNumber}`}>-0.71</div>
                </div>
              
                <div className={s.hdp__row}>
                  <div className={s.textDarkGrey}></div>
                  <div className={`${s.textBlue} ${s.activeNumber}`}>0.59</div>
                </div>
              </td>

              <td
                className={`${s.bodyCell} ${s.ou}`}
                style={{borderRight: 'none', borderLeft: 'none'}}
              >
                <div className={s.ou__row}>
                  <div className={s.textDarkGray}>1/1.5</div>
                  <div className={s.textLightGray}>o</div>
                  <div className={`${s.textBlue} ${s.activeNumber}`}>0.64</div>
                </div>
              
                <div className={s.ou__row}>
                  <div className={s.textDarkGray}></div>
                  <div className={s.textLightGray}>u</div>
                  <div className={`${s.textRed} ${s.activeNumber}`}>-0.78</div>
                </div>
              </td>

              <td
                className={`${s.bodyCell} ${s.oneXTwo}`}
                style={{borderLeft: 'none', borderRight: '2px solid #DAAC9B'}}
              >
                <div className={s.oneXTwo__row}>
                  <div className={`${s.textBlue} ${s.activeNumber}`}></div>
                </div>

                <div className={s.oneXTwo__row}>
                  <div className={`${s.textBlue} ${s.activeNumber}`}></div>
                </div>

                <div className={s.oneXTwo__row}>
                  <div className={`${s.textBlue} ${s.activeNumber}`}></div>
                </div>
              </td>

              <td
                className={`${s.bodyCell} ${s.firstHalf}`}
                colSpan={3}
              >
              </td>

              <td
                className={`${s.bodyCell} ${s.empty}`}
              >
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}