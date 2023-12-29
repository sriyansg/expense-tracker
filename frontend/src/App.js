import React, { useState, useMemo } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { googleLogout as GoogleLogout } from '@react-oauth/google';
import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from './styles/Layouts'
import { useGlobalContext } from './context/globalContext';
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import Analytics from './Components/Analytics/Analytics';
import transtab from './History/transhistory';
import History from './History/History';
import TransHistory from './History/transhistory';
import AtGlance from './Components/AtGlance/Glance';


function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const [active, setActive] = useState(1);

  const global = useGlobalContext()
  console.log(global);

  const handleLoginSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecoded);
    setAuthenticated(true);
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  const handleLogoutSuccess = () => {
    console.log('Logout successful');
    setAuthenticated(false);
  };

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <TransHistory />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      case 5:
        return <Analytics />
      case 6:
        return <AtGlance />
      default:
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <>
      {authenticated ? (
        <AppStyled className="App">
          {orbMemo}
          <MainLayout>
            <Navigation active={active} setActive={setActive} onSignout={handleLogoutSuccess} />
            <main>
              {displayData()}
              <GoogleLogout
                onLogoutSuccess={handleLogoutSuccess}
                buttonText="Sign Out"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
              />
            </main>
          </MainLayout>
        </AppStyled>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
        />
      )}
    </>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background:#2a2e32;
    backdrop-filter: blur(.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`

export default App;