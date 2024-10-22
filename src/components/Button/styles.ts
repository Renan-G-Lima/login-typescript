import styled from "styled-components";

export const ButtonContainer = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 42px;
  background-color: ${({ disabled }) => (disabled ? "#cccc" : "#81259D")};
  color: #fffeef;

  border: 1px solid ${({ disabled }) => (disabled ? "#cccc" : "#81259D")};
  border-radius: 21px;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.6)};
  }
`;
