import styled from 'styled-components'

export const Header = styled.header`
  background-color: black;
  padding: 12px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
    display: block;
    text-align: center;
  }
`

export const Logo = styled.h1`
  display: flex;
  justify-content: center;

  a:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }

  img {
    height: 12vh;
    min-height: 40px;
    max-height: 60px;
  }
`
