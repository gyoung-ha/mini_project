import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({children}) => {
    return <>
        <StLayout>
            {children}
        </StLayout>
    </>
}

export default Layout;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  background-color: white;
  height: 100vw;
`;