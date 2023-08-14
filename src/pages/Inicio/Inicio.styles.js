import styled from "@emotion/styled";

export const MainContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #5c3e98, #4e329c);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: none;
  padding: 20px;
  background-color: #e2c124;
  font-weight: 900;
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 45%;
  background: linear-gradient(to bottom, #5c3e98, #4e329c);
  border-radius: 0 0 50% 50%;
  box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.3);
`;
