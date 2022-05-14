import React from "react"
import * as S from "./styled"

const  Layout = ({children}) => {
  return (
    <S.WrapperLayout>
        <header>
           teste
        </header>
        {children}
    </S.WrapperLayout>
  )
}

export default Layout 