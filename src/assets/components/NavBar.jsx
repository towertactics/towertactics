import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import texts from '../texts.json';

function renderNavLinks(links) {
  return links.map(({ title, link }) => (
    <Nav.Item key={link}>
      <Button className='navbutton' href={link} variant="primary">{title}</Button>
    </Nav.Item>
  ));
}

function NavBar() {
  return (
    <>
      <Nav className="navbar">
        {renderNavLinks(texts.navigation)}
      </Nav>
    </>
  );
}

export default NavBar;