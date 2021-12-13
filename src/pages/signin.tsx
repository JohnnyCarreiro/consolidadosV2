import { ReactNode } from 'react'
import { SigninContainer } from '@/styles/signin'

interface SigninProps {
  children: ReactNode;
}

export const Signin: React.FC<SigninProps> = ({ children }) => {
  return (
    <SigninContainer>
      <h1>Signin</h1>
      {children}
    </SigninContainer>
  )
}

export default Signin
