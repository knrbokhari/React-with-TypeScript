import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Navigate, Route, Routes } from 'react-router-dom'
import NewNote from './components/NewNote'
import Note from './components/Note'
import NoteList from './components/NoteList'
import EditNote from './components/EditNote'
import NoteLayout from './components/NoteLayout'


export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}


function App () {
  return (
    <Container>
      <Routes>
          <Route path='/' element={<NoteList/>}/>
          <Route path='/new' element={<NewNote/>}/>
          <Route path="/:id" element={<NoteLayout />}>
          <Route index element={<Note />} />
          <Route
            path="edit"
            element={
              <EditNote />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
