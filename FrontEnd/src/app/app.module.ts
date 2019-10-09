import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbIconModule } from '@nebular/theme';
import { BkLayoutModule } from '@uibakery/kit';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { DARK_THEME } from './theme';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileContainer11Component } from './user-profile/profile-container11/profile-container11.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FundTransferComponent,
    UserProfileComponent,
    ProfileContainer11Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'dark' }, [DARK_THEME]),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    SharedModule,
    BkLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
