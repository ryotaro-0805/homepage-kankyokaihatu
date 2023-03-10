import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'
import about_pic from '../../public/img/about.jpg'
import Image from 'next/image'

export default function about() {
    return (
        <>
            <Head>
                <title>about</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={`contentsMain ${styles.about_container}`}>
                <main>
                    <div className={styles.about_container}>
                        <div>
                            <h2 className={`${styles.about_h2} animate__animated animate__fadeInDown`}>私たちが創造するのは</h2>
                            <h2 className={`${styles.about_h2} animate__animated animate__fadeInDown`}>未来です</h2>
                        </div>
                        <div className={styles.example_wrapper}>
                            <div className={styles.example}>example-1</div>
                            <div className={styles.example}>example-2</div>
                            <div className={styles.example}>example-3</div>
                        </div>
                    </div>
                    <Image className={styles.about_image_pic} src={about_pic} alt='about-pic' />
                </main>
            </div>
                <Footer />
        </>
    )
}
