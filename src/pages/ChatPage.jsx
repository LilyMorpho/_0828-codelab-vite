import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { ButtonWrapper, Button } from "../components/common/Button"

const style = css({
  padding: "2em 0",
})

export default function ChatPage() {
  return (
    <div css={style}>
      <ButtonWrapper direction="flex-end">
        <Button marginRight="0.5em">채팅방 참여</Button>
        <Button>채팅방 나가기</Button>
      </ButtonWrapper>
    </div>
  )
}
