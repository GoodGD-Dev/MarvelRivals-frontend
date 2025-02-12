import styled from 'styled-components'
import Background from '../../assets/images/bg_heroes.jpg'

export const BGHeroes = styled.div`
  padding: 3vh 5.4vw;
  min-height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  display: flex;
  justify-content: space-around;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const HeroContainer = styled.div`
  display: block;
  position: relative;

  @media (max-width: 768px) {
    position: static;
  }
`

export const HeroProfile = styled.div`
  height: 90vh;
  position: absolute;
  left: -15vw;
  img {
    height: 100%;
  }

  @media (max-width: 1630px) {
    position: static;
    height: 45vh;
  }

  @media (max-width: 500px) {
    margin-bottom: 5vh;
  }
`

export const HeroesCounters = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1630px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const HeroesCountersItem = styled.li`
  img {
    height: 100%;
    &:hover {
      filter: grayscale(2);
      cursor: pointer;
    }
  }
`
export const HeroesSpan = styled.span`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  padding: 12px;
`
