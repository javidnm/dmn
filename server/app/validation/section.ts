import { z } from 'zod';

const MediaType = z.enum(['NEWS', 'SLIDER', 'CLIENT', 'ACTIVITY', 'COMPANY', 'PROJECT',
  'PARTNER',
  'SECTOR',
  'BRAND',
  'OFFICE_BOARD',
  'MESSAGE_FROM_FOUNDER',
  'THE_HONORARY_PRESIDENT',
  'VISION_AND_MISSION',
  'ORGANIZATIONAL_CHART',
  'CORPORATE_IDENTITY',
  'FINANCIAL_STATUS',
  'FINANCIAL_PARTNER',
  'CSR',
  'EVENT',
  'SPONSORSHIP',
  'HUMAN_RESOURCES',
  'VACANCIES',
  'CAHAN_IN_THE_WORLD']);

export const SectionSchema = z.object({
  meta: z.string(),
  type: MediaType,
  media: z.string(),
  active: z.boolean().default(true)
});

export const SectionUpdateSchema = z.object({
  meta: z.string().optional(),
  type: MediaType.optional(),
  media: z.string().optional(),
  active: z.boolean().default(true)
});
