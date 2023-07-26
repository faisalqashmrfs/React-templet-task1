import './NavbarStyle.css';

function Navbar({brand , get , Logein , Icon}) {
  return (
    <>
    <nav className='Navbar'>
        <div className='contant'>
          <div className="logo">
              <a href="#"><i class={Icon}></i></a>
              <h1>{brand}</h1>
          </div>
          <div className="navitem">
              <ul>
                  <li><a href="#">{get}</a></li>
                  <li><a href="#">{Logein}</a></li>
              </ul>
          </div>
        </div>
    </nav>
    </>
  );
}

export default Navbar;
