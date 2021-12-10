import Navbar from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import Head from 'next/head'
import { Container } from '../styles/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Template Next Tipescript</title>
      </Head>
      <Sidebar isOpen={false} />
      <Navbar/>
      <section>
        <h1>Template using typescript and Sass</h1>
      </section>
    </Container>
  )
}
