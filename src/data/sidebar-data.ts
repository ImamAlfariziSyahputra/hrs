import {
  Chrome,
  Coffee,
  Home,
  LayoutDashboard,
  MessageCircle,
} from 'lucide-react';

import { MenuItem } from '@/types/sidebar.type';

const sidebarData: MenuItem[] = [
  {
    icon: LayoutDashboard,
    label: 'Dashboards',
    children: [
      {
        icon: Home,
        value: '/',
        label: 'Home',
        children: undefined,
      },
      {
        label: 'Personal',
        children: [
          {
            icon: Coffee,
            value: '/personal-v1',
            label: 'Personal V1',
            children: undefined,
          },
          {
            icon: Chrome,
            value: '/personal-v2',
            label: 'Personal V2',
            children: undefined,
          },
        ],
      },
    ],
  },
  {
    icon: MessageCircle,
    label: 'Chat',
    children: [],
  },
];

export default sidebarData;
