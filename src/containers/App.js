import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'
import Card from '../components/card'
//import Car from '../components/car'


const App = ({ children }) => (
    <>
        <Header />
        <Container>
            {children}  
            <Card /> 
                    
        </Container>
        <Footer />
    </>
)

export default App