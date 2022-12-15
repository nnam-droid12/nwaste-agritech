import styled from 'styled-components';

const DetailContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80%;
`;
const Header = styled.h1`
    margin: 0;
    color: #58828b;
    font-weight: 700;
    font-size: 45px;
    @media screen and (max-width: 768px) {
        font-weight: 500;
        font-size: 32px;
    }
    
`;
const SubHeader = styled.h3`
    margin: 10px 0;
    color: #58828b;
    font-weight: 700;
    font-size: 24px;
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`;
const Text = styled.p`
    color: #58828b;
    font-weight: 500;
    font-size: 20px;
`;

const FormGroup = styled.div`
    display: flex;
    height: 53px;
    position: relative;
    margin-top: 1em;
`;

const EmailInput = styled.input`
    border: none;
    outline: none;
    width: 300px;
    background-color: #fff;
    padding-left: 1.5em;
    border-radius: 17px;
    color: #000;
    font-size: 20px;
    height: 100%;
    padding-left: 1.5em;
    padding-right: 3em;

    &::placeholder{
        color: #272727;
    }
    @media screen and (max-width: 768px) {
        width: 220px;
        font-size: 14px;
    }
`;

const SubscribeButton = styled.button`
    position: absolute;
    right: 25%;
    height: 100%;
    font-weight: 500;
    color: #fff;
    background-color: #262fec;
    font-size: 20px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    padding: 0 8px;
    &:hover {
        background-color: #1820bb;
    }

    @media screen and (max-width: 768px) {
        right: -24%;
        font-size: 15px
    }
`;

export function Detail(props) {
    return <DetailContainer>
        <InnerContainer>
            <Header>Don't go yet!...</Header>
            <SubHeader>Subscribe to our newsletter!</SubHeader>
                <Text>
                Join our newsletter to get latest and greatest agricultural updates and best practices. Our newsletter is once a week, every wednesday
                </Text>
            <FormGroup>
                <EmailInput 
                type='text' placeholder='you@gmail.com' />
                <SubscribeButton>Subscribe</SubscribeButton>
            </FormGroup>
        </InnerContainer>
    </DetailContainer>
}