import React, { useEffect, useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { ref , uploadBytes} from "firebase/storage";
import { getDownloadURL } from 'firebase/storage';
import LessonRow from './LessonRow';

function Lesson(props) {

  const screenWidth=window.innerWidth

  const [lessonsData, setLessonsData] = useState([]);
  const [formData, setFormData] = useState({
    Lecture: '',
    Topic: '',
    File: null
  });

  const eventHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await props.docTopPromise("Lessons", props.db);
        setLessonsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props]); // Ensure useEffect runs when props change

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      File: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fileRef = ref(props.storage, `Lessons/${formData.File.name}`);
      await uploadBytes(fileRef, formData.File);
      const downloadUrl = await getDownloadURL(fileRef);
      await addDoc(collection(props.db, "Lessons"), {
        Lecture: formData.Lecture,
        Topic: formData.Topic,
        DownloadUrl: downloadUrl
      });
      clearForm();
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const clearForm = () => {
    setFormData({
      Lecture: '',
      Topic: '',
      File: null
    });
  };

  return (
    <div>
      {screenWidth>1000? <div>
      
      <div className='row'>
        <div className='col-1'></div>
        <table className="table table-hover col-10 myTextAbout3">
          <thead>
            <tr>
              <th scope="col">week</th>
              <th scope="col">Lesson</th>
              <th scope="col">Content</th>
              <th scope="col">Document</th>
            </tr>
          </thead>
          <tbody>
            {lessonsData.map((lessonData, index) => (
              <LessonRow
                key={lessonData.id}
                week={index + 1}
                lesson={lessonData.data.Lecture}
                content={lessonData.data.Topic}
                downloadUrl={lessonData.data.DownloadUrl}
              />
            ))}
          </tbody>
        </table>
      </div>
      
      {props.isAdmin &&
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="lectureInput">Lecture</label>
            <input
              type="text"
              className="form-control"
              id="lectureInput"
              name="Lecture"
              value={formData.Lecture}
              onChange={eventHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="topicInput">Topic</label>
            <input
              type="text"
              className="form-control"
              id="topicInput"
              name="Topic"
              value={formData.Topic}
              onChange={eventHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fileInput">File</label>
            <input
              type="file"
              className="form-control-file"
              id="fileInput"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      }
      <div style={{ width: "100px", height: "700px" }}></div>
    </div>:
    
    
    
    <div className=''>
      
      <div className='row mt-5 ml-3'>
        
        <table className="table table-hover col-10 myTextAbout3">
          <thead>
            <tr style={{fontSize:"small"}}>
              <th scope="col">week</th>
              <th scope="col">Lesson</th>
              <th scope="col">Content</th>
              <th scope="col">Document</th>
            </tr>
          </thead>
          <tbody style={{fontSize:"small"}}>
            {lessonsData.map((lessonData, index) => (
              <LessonRow
                key={lessonData.id}
                week={index + 1}
                lesson={lessonData.data.Lecture}
                content={lessonData.data.Topic}
                downloadUrl={lessonData.data.DownloadUrl}
              />
            ))}
          </tbody>
        </table>
      </div>
      
      
      {props.isAdmin &&
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="lectureInput">Lecture</label>
            <input
              type="text"
              className="form-control"
              id="lectureInput"
              name="Lecture"
              value={formData.Lecture}
              onChange={eventHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="topicInput">Topic</label>
            <input
              type="text"
              className="form-control"
              id="topicInput"
              name="Topic"
              value={formData.Topic}
              onChange={eventHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fileInput">File</label>
            <input
              type="file"
              className="form-control-file"
              id="fileInput"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      }
      <div style={{ width: "100px", height: "700px" }}></div>
    </div>}
    </div>
  );
}

export default Lesson;
