import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { DocumentComponent } from './document/document.component';
import { DiscListComponent } from './disc-list/disc-list.component';
import { DocPayComponent } from './doc-details/doc-pay/doc-pay.component';
import { ThanksComponent } from './doc-details/doc-pay/thanks/thanks.component';
import { PaymentfailedComponent } from './doc-details/doc-pay/paymentfailed/paymentfailed.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FreebieComponent } from './doc-details/freebie/freebie.component';
import { DocDetailsComponent } from './doc-details/doc-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { SubspayComponent } from './user/sign-up/subspay/subspay.component';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'order-history', component : OrderHistoryComponent},
  {path: 'contactUs', component : ContactComponent},
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
},
{
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
},
{path: 'admin', component : DocumentComponent},
{path: 'discList', component : DiscListComponent},
{path: 'discList/:discId', component: DocDetailsComponent},
{path: 'payDetails/:docId/:docPrice', component: DocPayComponent},
{path: 'subspay', component: SubspayComponent},
{path: 'thanks', component: ThanksComponent},
{path: 'paymentfailed', component: PaymentfailedComponent},
{path: 'welcome', component: WelcomeComponent},
{path: 'downPage', component: FreebieComponent},
{path: 'about-us', component: AboutUsComponent},
{path: 'blog', component: BlogComponent},
{path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
