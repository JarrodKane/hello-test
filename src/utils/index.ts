import { TextStyle } from '@/app/types/data';
import clsx from 'clsx';

type ClassesObject = TextStyle & {
  content: string;
};

export function extractClasses(obj: ClassesObject) {
  if (!obj) {
    return { content: '', classesString: '' };
  }

  const { content, ...classes } = obj;
  const classesString = clsx(Object.values(classes));

  return { content, classesString };
}
