import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import texts from '../texts.json';

const INTERNAL_REDIRECTS = {
  '/art': '/art',
  '/writerscorner': '/writerscorner',
};

function getHref(link) {
  if (!link.startsWith('/')) {
    return link;
  }

  const normalizedLink = link.toLowerCase();
  return INTERNAL_REDIRECTS[normalizedLink] ?? normalizedLink;
}

function renderHome() {
  return (
    <Nav.Item>
      <Button
        className='homebutton'
        href='/'
        target={undefined}
        rel={undefined}
        variant="primary"
        >
        Home
        </Button>
    </Nav.Item>
  )
}

function renderNavLinks(links) {

  return links.map(({ title, link, tab }) => (
    <Nav.Item key={`${title}-${link}`}>
      <Button
        className='navbutton'
        href={getHref(link)}
        target={tab ? '_blank' : undefined}
        rel={tab ? 'noreferrer noopener' : undefined}
        variant="primary"
      >
        {title}
      </Button>
    </Nav.Item>
  ));
}

function NavBar() {
  return (
    <>
    <Nav className='homebar'>
      {renderHome()}
    </Nav>
      <Nav className="navbar">{renderNavLinks(texts.navigation)}
      </Nav>
    </>
  );
}

export default NavBar;