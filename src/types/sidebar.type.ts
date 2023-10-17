import { type LucideIcon } from 'lucide-react';
import { type IconType as ReactIcon } from 'react-icons';

type Parent = {
  children: MenuItemChildren[];
};

type Child = {
  children: undefined;

  icon: LucideIcon | ReactIcon;
};

export type MenuItemChildren = {
  value: string;
  label: string;
} & (Parent | Child);

export type MenuItem = {
  icon: LucideIcon;
  label: string;
  children: MenuItemChildren[];
};
