import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'main',
    title: 'MENU.DASHBOARD.COLLAPSIBLE',
    translate: 'Главная',
    type: 'collapsible',
    icon: 'home',
    children: [
      {
        id: 'aboutUs',
        title: 'MENU.DASHBOARD.ANALYTICS',
        translate: 'О нас',
        type: 'item',
        icon: 'circle',
        url: 'about-us'
      },
      {
        id: 'home',
        title: 'Главная страница',
        translate: 'Главная страница',
        type: 'item',
        icon: 'circle',
        url: '/orphanage/pupils'
      },
    ]
  },
  {
    id: 'apps',
    type: 'section',
    title: 'MENU.APPS.SECTION',
    translate: 'Администрирование',
    icon: 'package',
    children: [
      {
        id: 'profile',
        title: 'MENU.APPS.USERS',
        translate: 'Пользователи',
        type: 'collapsible',
        icon: 'circle',
        children: [
          {
            id: 'profileList',
            title: 'MENU.APPS.USERS.LIST',
            translate: 'Реестр пользователей',
            type: 'item',
            url: 'profile/list',
          },
        ]
      },
      {
        id: 'orphanage',
        title: 'MENU.APPS.ORPHANAGE',
        translate: 'Детские дома',
        type: 'collapsible',
        icon: 'circle',
        children: [
          {
            id: 'orphanageList',
            title: 'MENU.APPS.ORPHANAGE.LIST',
            translate: 'Реестр детских домов',
            type: 'item',
            url: 'orphanage/registry',
          },
        ]
      },
      {
        id: 'event',
        title: 'MENU.APPS.EVENT',
        translate: 'Мероприятия',
        type: 'collapsible',
        icon: 'circle',
        children: [
          {
            id: 'eventList',
            title: 'MENU.APPS.EVENT.LIST',
            translate: 'Реестр мероприятий',
            type: 'item',
            url: 'event/list',
          },
        ]
      },
    ]
  },
  {
    id: 'help',
    type: 'section',
    title: 'Помощь',
    translate: 'Помощь',
    icon: 'package',
    children: [
      {
        id: 'faq',
        title: 'FAQ',
        translate: 'FAQ',
        type: 'item',
        url: 'faq',
      },
    ]
  }
];
