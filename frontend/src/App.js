import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import DropRateCalc from './components/DropRateCalc'
import HomeScreen from './screens/HomeScreen'
import Youtube from './components/Youtube'
import Course from './components/Course'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/home' component={HomeScreen} />
          <Route path='/dropcalc' component={DropRateCalc} />
          <Route path='/youtubes' component={Youtube} />
          <Route path='/courses' component={Course} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
