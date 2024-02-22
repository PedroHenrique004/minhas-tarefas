import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { Botao, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  function voltarParaHome() {
    navigate('/')
  }

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                legenda="pendentes"
                criterio="status"
                valor={enums.Status.PENDENTE}
              />
              <FiltroCard
                legenda="concluidas"
                criterio="status"
                valor={enums.Status.CONCLUIDA}
              />
              <FiltroCard
                legenda="urgentes"
                criterio="prioridade"
                valor={enums.Prioridade.URGENTE}
              />
              <FiltroCard
                legenda="importante"
                criterio="prioridade"
                valor={enums.Prioridade.IMPORTANTE}
              />
              <FiltroCard
                legenda="normal"
                criterio="prioridade"
                valor={enums.Prioridade.NORMAL}
              />
              <FiltroCard legenda="todas" criterio="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={voltarParaHome} type="button">
            Voltar a lista de tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
