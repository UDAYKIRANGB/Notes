import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  BgContainer,
  Heading,
  InputContainer,
  InputElement,
  TextBox,
  Button,
  NoListContainer,
  ImageElement,
  NoNoteHeading,
  NoPara,
  ListContainer,
} from './styledComponents'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [noteName, setNoteName] = useState('')
  const [text, setText] = useState('')
  const [notes, setNotes] = useState([])

  const onChangeName = event => setNoteName(event.target.value)
  const onChangeText = event => setText(event.target.value)

  const onSubmitFrom = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      noteName,
      text,
    }
    setNotes(prev => [...prev, newNote])
    setNoteName('')
    setText('')
  }

  return (
    <BgContainer>
      <Heading>Notes</Heading>
      <InputContainer onSubmit={onSubmitFrom}>
        <InputElement type="text" placeholder="Title" onChange={onChangeName} value={noteName} />
        <TextBox
          rows="6"
          placeholder="Take a Note..."
          onChange={onChangeText}
          value={text}
        />
        <Button>Add</Button>
      </InputContainer>
      {notes.length === 0 ? (
        <NoListContainer>
          <ImageElement
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNoteHeading>No Notes Yet</NoNoteHeading>
          <NoPara as="p">Notes you add will appear here</NoPara>
        </NoListContainer>
      ) : (
        <ListContainer>
          {notes.map(each => (
            <NoteItem details={each} key={each.id} />
          ))}
        </ListContainer>
      )}
    </BgContainer>
  )
}

export default Notes
