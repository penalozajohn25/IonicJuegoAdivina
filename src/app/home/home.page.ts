import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num:number;
  mayorMenor:string;
  numberSecret:number=this.randonNumber(0,100);
  intentos:number=0;
  resultado:string='partida';
  constructor(){}

  private randonNumber(a,b):number{
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }
  
  private compruebaNumero():string{
    console.log(this.numberSecret);
    this.intentos++;
    if(this.intentos>4){
       this.resultado = 'perdedor';
    }else{
      if(this.num){
        if(this.numberSecret>this.num){
           this.mayorMenor = 'mayor';
        }else if(this.numberSecret<this.num){
           this.mayorMenor =  'menor';
        }else{
           this.mayorMenor =  'igual';
           this.resultado = 'ganador';
        }
     }
     return this.mayorMenor;
    }

  }

 private reiniciar():void{
     this.num = null;
     this.mayorMenor = "";
     this.numberSecret = this.randonNumber(0,100);
     this.resultado = 'partida';
     this.intentos=0;
 }

}
