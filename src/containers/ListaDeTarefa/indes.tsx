import Tarefa from '../../components/Tarfefa'
import { MainContainer, Titulo } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { List } from './styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo != undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltrage = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo != undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      const mensagem = `${quantidade} tarefas(s) encontrada(s) como: todas ${complementacao}
      }`
    } else {
      mensagem = `${quantidade} tarefas(s) encontrada(s) como: "${`${criterio} = ${valor}`}" ${complementacao} `
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltrage(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <List key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </List>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ListaDeTarefas
