import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const split = ({
  value,
  delimiter,
}: {
  value: string;
  delimiter: string;
}) => value.split(delimiter).slice(1, value.split(delimiter).length);

export const dummyArray = (length: number) => Array.from(Array(length).keys());
