import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Body from '../components/Body'
import { UserDataProvider } from '../providers/AuthProvider'


function Home() {
    return (
      <div>
        <UserDataProvider>
          <Navbar></Navbar>
          <Body></Body>
          <Footer></Footer>
        </UserDataProvider>
      </div>
    )
}

export default Home