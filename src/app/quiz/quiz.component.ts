import { Component, OnInit } from '@angular/core';
//import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes:any[]=[];
  currentQuiz=0;
  answerSelected=false;
  correctAnswers=0;
  IncorrectAnswers=0;
  result=false;

  constructor(private route: Router, private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
  }
  onAnswer(option: boolean){
    console.log(option);
    this.answerSelected =true;
    setTimeout(() =>{
    this.currentQuiz++;
    this.answerSelected =false;
    },2000);
  
  if(option){
    this.correctAnswers++;

  }else{
    this.IncorrectAnswers++;
  }
}
showResult(){

  this.result=true;
  setTimeout(() =>{ this.route.navigate(['/feedback']);
    },5000);
}

}
