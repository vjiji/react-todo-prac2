import { useSelector } from "react-redux";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Layout = () => {
  const test = useSelector((state) => state);
  console.log(test);
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
