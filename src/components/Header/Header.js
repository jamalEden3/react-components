import styled from "styled-components";
import { Link } from 'react-router-dom';

function Header() {
    return (
      <Wrapper>
        <Link to='/form'>Form</Link>
      </Wrapper>
    );
  }

const Wrapper = styled.section`
h1{ color: var(--clr-accent-100);
  font-size: var(--fs-700)}
 
`
  export default Header;

