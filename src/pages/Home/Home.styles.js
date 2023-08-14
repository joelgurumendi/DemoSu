import styled from "@emotion/styled";

export const MainContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #5c3e98, #4e329c);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerHeader = styled.div`
  margin-top: -150px;
`;

export const Content = styled.div`
  margin-top: -75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > h3 {
    color: #fff;
    font-size: 1.5rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items:center;
  }
`;

export const ContainerVideos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 200px;
  background-color: #fff;
  border-radius: 20px;
`;
