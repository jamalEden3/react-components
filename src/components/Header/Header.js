import styled from "styled-components";

function Header() {
    return (
      <Wrapper>
        <h1>header</h1>
      </Wrapper>
    );
  }

const Wrapper = styled.section`
h1{ color: var(--clr-accent-100);
  font-size: var(--fs-700)}
 
`
  export default Header;