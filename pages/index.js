import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Hello</h1>
      <p>Hello there… this is the about page</p>
      <Footer/>
    </div>
  )
}
