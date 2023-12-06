import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages-model/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages-model/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages-model/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages-model/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages-model/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages-model/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages-model/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages-model/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages-model/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages-model/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages-model/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages-model/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages-model/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages-model/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages-model/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages-model/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages-model/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages-model/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages-model/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages-model/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages-model/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages-model/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages-model/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages-model/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages-model/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages-model/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages-model/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages-model/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages-model/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages-model/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages-model/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages-model/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages-model/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages-model/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages-model/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages-model/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages-model/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages-model/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages-model/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
