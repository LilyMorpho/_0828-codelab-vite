import styled from "@emotion/styled"

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 0.5em 0;
  justify-content: ${(props) => props.direction || "flex-start"};
`

export const Button = styled.button`
  padding: 0.5em 0.875em;
  border-color: ${(props) => props.borderColor || "#333"};
  margin-left: ${(props) => props.marginLeft || 0};
  margin-right: ${(props) => props.marginRight || 0};
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
`
