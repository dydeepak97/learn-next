import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>DY Next.js</span> Learn
      </h1>
      <p className={headerStyles.description}>
        Keep reading stuff
      </p>
    </div>
  )
}

export default Header
