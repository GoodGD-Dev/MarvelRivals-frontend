import { useEffect, useState } from 'react'
import * as S from './style'
import Text from '../../assets/images/heroesselect.png'
import api from '../../context/api'

interface Hero {
  id: string
  name: string
  perfil: string
  counter: string
}

interface APIResponse {
  count: number
  next: string | null
  previous: string | null
  results: Hero[]
}

const HeroSelect = () => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadHeroes() {
      try {
        const response = await api.get<APIResponse>('/')
        console.log('Dados recebidos da API:', response.data)
        setHeroes(response.data.results)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar heróis:', error)
        setError('Erro ao carregar heróis')
        setLoading(false)
      }
    }

    loadHeroes()
  }, [])

  if (loading) {
    return <div>Carregando heróis...</div>
  }

  if (error) {
    return <div>Erro: {error}</div>
  }

  return (
    <S.BGMarvel>
      <S.BGText>
        <img src={Text} alt="" />
      </S.BGText>
      <S.Grid>
        {heroes.length === 0 ? (
          <div>Nenhum herói encontrado</div>
        ) : (
          [...heroes]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((hero) => (
              <S.GridItem key={hero.id}>
                <img src={hero.perfil} alt={hero.name} />
              </S.GridItem>
            ))
        )}
      </S.Grid>
    </S.BGMarvel>
  )
}

export default HeroSelect
