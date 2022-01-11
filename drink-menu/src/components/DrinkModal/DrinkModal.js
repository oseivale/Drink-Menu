import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DrinkModal = ({ show, handleClose, embedId='oOHH0GGglyM', vidSrc}) => {

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
        >
          <Modal.Header closeButton>
              <Modal.Title> Watch how-to video!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="300"
              src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
              // src={`${vidSrc}?autoplay=1`}
              // src="https://www.youtube.com/embed/oOHH0GGglyM?autoplay=1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              controls={0}
              autoplay
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    )
}

export default DrinkModal