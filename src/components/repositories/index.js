import React from 'react'
import RepositoryItem from '../repository-item'
import * as S from "./styled"

function Repositories() {
    return (
        <S.WrapperTabs
            selectedTabClassName='is-selected'
            selectedTabPanelClassName='is-selected'
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem  name= "atividades_Em_JavaScript" linkToRepo = "https://github.com/negildopassos/atividades_Em_JavaScript" fullName = "negildopassos/atividades_Em_JavaScript"/>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem name= "Calculadora-em-React" linkToRepo = "https://github.com/negildopassos/Calculadora-em-React" fullName = "negildopassos/Calculadora-em-React" />
            </S.WrapperTabPanel>

        </S.WrapperTabs>
    )
}

export default Repositories