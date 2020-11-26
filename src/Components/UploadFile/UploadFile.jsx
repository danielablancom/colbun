import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UploadFile/UploadFile.css';

const UploadFile = () => {
    return (
    
        
    <div class="drop">
        <span class="drop-prompt">Arrastrar o click para subir archivo</span> 
            <div class="drop__thumb" data-label="file.txt"></div>
            <input type="file" name="file" class="drop__input">
    </div>

        {/* <div class="drop">
            <span class="drop__prompt">Drop file here or click to upload</span>
            <input type="file" name="myFile" class="drop__input">
        </div> */}

    );
};
export default UploadFile;