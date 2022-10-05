import styled from "@emotion/styled";

export const Container = styled.div`
  border: 2px solid rgb(75, 70, 74);
  border-radius: 0.5em;
  padding: 20px;
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

// NOTE: Container要素の直下にある(子要素である)全称セレクタにスタイルが適用される;
export const Wrapper = styled.div`
  & ${Container} > * {
    padding: 10px;
    border: 2px solid rgb(95, 97, 110);
    border-radius: 0.5em;
    margin: 0;
  }
`;
