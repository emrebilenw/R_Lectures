import React, { useEffect, useState } from 'react';
import ToolCard from './ToolCard';
import { collection, addDoc } from "firebase/firestore"; 
import { ref , uploadBytes} from "firebase/storage";
import { getDownloadURL } from 'firebase/storage';

const Tools = (props) => {
  const [toolsData, setToolsData] = useState([]);
  const [fileName, setFileName] = useState();
  const [file, setFile] = useState();
  const [formData, setFormData] = useState({
    Title: '',
    Content: '',
    Src:"",
    imageType:""
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
        const data = await props.docTopPromise("Tools", props.db);
        setToolsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props]); // Ensure useEffect runs when props change

  const handleCreateTool=async (e)=>{
    e.preventDefault();
    
    try {

      const fileRef = await ref(props.storage,`Tools/${fileName}`)
      uploadBytes(fileRef,file)
      const DownloadUrl=await getDownloadURL(fileRef)
      const docRef = await addDoc(collection(props.db, "Tools"), {
        Title:formData.Title,
        Content:formData.Content,
        Src:`Tools/${fileName}`,
        imageType:formData.imageType,
        DownloadUrl:DownloadUrl

      });
      console.log("Document written with ID: ", docRef.id);
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  clearInput()
  }
  const clearInput = () => {
    setFormData({
      Title:"",
      Content:"",
      Src:"",
      imageType:""
    });
  };
  return (
    <div className='row mt-4'>
      <div className='col-1'></div>
      <div className='col-10 mt-5'>
        <div className='row'>
          <div className='col-12'>
            {toolsData.map((toolData) => (
              <ToolCard
                user={props.user}
                key={toolData.id}
                title={toolData.data.Title}
                text={toolData.data.Content}
                image={`Images/${toolData.data.imageType}.png`}
                DownloadUrl={toolData.data.DownloadUrl}
                
               
              />
            ))}
          </div>
          
        </div>
        
        {props.isAdmin?<form>
          <div class="form-group">
            <label for="exampleInputEmail1">Başlık</label>
            <input 
            name='Title'
            type="Title" 
            class="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            value={formData.Title}
            onChange={eventHandler}
            />
            
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">İçerik</label>
            <input 
            name='Content'
            type="Content" 
            class="form-control" 
            id="exampleInputPassword1"
            value={formData.Content}
            onChange={eventHandler}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">imageType</label>
            <input 
            name='imageType'
            type="imageType" 
            class="form-control" 
            id="exampleInputPassword2"
            value={formData.imageType}
            onChange={eventHandler}
            />
          </div>

          
          

          <div class="form-group">
            <label for="exampleFormControlFile1">Yüklenecek Dosya</label>
            <input 
            type="file" 
            class="form-control-file" 
            id="exampleFormControlFile1"
            onChange={(e)=>{
             setFileName(e.currentTarget.files[0].name)
             setFile(e.currentTarget.files[0])
            }}

            />
          </div>

          <button type="submit" onClick={handleCreateTool} class="btn btn-primary">Submit</button>
  
          
        </form>: null}
        
      </div>
    </div>
  );
};

export default Tools;