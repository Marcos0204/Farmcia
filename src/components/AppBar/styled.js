import styled from "styled-components";
import { FcSearch } from "react-icons/fc";

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
    }
`

export const IconSearch = styled(FcSearch)`
    font-size: 24px
`
