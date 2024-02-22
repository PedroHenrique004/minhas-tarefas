import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;

  @media (max-width: 768px) {
    max-width: 120px;
    width: 100%;
  }
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
