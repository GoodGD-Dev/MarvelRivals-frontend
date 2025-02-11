import * as S from './style'
import logo from '../../assets/images/marvelrivalslogo.png'
import SearchBar from '../Searchbar'

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <a>
          <img src={logo}></img>
        </a>
      </S.Logo>
      <SearchBar onSearch={(query) => console.log(query)} />
    </S.Header>
  )
}

export default Header
