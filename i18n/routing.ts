import { locales } from '@/lib';
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: locales.map(loc => loc.value),
 
  defaultLocale: 'en'
});