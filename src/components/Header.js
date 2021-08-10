import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <h1>CV CREATOR</h1>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};

`

const HeaderWrapper = styled.div`
  font-family: 'Zen Tokyo Zoo', cursive;
  font-size: 72px;
  background: -webkit-linear-gradient(#eee, #000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  display: flex;
  align-items: center;
  max-width: 1800px;
  padding: 3rem 8rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2.2rem;

  @media (max-width: 1600px) {
    justify-content: center;
  }
`

export default Header
