import React from 'react';
import * as S from './styles';

interface clockProps {
  currentTime?: number;
}

export const Clock = ({ currentTime }: clockProps) => {
  return (
    <S.Container>
      <S.Circle duration={3} size={500}>
        <S.CircleDots />
        <S.CircleHand duration={500} />
        <S.Svg>
          <circle cx="70" cy="70" r="70" />
          <circle cx="70" cy="70" r="70" id="hh" />
        </S.Svg>
        <S.Text>00</S.Text>
      </S.Circle>
    </S.Container>
  );
};
