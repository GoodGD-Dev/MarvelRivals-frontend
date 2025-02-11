import * as S from './style'
import example from '../../assets/images/test.png'
import Text from '../../assets/images/heroesselect.png'

const HeroSelect = () => {
  return (
    <S.BGMarvel>
      <S.BGText>
        <img src={Text} alt="" />
      </S.BGText>
      <S.Grid>
        {Array.from({ length: 14 }).map((_, index) => (
          <S.GridItem key={index}>
            <img src={example} alt={`Imagem ${index + 1}`} />
          </S.GridItem>
        ))}
      </S.Grid>
    </S.BGMarvel>
  )
}

export default HeroSelect
