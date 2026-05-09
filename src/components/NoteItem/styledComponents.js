import styled from 'styled-components'

export const ListItem = styled.li`
  display:flex;
  flex-direction:column;
  border:1px solid;
  border-radius:9px;
  padding:10px;
  width:100%;
  margin-bottom:20px;
  @media(min-width:768px){
    width:30%;
    margin-right:20px;
  }
`
export const Name = styled.h1`
  font-size:22px;
  color:#334155;
`

export const Contentt = styled.p`
  font-size:18px;
  color:#475569;
`
