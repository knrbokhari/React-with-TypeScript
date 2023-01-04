import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Note = () => {
  const navigate = useNavigate()
  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
        <h1>title</h1>
        </Col>
      </Row>
    </>
  )
}

export default Note