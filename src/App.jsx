import styled from 'styled-components'
import { AuthPage } from './Pages/Auth'

export const App = () => {

  return (
   <AppContainer>
      <AuthPage></AuthPage>
   </AppContainer>
  )
}


const AppContainer = styled.div`
  padding: 0;
  margin: 0;

`