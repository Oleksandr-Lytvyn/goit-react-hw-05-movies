import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailsLinkBack = styled(Link)`
  display: inline-block;
  width: 125px;
  text-decoration: none;
  background-color: cadetblue;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const DetailsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  background-color: azure;
`;
export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DetailsImgBox = styled.div`
  display: flex;
  width: 150px;
`;
export const DetailsImg = styled.img`
  width: 100%;
  margin-right: 20px;
`;
export const DetailsNavLink = styled(Link)`
  & + & {
    margin-left: 20px;
  }
`;
export const DetalisNavigation = styled.div`
  margin-top: 10px;
`;
export const DetalisInfo = styled.div`
  padding: 15px;
`;
