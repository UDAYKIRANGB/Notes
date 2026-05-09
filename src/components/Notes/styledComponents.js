import styled from 'styled-components'

export const BgContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  min-height:100vh;
  padding:40px;
  background-color:#f1f5f9;
`

export const Heading = styled.h1`
  font-size:32px;
  color: #4c63b6;
  font-family:'Bree Serif';
`

export const InputContainer = styled.form`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding:20px 30px;
  width:100%;
  box-shadow: 0px, 4px, 16px, rgba(0, 0, 0, 0.15);
  border-radius:10px;
  background-color:#ffffff;
`

export const InputElement = styled.input`
  border:none;
  height:30px;
  outline:none
`

export const TextBox = styled.textarea`
  border:none;
  outline:none;
  width:100%;
`

export const Button = styled.button`
  background-color:#4c63b6;
  width:70px;
  height:40px;
  color:#ffffff;
  align-self:flex-end;
  border:none;
`
export const NoListContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export const ImageElement = styled.img`
  width:50%;
  margin-bottom:0px;
  padding-bottom:0px;
`
export const NoNoteHeading = styled.h1`
  font-size:22px;
  color: #334155;
  margin-top:0px;
`
export const NoPara = styled(NoNoteHeading)`
 font-size:18px;
`

export const ListContainer = styled.ul`
 display:flex;
 flex-wrap:wrap;
 list-style-type:none;
 padding-left:0px;
 width:100%;
`
