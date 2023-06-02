import CardStyled from './styles/card';
import { CardProps } from './types';

const Card = ({
  children,
}: CardProps) => {
  return <CardStyled>{children}</CardStyled>;
};

export default Card;
