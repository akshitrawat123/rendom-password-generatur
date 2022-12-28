import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw';
  length = 0;
  includeLeters = false;
  includeNumber = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeUseNumber(){
    this.includeNumber = !this.includeNumber;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseLetters(){
    this.includeLeters = !this.includeLeters;
  }

  onButtonClick(){
    const numbers = "1234567890"
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";

    let validChars = '';
    if(this.includeLeters){
      validChars += letters;
    }
    if(this.includeNumber){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0 ; i < this.length ; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    console.log(this.length);
    return this.password = generatedPassword;
  }

}
