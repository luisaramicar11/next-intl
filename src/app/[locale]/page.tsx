import React from 'react'
import {useTranslations} from 'next-intl';
import Header from "../../components/Header"
const Home = () => {
  const t = useTranslations('Index');
  return (
    <div className='min-h-screen flex items-center justify-center flex-col'>
      <Header/>
      <h1>{t("title")}</h1>
    </div>
  )
}

export default Home