import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { MailViewData } from '../../../@core/data/mail-view';

@Component({
  selector: 'ngx-mail-view-list',
  templateUrl: './mail-view-list.component.html',
  styleUrls: ['./mail-view-list.component.scss'],
})
export class MailViewListComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      sender: {
        title: 'Sender',
        type: 'string',
      },
      id: {
        title: 'UniqueID',
        type: 'number',
      },
      fromMail: {
        title: 'From Mail',
        type: 'string',
      },
      fromName: {
        title: 'From Name',
        type: 'string',
      },
      email: {
        title: 'To E-mail',
        type: 'string',
      },
      attachment: {
        title: 'Attachments',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: MailViewData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
