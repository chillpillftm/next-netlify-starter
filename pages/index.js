import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

const containerStyles = {
  backgroundImage: `url(/matrix.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  height: '100vh'
}

const headerStyles = {
  color: 'white',
  fontSize: '30px',
  background: 'black'
}

export default function Home() {
  return (
    <div className="container" style={containerStyles}>
    {/* <div className="container" > */}
      <Head>
        <title>Chill Pill</title>
        <link rel="icon" href="/pixel_heart.ico" />
      </Head>

      <main>
        <Header title="In life, it's important to take 'Chill Pills' once in a while! " style={headerStyles}/>
        <Image src="/blue_pill.png" alt="Chill Pill" width={300} height={500} />
        <p className="description" style={headerStyles}>
          Get $CHILL at beets.fi
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
