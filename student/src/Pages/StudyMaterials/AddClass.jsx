import React, { useState } from 'react';
import List from '../../components/List';
import openBookImg from '../../assets/openBook.png';
import { HiChevronRight } from 'react-icons/hi';
import View from '../../components/View';
import { Image } from '../../components/Image';
import HeaderComponent from '../../components/HeaderComponent';
import addclass from '../../assets/ADDCLASS.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Class
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" placeholder='class' style={{border:"1px solid black"}} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{ backgroundColor: '#DBDC31' }}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}



function AddClass() {
  const navigate = useNavigate();

  const [modalShow, setModalShow] = React.useState(false);

  // Define an array for the class names
  const classNames = ['Class-1st', 'Class-2nd', 'Class-3rd', 'Class-4th'];

  return (
    <>
      <HeaderComponent page="Add study Material" title="Books" />
      <View>
        <View style={{ margin: '1rem', border: '1px solid black' }}>
          <View onClick={() => setModalShow(true)} style={{ borderBottom: '1px solid black', padding: '1rem', display: 'flex', alignItems: 'center' }}>
            <Image src={addclass} href="/" alt="Add Class" style={{ width: '30px', marginRight: '1rem' }} />
            ADD CLASS
          </View>
          <View style={{ padding: '1rem', display: 'grid', gap: '1rem' }}>
            {/* Map through the classNames array to generate each List */}
            {classNames.map((className, index) => (
              <List 
                key={index} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', // Centers the content horizontally
                  padding: '1rem' 
                }}
              >
                <Image src={openBookImg} alt="open book" style={{width:'80%'}} />
                <span>{className}</span> {/* Centers the text */}
                <HiChevronRight style={{ height: '24px', width: '24px' }} onClick={()=>navigate('/BooksAndVideos')} />
              </List>
            ))}
          </View>
        </View>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </View>
    </>
  );
}

export default AddClass;
