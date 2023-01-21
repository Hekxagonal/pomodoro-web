import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const mask = keyframes`
    0% {
        background: red;
        transform: rotate(0);
    }
    50% {
        background: #eee;
        transform: rotate(0.50turn);
    }
    100% {
        background: skyBlue;
        transform: rotate(1turn);
    }
`;

interface CircleProps {
  duration: number;
  size: number;
}

export const Circle = styled.div<CircleProps>`
  border: 1px solid red;
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleHandProps {
  duration: number;
}

export const CircleDots = styled.div``;

export const CircleHand = styled.div<CircleHandProps>``;

export const Svg = styled.svg`
  position: relative;
  width: 150px;
  height: 150px;

  circle {
    width: 100%;
    height: 100%;
    fill: transparent;
    stroke-width: 8;
    stroke: #282828;
    transform: translate(5px, 5px);
  }

  circle:nth-child(2) {
    stroke: red;
    stroke-dasharray: 440;
  }
`;

export const Text = styled.div`
  position: absolute;
  text-align: center;
  font-weight: 500;
  color: black;
  font-size: 1.5em;
`;
