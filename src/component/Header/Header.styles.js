import styled from "@emotion/styled";

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
  & > h1 {
    margin-top: -100px;
    color: #fff;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;

export const Image = styled.img`
  height: 300px;
  margin-top: 75px;
`;
