import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'events',
    title: 'Events',
    translate: 'Мероприятия',
    type: 'item',
    icon: 'layout',
    url: 'events'
  },
  {
    id: 'home',
    title: 'Home',
    translate: 'Домашняя',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'sample',
    title: 'Sample',
    translate: 'Пример',
    type: 'item',
    icon: 'file',
    url: 'sample'
  }
]
