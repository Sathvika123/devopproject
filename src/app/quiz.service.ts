import { Injectable } from '@angular/core';
//import { Quiz } from './quiz.model';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes=[
    {
      question: "who's the singer of we dont talk any more?",
      answer: [
        {  option: 'Charlie puth',correct: true  },
        {  option: 'Ariana grande',correct: false  },
        {  option: 'Maroom 5',correct: false  },
        {  option: 'Justin beiber',correct: false  }
      ]
    },
    {
      question: "who's the singer of lovestroy?",
      answer: [
        {  option: 'Charlie puth',correct: false  },
        {  option: 'Ariana grande',correct: false  },
        {  option: 'taylor swift',correct: true  },
        {  option: 'Justin beiber',correct: false  }
      ]
    },
    {
      question: '"RARE" is the album of',
      answer: [
        {  option: 'Charlie puth',correct: false  },
        {  option: 'Ariana grande',correct: false  },
        {  option: 'salena gomaz',correct: true  },
        {  option: 'Justin beiber',correct: false  }
      ]
    },
    {
      question: 'which song is most viewed on youtube',
      answer: [
        {  option: 'Despacito',correct: false  },
        {  option: 'Baby Shark Dance',correct: true  },
        {  option: 'See You Again',correct: false  },
        {  option: 'Shape of You',correct: false  }
      ]
    },
    {
      question: '"blood sweat and tears" is a song of which band?',
      answer: [
        {  option: 'GOT7',correct: true  },
        {  option: 'EXO',correct: false  },
        {  option: 'TXT',correct: false  },
        {  option: 'BTS',correct: true  }
      ]
    },
    {
      question: "who's the singer of what do you mean?",
      answer: [
        {  option: 'lady gaga',correct: false  },
        {  option: 'Ariana grande',correct: false  },
        {  option: 'taylor swift',correct: false  },
        {  option: 'Justin beiber',correct: true  }
      ]
    },
    {
      question: 'choose the album of ariana grande',
      answer: [
        {  option: 'positions',correct: true  },
        {  option: 'reputation',correct: false  },
        {  option: 'changes',correct: false  },
        {  option: 'revival',correct: false  }
      ]
    },
    {
      question: 'who is the singer of love me like you do?',
      answer: [
        {  option: 'ariana grande',correct: false  },
        {  option: 'rihanna',correct: false  },
        {  option: 'Ellie Goulding',correct: true  },
        {  option: 'selena gomaz',correct: false  }
      ]
    },
    {
      question: '"perfect", is a song of?',
      answer: [
        {  option: 'beyonce',correct: false  },
        {  option: 'rihanna',correct: false  },
        {  option: 'ed sheeran',correct: true  },
        {  option: 'selena gomaz',correct: false  }
      ]
    },
    {
      question: 'which is the most viewed song of billie eilish',
      answer: [
        {  option: 'bad guy',correct: false  },
        {  option: 'lovely',correct: true  },
        {  option: 'bury a friend',correct: false  },
        {  option: 'bellyache',correct: false  }
      ]
    }
    
  ]
   constructor() { }

   getQuizzes() { 
   return this.quizzes;
   }
}
