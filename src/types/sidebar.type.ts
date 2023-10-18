import { type LucideIcon } from 'lucide-react';
import { type IconType as ReactIcon } from 'react-icons';

export type MenuLink = `/${string}`;

type Parent = {
  children: MenuItemChildren[];
};

type Child = {
  children: undefined;
  icon: LucideIcon | ReactIcon;
  value: MenuLink;
};

export type MenuItemChildren = {
  label: string;
} & (Parent | Child);

export type MenuItem = {
  icon: LucideIcon;
  value: MenuLink;
  label: string;
  children: MenuItemChildren[];
};
