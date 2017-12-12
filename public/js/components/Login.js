import { postJson } from '../helpers/ajaxHelper';
import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
         this.state = { headerImage: null, userImage: null, backgroundImage: null };
         this.previewFile = this.previewFile.bind(this);

         this.upload = this.upload.bind(this);
    }

    previewFile(event) {
        var target = event.target;
        var preview = document.getElementById(target.name + "Preview"); //selects the query named img
        var file    = target.files[0]; //sames as here
        var reader  = new FileReader();

        reader.onloadend = function () {
           preview.src = reader.result;
        }

        if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
        } else {
           preview.src = "";
        }

        this.setState({
            [target.name]: file,
        });
    }

    upload() {
        var formData = new FormData();

        formData.append("headerImage", this.state.headerImage);
        formData.append("userImage", this.state.userImage);
        formData.append("backgroundImage", this.state.backgroundImage);

        formData.append("isImages", true);

        formData.append("fontType", "Arial");

        formData.append("headerColor", "#ff0");
        formData.append("backgroudColor", "#f0f");
        formData.append("userColor", "#0ff");

        formData.append("isLight", true);

        const obj = {
            url: 'http://localhost:4000/api/imageUpload',
            contentType: 'multipart/form-data',
            data: formData,
        }
        postJson(obj);
    }

    render() {
        return (
            <div>
                <input name="headerImage" type="file" onChange={this.previewFile} />
                <br />
                <img src={this.state.headerImage} id="headerImagePreview" height="200" alt="Header Image preview..." />
                <br />
                <br />
                <input name="backgroundImage" type="file" onChange={this.previewFile} />
                <br />
                <img src={this.state.backgroundImage} id="backgroundImagePreview" height="200" alt="Background Image preview..." />
                <br />
                <br />
                <input name="userImage" type="file" onChange={this.previewFile} />
                <br />
                <img src={this.state.userImage} id="userImagePreview" height="200" alt="User Image preview..." />
                <br />
                <br />

                <button onClick={this.upload}>Upload</button>
            </div>
        );
    }
}
