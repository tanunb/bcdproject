import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TasksPage } from '../pages/tasks/tasks';
import { CalendarPage } from '../pages/calendar/calendar';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPage } from '../pages/add/add';
import { bcdService } from '../services/bcdpn4-service';

@NgModule({
  declarations: [
    MyApp,
    TasksPage,
    CalendarPage,
    NotificationsPage,
    ProfilePage,
    TabsPage,
    AddPage
  ],

  imports: [
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    TasksPage,
    CalendarPage,
    NotificationsPage,
    ProfilePage,
    TabsPage,
    AddPage
  ],

  providers: [{provide:ErrorHandler, useClass: IonicErrorHandler}, bcdService]
})


export class AppModule {}
