import React from 'react';
import { saveAs } from 'file-saver';

function LessonRow(props) {
  const handleDownload = () => {
    saveAs(props.downloadUrl, `${props.filename}`);
  };

  return (
    <tr>
      <td>{props.week}</td>
      <td className='text-white'>{props.lesson}</td>
      <td className='text-white'>{props.content}</td>
      <td>
        <button className="btn myTextAbout5" onClick={handleDownload} 
          style={{ borderRadius: "20px", backgroundColor: "rgb(235, 235, 235)" }}>
          İndir
        </button>
      </td>
    </tr>
  );
}

export default LessonRow;
