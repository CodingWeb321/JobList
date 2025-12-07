import Button from "./reusable/Button";

const Header = ({ openAddModal }) => {
  return (
    <header className='main-header'>
      <div className='logo-container'>
        <span className='logo'>⚫ Jobseeker</span>
      </div>
      <nav className='main-nav'>
        <a href='#jobs' className='active-link'>
          Jobs
        </a>
        <a href='#companies'>Companies</a>
        <a href='#about'>About Us</a>
      </nav>
      <div className='header-actions'>
        <Button variant='primary' onClick={openAddModal}>
          ➕ Add New Job
        </Button>
        <div className='user-avatar'>A</div>
      </div>
    </header>
  );
};

export default Header;
