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
        value: '/personal',
        children: [
          {
            value: '/personal/personal-v1',
            label: 'Personal V1',
            children: [
              {
                icon: Coffee,
                value: '/personal/personal-v1/v1',
                label: 'V1',
                children: undefined,
              },
            ],
          },
          {
            icon: Chrome,
            value: '/personal/personal-v2',
            label: 'Personal V2',
            children: undefined,
          },
        ],
      },
      {
        label: 'Group',
        value: '/group',
        children: [
          {
            icon: Coffee,
            value: '/group/group-v1',
            label: 'Group V1',
            children: undefined,
          },
          {
            icon: Chrome,
            value: '/group/group-v2',
            label: 'Group V2',
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
