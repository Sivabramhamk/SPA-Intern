import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Shared/login.service';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  user!: FormGroup;
  people:any;
  constructor(private fb: FormBuilder, private service: LoginService, private route: Router) { }



  ngOnInit() {
    this.user = this.fb.group({
  mail: ["", Validators.required],
  password: ["", Validators.required],
    })
  }
  login(){
    console.log("login",this.user.value);
    this.service.login(this.user.value).subscribe(response=>{
      console.log("response from login",response);
      if(response == true){
        this.route.navigate(['/home/intern']);
        // this.route.navigate(['/InternDetail']);
      }else{
        console.log("login failed",response);
      }
    });

}
}
