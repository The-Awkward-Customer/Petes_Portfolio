import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

export const Icon = () => {
  return (
    <Wrapper>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 7V0H9V7H16V9H9V16H7V9H0V7H7Z"
          fill="#262626"
        />
      </svg>
    </Wrapper>
  );
};
