import styled from "styled-components";
import { FcSearch } from "react-icons/fc";
import { Link } from 'react-router-dom'



export const Div = styled.div`
    height: 80px;
    width: 100%;
    border-bottom: 1px solid black;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

export const ImageLogo = styled.img`
    max-width: 150px;
    min-width: 40px;
    height: 100%;
`

export const InputSerch = styled.div`
    height: 100%;
    max-width: 520px;
    width: 100%;
    min-width: 150px;
    display: flex;
    align-items: center;
    padding: 8px 12px;

    border: 1px solid black;
    border-radius: 30px;
    -webkit-box-shadow: -3px 10px 49px -1px rgba(0,0,0,0.21); 
    box-shadow: -3px 10px 49px -1px rgba(0,0,0,0.21);
    border-color: rgba(223,225,229,0);

    input {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 22px;
        &:focus {
            outline: none;
        }
        &::placeholder {
            font-size: 22px;
        }
        @media (max-width: 500px ) {
            font-size: 16Spx;
            &::placeholder {
            font-size: 16px;
        }
            
        }
    }
`

export const IconDelete = styled.p`
    font-size: 20px;
    cursor: pointer;
    width: 25px;
    font-weight: 500;
    text-align: center;
    @media (min-width: 500px ) {
        font-size: 30px;
        width: 60px;
    }
`


export const IconSearch = styled(FcSearch)`
    font-size: 20px;
    cursor: pointer;
    width: 30px;
    margin-right: 10px;
    border-left: 1px solid black;
    padding-left: 2px;
    @media (min-width: 500px ) {
        font-size: 30px;
        width: 60px;
    }
`


//////////////////////////////menu nav

export const ContainerNav = styled.div`
   height: 100vh;
    width: 100%;
    min-width: 320px;
    background-color: #5656ea;


    @media (min-width: 768px )  {
        height: 30px;
    }
`

export const Navigation = styled.nav`
    min-height: 30px;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px )  {
        flex-direction: row;
    }
`

export const ButtonLink = styled(Link)`
    color: white;
    padding: 2px  4px;
    margin: 0 15px;
    text-decoration: none;
`