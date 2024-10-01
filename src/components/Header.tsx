"use client"
import React from 'react'
import {useTranslations} from 'next-intl';

const Header = () => {
    const t = useTranslations('Header');
  return (
    <div>{t("text")}</div>
  )
}

export default Header