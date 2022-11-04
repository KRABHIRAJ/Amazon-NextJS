import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import ProductComp from '../components/ProductComp'
import styles from '../styles/Home.module.css'

export default function Home({products}) {
  return (
    <div className="bg-[#EAEDED]">
        <Navbar />   
        <div className='max-w-screen-xl mx-auto '>
          <Banner />   
          <ProductComp products={products} />
        </div>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const products = await fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json());
  // const products = await res.json()
  // Pass data to the page via props
  return { props: { products } }
}
