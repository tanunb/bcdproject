import { Component } from '@angular/core';

import { TasksPage } from '../tasks/tasks';
// import { CalendarPage } from '../calendar/calendar';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TasksPage;
  // tab2Root: any = CalendarPage;
  tab3Root: any = NotificationsPage;
  tab4Root: any = ProfilePage;

  constructor() {

  }
}
