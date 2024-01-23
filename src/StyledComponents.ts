import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width: larguraDaTela, height: alturaDaTela} = Dimensions.get('window');

export const BotaoFull = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  color: white;
  height: 40px;
  background-color: #232935;
`;

export const Container = styled.View`
  padding: 15px;
  width: ${larguraDaTela};
`;

export const FlexCenter = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexCenterFull = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${larguraDaTela - 20}px;
`;

export const FlexView = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: white;
  font-size: 18px;
  margin: 5px 0px;
  height: 40px;
  width: 100%;
  padding: 8px;
  padding-left: 10px;
  border-radius: 6px;
  border: 1px solid #dedede;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const TextH1 = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const TextH2 = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TextError = styled.Text`
  font-size: 12px;
  color: red;
  font-style: italic;
`;
