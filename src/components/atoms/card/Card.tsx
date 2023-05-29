import CardStyled from './styles/card';
import { CardProps } from './types';

const Card = ({
   content,
}: CardProps) => {
  return <CardStyled>{content}</CardStyled>;
};

export default Card;
