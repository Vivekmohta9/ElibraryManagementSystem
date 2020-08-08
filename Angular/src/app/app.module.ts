import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { HistoryService } from './shared/history.service';
import { HttpClientModule } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SubspayComponent} from './user/sign-up/subspay/subspay.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentComponent } from './document/document.component';
import { DiscListComponent } from './disc-list/disc-list.component';
import { DocDetailsComponent } from './doc-details/doc-details.component';
import { FreebieComponent } from './doc-details/freebie/freebie.component';
import { ThanksComponent } from './doc-details/doc-pay/thanks/thanks.component';
import { PaymentfailedComponent } from './doc-details/doc-pay/paymentfailed/paymentfailed.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DocPayComponent } from './doc-details/doc-pay/doc-pay.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { FilterColumn } from './doc-details/filter.pipes';



@NgModule({
  declarations: [
    AppComponent,
    OrderHistoryComponent,
    HomeComponent,
    ContactComponent,
    SidebarComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    SubspayComponent, 
    DocumentComponent,
    DiscListComponent,
    DocDetailsComponent,
    FreebieComponent,
    ThanksComponent,
    PaymentfailedComponent,
    UserDetailsComponent,
    WelcomeComponent,
    DocPayComponent,
    AboutUsComponent,
    BlogComponent,
    FilterColumn,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
  ],
  exports: [
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
  ],
  providers: [HistoryService, ToastrService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
