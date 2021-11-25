import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0 ;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';

  onChangeLength(value: string){
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else if(isNaN(parsedValue)){
      this.length = 0;
    }
  }
  
  onChangeUseLetters(){
    this.useLetters = !this.useLetters;
  }
  
  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }
  
  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }
  
  onButtonClick(){
    this.password='';
    this.generatePassword()
    }

  generatePassword(){
    const numbers = '123456789012345678901234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    const symbols = '!@#$%^&*()!@#$%^&*()!@#$%^&*()'
  
    let validChars = '';
    if(this.useLetters){
      validChars += letters;
    }
    if(this.useNumbers){
      validChars += numbers;
    }
    if(this.useSymbols){
      validChars += symbols;
    }
  
    for (let i = 0; i < this.length; i++){
      this.password += validChars.charAt(Math.floor(Math.random() * validChars.length))
    }
  }
}
