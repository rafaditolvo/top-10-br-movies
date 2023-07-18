import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

interface UserCredentialsType {
  login: string | null | undefined;
  password: string | null | undefined;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }


  loginForm = this.formBuilder.group({
    login: '',
    password: ''
  });



  @Output() verificarLogado = new EventEmitter();

  ngOnInit(): void {
  }

  login({login, password}:UserCredentialsType) {
    this.http.post<any[]>('http://localhost:4000/auth/login', {
      username: login,
      password: password,
    }).subscribe((response:any) => {
      console.log(response);
      localStorage.setItem('token', response.access_token);
      this.verificarLogado.emit();
    });
  }

  onSubmit(): void {
    const {login, password} = this.loginForm.value;
    if(login != '' && password != ''){
      this.login({login, password})
    }
  }
  
}
