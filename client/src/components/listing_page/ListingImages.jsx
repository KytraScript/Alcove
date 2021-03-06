import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ListingModal from './ListingModal.jsx';
import './Listing.css';

import dummyData from "./dummyData.js";

const ListingImages = props => {
  // Some elements require both inline styling and the stylesheet due to border positioning.

  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleIndex = (e, i) => {
    if (i === 'show') {
      handleShow();
    }
    setIndex(e);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let images = props.images || dummyData.test.data.thumbs;

  let image1 = images[0];
  let image2 = images[1];
  let image3 = images[2];
  let image4 = images[3];
  let image5 = images[4];

  if (images.length === 0) {
    return (
      <Container>
        <Row>
          <Col>
            <div className="imageSpacerLeft"></div>
          </Col>
          <Col md={6} className="listingPictureContainer">
            <img src="../../assets/alcove-footer.jpg" className="listingPicture" onClick={() => { handleIndex(0, 'show') }} />
          </Col>
          <Col>
            <div className="imageSpacerRight"></div>
          </Col>
        </Row>
        <ListingModal
          handleIndex={handleIndex}
          index={index}
          images={images}
          show={show}
          handleClose={handleClose}
        />
      </Container>
    );
  }

  if (images.length === 1) {
    return (
      <Container>
        <Row>
          <Col>
            <div className="imageSpacerLeft"></div>
          </Col>
          <Col md={6} className="listingPictureContainer">
            <img src={image1} className="listingPicture" onClick={() => { handleIndex(0, 'show') }} />
          </Col>
          <Col>
            <div className="imageSpacerRight"></div>
          </Col>
        </Row>
        <ListingModal
          handleIndex={handleIndex}
          index={index}
          images={images}
          show={show}
          handleClose={handleClose}
        />
      </Container>
    );
  }

  if (images.length === 2) {
    return (
      <Container>
        <Row>
          <Col className="listingPictureContainer"
            style={{
              borderRight: "1px solid #353b40"
            }}>
            <img src={images[0]} className="listingPicture" onClick={() => { handleIndex(0, 'show') }} />
          </Col>
          <Col className="listingPictureContainer">
            <img src={images[1]} className="listingPicture" onClick={() => { handleIndex(1, 'show') }} />
          </Col>
        </Row>
        <ListingModal
          handleIndex={handleIndex}
          index={index}
          images={images}
          show={show}
          handleClose={handleClose}
        />
      </Container>
    );
  }

  if (images.length === 3 || images.length === 4) {
    return (
      <Container>
        <Row>
          <Col
            className="listingPictureContainer"
            style={{
              borderRight: "1px solid #353b40"
            }}
          >
            <img src={image1} className="listingPicture" onClick={() => { handleIndex(0, 'show') }} />
          </Col>
          <Col className="listingPictureContainer">
            <img src={image2} className="listingPicture" onClick={() => { handleIndex(1, 'show') }} />
          </Col>
          <Col
            className="listingPictureContainer"
            style={{
              borderLeft: "1px solid #353b40"
            }}
          >
            <img src={image3} className="listingPicture" onClick={() => { handleIndex(2, 'show') }} />

            <Button onClick={handleShow} id="listingModalButton" className="img-overlay">
              Launch the super cool modal!
            </Button>
          </Col>
        </Row>
        <ListingModal
          handleIndex={handleIndex}
          index={index}
          images={images}
          show={show}
          handleClose={handleClose}
        />
      </Container>
    );
  }

  if (images.length >= 5) {
    return (
      <Container>
        <Row>
          <Col
            md={6}
            className="listingPictureContainer"
            style={{
              borderRight: "1px solid #353b40",
              height: "300px"
            }}
          >
            <img src={image1} className="listingPicture" onClick={() => { handleIndex(0, 'show') }} />

          </Col>
          <Col md={6}>
            <Row style={{ marginTop: 0 }}>
              <Col
                md={6}
                className="listingPictureContainer"
                style={{
                  borderRight: "1px solid #353b40",
                  height: "150px"
                }}
              >
                <img src={image2} className="listingPicture" onClick={() => { handleIndex(1, 'show') }} />

              </Col>
              <Col md={6}
                md={6}
                className="listingPictureContainer"
                style={{
                  height: "150px"
                }}
              >
                <img src={image3} className="listingPicture" onClick={() => { handleIndex(2, 'show') }} />

              </Col>
            </Row>
            <Row style={{ marginTop: 0 }}>
              <Col md={6}
                md={6}
                className="listingPictureContainer"
                style={{
                  borderRight: "1px solid #353b40",
                  height: "150px"
                }}
              >
                <img src={image4} className="listingPicture" onClick={() => { handleIndex(3, 'show') }} />

              </Col>
              <Col
                md={6}
                className="listingPictureContainer"
                style={{
                  height: "150px"
                }}
              >
                <img src={image5} className="listingPicture" onClick={() => { handleIndex(4, 'show') }} />
                <Button onClick={handleShow} id="listingModalButton">
                  Launch the super cool modal!
                </Button>
                <ListingModal
                  handleIndex={handleIndex}
                  index={index}
                  images={images}
                  show={show}
                  handleClose={handleClose}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div>
      <Button onClick={handleShow}>Launch the super cool modal!</Button>
      <ListingModal images={images} show={show} handleClose={handleClose} />
    </div>
  );
};

export default ListingImages;
