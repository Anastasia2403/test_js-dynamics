import s from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.header__top}></div>
      <div className={s.header__bottom}></div>
    </header>
  );
}
