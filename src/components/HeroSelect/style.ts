import styled from 'styled-components'
import Background from '../../assets/images/bgmarvelrivals.jpg'

export const BGMarvel = styled.div`
  padding: 3vh 5.4vw;
  min-height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`

export const BGText = styled.h2`
  margin-bottom: 3rem;
  img {
    width: 100%;
    min-width: 300px;
  }
`

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  text-align: center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
`

export const GridItem = styled.li`
  img {
    &:hover {
      filter: grayscale(2);
      cursor: pointer;
    }

    @media (max-width: 600px) {
      height: 280px;
    }
  }
`
