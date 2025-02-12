import * as S from './style'
import Adam from '../../assets/images/adamwarlock.png'
import Jeff from '../../assets/images/jeff.png'

const Heroes = () => {
  return (
    <>
      <S.BGHeroes>
        <S.HeroContainer>
          <S.HeroProfile>
            <img src={Adam} />
          </S.HeroProfile>
        </S.HeroContainer>
        <S.HeroContainer>
          <S.HeroesSpan>Counters</S.HeroesSpan>
          <S.HeroesCounters>
            {Array.from({ length: 3 }).map((_, index) => (
              <S.HeroesCountersItem key={index}>
                <img src={Jeff} alt={`Imagem ${index + 1}`} />
              </S.HeroesCountersItem>
            ))}
          </S.HeroesCounters>
        </S.HeroContainer>
        <S.HeroContainer>
          <S.HeroesSpan>Allies</S.HeroesSpan>
          <S.HeroesCounters>
            {Array.from({ length: 3 }).map((_, index) => (
              <S.HeroesCountersItem key={index}>
                <img src={Jeff} alt={`Imagem ${index + 1}`} />
              </S.HeroesCountersItem>
            ))}
          </S.HeroesCounters>
        </S.HeroContainer>
      </S.BGHeroes>
    </>
  )
}

export default Heroes
