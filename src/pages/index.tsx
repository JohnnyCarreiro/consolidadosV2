import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import Head from 'next/head'
import { Container } from '../styles/Home'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Head>
        <title>Template Next Tipescript</title>
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <section>
        <h1>Template using typescript and Sass</h1>
      </section>
    </Container>
  )
}
