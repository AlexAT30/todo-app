const Header = () => {

  const date = new Date()

  return (
    <header className='header'>
      <div className='filter' >
        <button>Todas</button>
        <button>Completas</button>
        <button>No completas</button>
      </div>
      <div className='date'>
        <p className='dayNum'>{date.getDate()}</p>
        <div>
          <p className='month'>{date.toLocaleString('en-us', {month: 'long'})}</p>
          <p className='year'>{date.getFullYear()}</p>
        </div>
        <p className='day'>{date.toLocaleString('en-us', {weekday:'long'})}</p>
      </div>
    </header>
  )
}
export default Header