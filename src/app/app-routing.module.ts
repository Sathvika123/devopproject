import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [{path:'register',component:RegisterUserComponent},
{path:'quiz',component:QuizComponent},
{path:'feedback',component:FeedbackComponent},
{path:'about',component:AboutComponent},
{path:'',redirectTo:'/register',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
