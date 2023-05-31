import logo from '../images/logo/logo__header.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого шапка" />
    </header>
  );
}

export default Header;
