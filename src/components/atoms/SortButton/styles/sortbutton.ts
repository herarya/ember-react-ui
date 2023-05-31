import styled from 'styled-components';
import SortDownIcon from './../images/Sorting_Down.png';
import SortUpIcon from './../images/Sorting_Up.png';
import SortNeturalIcon from './../images/Sorting_Netural.png';

export const SortButtonStyled = styled.button`
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  background-color : transparent;
  background-size: 10px 18px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${SortNeturalIcon});
  border-radius: 50%;
  
  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    background-opa
  }
`;

export const SortButtonUpStyled = styled(SortButtonStyled)`
  background-image: url(${SortUpIcon});
`;

export const SortButtonDownStyled = styled(SortButtonStyled)`
  background-image: url(${SortDownIcon});
`;
