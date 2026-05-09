import {ListItem, Name, Contentt} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {noteName, text} = details
  return (
    <ListItem>
      <Name>{noteName}</Name>
      <Contentt>{text}</Contentt>
    </ListItem>
  )
}

export default NoteItem
