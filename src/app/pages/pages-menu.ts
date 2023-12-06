import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/home-page',
    home: true,
  },
  {
    title: 'E-mail',
    icon: 'grid-outline',
    children: [
      {
        title: 'List',
        link: '/pages/mail-view/mail-view-list',
      },
      {
        title: 'Events',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'CONFIGURATIONS',
    group: true,
  },
  {
    title: 'Sender',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'List',
        link: '/pages/mail-view/mail-view-list',
      },
      {
        title: 'Add New',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
      {
        title: 'Change Mail',
        link: '/auth/reset-password',
      }
    ],
  },
];
