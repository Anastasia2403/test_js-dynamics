import style from './sideBar.module.css';

export const SideBar: React.FC = () => {

  return (
    <div className={style.sideBar}>
      <div className={style.firstBlock}>
        <div className={style.firstBlockItem}>
          <p className={style.firstBlockItemText}>e06903003005</p>
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </div>
  )
}