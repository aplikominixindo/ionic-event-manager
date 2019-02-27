import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  public eventList: Array<any>;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService
      .getEventList()
      .get()
      .then(eventListSnapshot => {
        this.eventList = [];
        eventListSnapshot.forEach(snapshot => {
          this.eventList.push({
            id: snapshot.id,
            name: snapshot.data().name,
            price: snapshot.data().price,
            date: snapshot.data().date
          });
          return false;
        });
      });
  }

}
