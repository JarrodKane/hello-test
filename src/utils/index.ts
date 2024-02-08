import { TextStyle } from '@/app/types/data';
import clsx from 'clsx';

type ClassesObject = TextStyle & {
  content: string;
};

// This function is used to extract the classes from the object and return the content and classesString
// It's a little safer this way and avoids me having to write a lot of repetitive code
export function extractClasses(obj: ClassesObject) {
  if (!obj) {
    return { content: '', classesString: '' };
  }

  const { content, ...classes } = obj;
  const classesString = clsx(Object.values(classes));

  return { content, classesString };
}
