const Header = () => {
  return (
    <header className='header'>
      <div className='filter' >
        <button>Todas</button>
        <button>Completas</button>
        <button>No completas</button>
      </div>
      <div className='date'>
        <p className='dayNum'>16</p>
        <div>
          <p className='month'>August</p>
          <p className='year'>2021</p>
        </div>
        <p className='day'>Monday</p>
      </div>
    </header>
  )
}
export default Header