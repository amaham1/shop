import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import CompanyDetail from './Components/CompanyDetail.js'
import Main from './Components/Main.js'
import CompanyList from './Components/CompanyList';
import CompanyAdd from './Components/CompanyAdd';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand as={ Link } to="/">귤딸쿠광</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={ Link } to="/">Home</Nav.Link>
          <Nav.Link as={ Link } to="/companyList">업체 목록</Nav.Link>
          <Nav.Link as={ Link } to="/companyAdd">업체 등록</Nav.Link>
          <Nav.Link as={ Link } to="/helper">고객센터</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <h4>귤딸쿠광</h4>

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/detail/:companyNameNum_id" element={<CompanyDetail/>}/>
        <Route path="/companyList" element={<CompanyList/>}/>
        <Route path="/companyAdd" element={<CompanyAdd/>}/>
      </Routes>
    </div>
  );
}

export default App;
