
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import SmNav from '../SmNav/SmNav'
import './Layout.scss'

const Layout = () => {
  return (
    
    <div className="App min-h-screen">
      <Sidebar />

      <div className='lg:hidden' ><SmNav></SmNav></div>

      <h1 className='' >hsdfasfd</h1>
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
