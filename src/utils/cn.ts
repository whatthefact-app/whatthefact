import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export function cn(...classNames: ClassValue[]) {
	return twMerge(clsx(classNames));
}
