import React,{useState,useEffect} from 'react';
import addclass from "../../assets/ADDCLASS.png";
import videos from "../../assets/videos.png";
import HeaderComponent from '../../components/HeaderComponent';
import View from '../../components/View';
import SmallBox from '../../components/SmallBox';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { HOST } from '../../App';

function MyVerticallyCenteredModal(props) {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file input change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle Add button click
  const handleAddClick = () => {
    if (selectedFile) {
      console.log('Selected video file:', selectedFile);
    } else {
      console.log('No file selected');
    }
    props.onHide(); // Close the modal
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload Video
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload a video file</Form.Label>
          <Form.Control
            type="file"
            accept="video/*" // Restrict file type to videos
            onChange={handleFileChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleAddClick} style={{ backgroundColor: '#DBDC31' }}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


function VideosPdf() {
  const [modalShow, setModalShow] = React.useState(false);
  const [data1, setData1] = useState([]);
  useEffect(()=>{
    const data = axios.get(`${HOST}/download/document`).then((res) => {setData1(res.data) })
  },[data1])
 
  return (
    <>
      <HeaderComponent page="Add study Materials" title="Books" />
      <div>
        <View
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            padding: "0 0.6rem",
            marginTop: '100px', // Corrected property
            alignItems: 'center', // Corrected property
            justifyContent: 'center', // Corrected property
          }}
        >
          <View style={{ height: '150px' }} onClick={() => setModalShow(true)}>
            <SmallBox image={addclass} title="add books " />
          </View>
          <View style={{ height: '150px' }}>
            <SmallBox image={videos} title="Maths.mpv4" />
          </View>
          <View style={{ height: '150px' }}>
            <SmallBox image={videos} title="Science.mpv4" />
          </View>
          <View style={{ height: '150px' }}>
            <SmallBox image={videos} title="English.mpv4" />
          </View>
          {data1&& data1.length > 0 && data1 // Filter the data
            .map((value, key) => (
              <View style={{ height: '150px' }} key={key}>
                <SmallBox image={videos} title={value.filename} onPress={()=>{const id =value._id ;downloadFile(id)}} />
              </View>
            ))}
        </View>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default VideosPdf;
