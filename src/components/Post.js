import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Post() {
return (
<Container>
    <Row>
        <Col lg={8}>
        <Card className="mb-4">
            <Card.Img variant="top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." />
            <Card.Body>
                <small className="text-muted">January 1, 2023</small>
                <Card.Title>Featured Post Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                    laboriosam. Dicta expedita corporis animi vero voluptate
                    voluptatibus possimus, veniam magni quis!
                </Card.Text>
                <a className="btn btn-primary" href="#!">
                    Read more →
                </a>
            </Card.Body>
        </Card>
        </Col>
        <Col lg={4}>
        <Card className="d-none d-lg-block  mb-4">
            <Card.Header className="d-flex justify-content-start">Search</Card.Header>
            <Card.Body>
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Enter search term..."
                        aria-label="Enter search term..." aria-describedby="button-search" />
                    <button className="btn btn-primary" id="button-search" type="button">
                        Go!
                    </button>
                </div>
            </Card.Body>
        </Card>
        <Card className="d-none d-lg-block  mb-4">
            <Card.Header className="d-flex justify-content-start">Categories</Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col-8">
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!">Web Design</a></li>
                            <li><a href="#!">HTML</a></li>
                            <li><a href="#!">Freebies</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-8">
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!">JavaScript</a></li>
                            <li><a href="#!">CSS</a></li>
                            <li><a href="#!">Tutorials</a></li>
                        </ul>
                    </div>
                </div>
            </Card.Body>
        </Card>
        <Card className="d-none d-lg-block  mb-4">
            <Card.Header className="d-flex justify-content-start">Side Widget</Card.Header>
            <Card.Body>
                <p>You can put anything you want inside of these side widgets. They are easy to use, and feature the
                    Bootstrap 5 card component!
                </p>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    <Row>
        <Col lg={4}>
        <Card className="mb-4">
            <Card.Img variant="top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." />
            <Card.Body>
                <small className="text-muted">January 1, 2023</small>
                <Card.Title>Post Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                </Card.Text>
                <a className="btn btn-primary" href="#!">
                    Read more →
                </a>
            </Card.Body>
        </Card>
        </Col>
        <Col lg={4}>
        <Card className="mb-4">
            <Card.Img variant="top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." />
            <Card.Body>
                <small className="text-muted">January 1, 2023</small>
                <Card.Title>Post Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                </Card.Text>
                <a className="btn btn-primary" href="#!">
                    Read more →
                </a>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    <Row>
        <Col lg={4}>
        <Card className="mb-4">
            <Card.Img variant="top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." />
            <Card.Body>
                <small className="text-muted">January 1, 2023</small>
                <Card.Title>Post Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                </Card.Text>
                <a className="btn btn-primary" href="#!">
                    Read more →
                </a>
            </Card.Body>
        </Card>
        </Col>
        <Col lg={4}>
        <Card className="mb-4">
            <Card.Img variant="top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." />
            <Card.Body>
                <small className="text-muted">January 1, 2023</small>
                <Card.Title>Post Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                </Card.Text>
                <a className="btn btn-primary" href="#!">
                    Read more →
                </a>
            </Card.Body>
        </Card>
        </Col>
    </Row>
   
    <Row>
        <Col>
        <nav aria-label="Pagination">
            <hr class="my-0" />
            <ul class="pagination justify-content-center my-4">
                <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1"
                        aria-disabled="true">Newer</a></li>
                <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                <li class="page-item"><a class="page-link" href="#!">2</a></li>
                <li class="page-item"><a class="page-link" href="#!">3</a></li>
                <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
                <li class="page-item"><a class="page-link" href="#!">15</a></li>
                <li class="page-item"><a class="page-link" href="#!">Older</a></li>
            </ul>
        </nav>
        </Col>
    </Row>

    <Row>
        <Col md={12} sx={12}>
        <Card className="d-lg-none d-md-block mb-4">
            <Card.Header className="d-flex justify-content-start">Search</Card.Header>
            <Card.Body>
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Enter search term..."
                        aria-label="Enter search term..." aria-describedby="button-search" />
                    <button className="btn btn-primary" id="button-search" type="button">
                        Go!
                    </button>
                </div>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    <Row>
        <Col md={12} sx={12}>
        <Card className="d-lg-none d-md-block mb-4">
            <Card.Header className="d-flex justify-content-start">Categories</Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col-4">
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!">Web Design</a></li>
                            <li><a href="#!">HTML</a></li>
                            <li><a href="#!">Freebies</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-8">
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!">JavaScript</a></li>
                            <li><a href="#!">CSS</a></li>
                            <li><a href="#!">Tutorials</a></li>
                        </ul>
                    </div>
                </div>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    <Row>
        <Col md={12} sx={12}>
        <Card className="d-lg-none d-md-block mb-4">
            <Card.Header className="d-flex justify-content-start">Side Widget</Card.Header>
            <Card.Body>
                <p>You can put anything you want inside of these side widgets. They are easy to use, and feature the
                    Bootstrap 5 card component!
                </p>
            </Card.Body>
        </Card>
        </Col>
    </Row>

</Container>
);
}

export default Post;
