import React from 'react'
import * as S from './styled'

const Profile = () => {
    return (
        <S.Wrapper>

            <S.WrapperImage src="https://avatars.githubusercontent.com/u/47546460?v=4" alt="Avatar of user"
            />
            <S.WrapperInfoUser>
                <div>
                    <h1>Negildo passos</h1>
                    <S.WrapperUsername>
                        <h3> Username:  </h3>
                        <span> negildopassos </span>
                    </S.WrapperUsername>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followes</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Repositories</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>

        </S.Wrapper>
    )
}

export default Profile