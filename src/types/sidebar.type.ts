import { type LucideIcon } from 'lucide-react';

type Parent = {
  children: MenuItemChildren[];
};

type Child = {
  children: undefined;
  value: string;
  icon: LucideIcon;
};

export type MenuItemChildren = {
  label: string;
} & (Parent | Child);

export type MenuItem = {
  icon: LucideIcon;
  label: string;
  children: MenuItemChildren[];
};
