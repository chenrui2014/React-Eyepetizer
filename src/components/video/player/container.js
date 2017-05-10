import styled from 'styled-components'
export default styled.div`
  background: #000;
  height: 258px;
  overflow: hidden;
  position: relative;
  width: 100%;
  @media(min-width: 700px) {
    height: calc(700px / 16 * 9);
  }
`