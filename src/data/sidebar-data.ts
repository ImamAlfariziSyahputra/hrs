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
    value: '/dashboard',
    label: 'Dashboards',
    children: [
      {
        icon: Home,
        value: '/dashboard',
        label: 'Home',
        children: undefined,
      },
      {
        label: 'Personal',
        children: [
          {
            label: 'Personal V1',
            children: [
              {
                icon: Coffee,
                value: '/dashboard/v1',
                label: 'V1',
                children: undefined,
              },
            ],
          },
          {
            icon: Chrome,
            value: '/dashboard/v2',
            label: 'Personal V2',
            children: undefined,
          },
        ],
      },
      {
        label: 'Group',
        children: [
          {
            icon: Coffee,
            value: '/dashboard/group-v1',
            label: 'Group V1',
            children: undefined,
          },
          {
            icon: Chrome,
            value: '/dashboard/group-v2',
            label: 'Group V2',
            children: undefined,
          },
        ],
      },
    ],
  },
  {
    icon: MessageCircle,
    value: '/chat',
    label: 'Chat',
    children: [
      {
        icon: Coffee,
        label: 'Chat',
        value: '/chat',
        children: undefined,
      },
      {
        icon: Chrome,
        label: 'Chat Test',
        value: '/chat/test',
        children: undefined,
      },
    ],
  },
];

export default sidebarData;
