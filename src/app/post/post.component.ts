import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ApiService]
})

export class PostComponent implements OnInit {

    file_upload: any;
    name: string;
    email: string;
    constructor(private api: ApiService) { }

    ngOnInit() {
        this.name = "xxx";
        this.email = "email";
    }

    uploadFile(event){
        // let urlSearch: URLSearchParams = new URLSearchParams();
        // urlSearch.set('variable', '222');
        this.file_upload = event.target.files[0];
        console.log(event.target.files);
        var files = event.target.files;
		var name = "";
		for(let i=0; i < files.length; i++){
			name += files[i].name + ', ';
		}
		var preview = document.getElementById('previewImages');
        console.log(files.length);
        if(files.length){
            // preview = document.getElementById("previewImages");
            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                console.log(file);
                let reader = new FileReader();
                reader.onload = function (e) {
                    let divElement = document.createElement("div");
					divElement.className = "col-md-3 my-1";
					let img = document.createElement("img");
					img.height = 200;
					img.className = "max-width"
					img.src = reader.result;
					divElement.appendChild(img);
					preview.appendChild(divElement);
                }
                console.log(event.target.result);

            	reader.readAsDataURL(file);
            }

        }
    }

    createPost(){
        let form_data: FormData  = new FormData();
        form_data.append('name', this.name);
        form_data.append('mail', this.email);
        form_data.append('file', this.file_upload);

        this.api.createPost(form_data).subscribe( res => {
            console.log(res);
        })
    }
}
