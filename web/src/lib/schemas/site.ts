import * as z from "zod";
const MediaType = z.enum(['NEWS', 'SLIDER', 'CLIENT', 'ACTIVITY', 'COMPANY', 'PROJECT',
  'PARTNER',
  'SECTOR',
  'BRAND',
  'OFFICE_BOARD', 'MESSAGE_FROM_FOUNDER',
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
  'CAHAN_IN_THE_WORLD'
]);

export const SiteSchema = z.object({
  id: z.number().optional(),
  meta: z.object({
    title: z.string().optional(),
    data: z.string().optional(),
  }),
  type: MediaType,
  media: z.string().optional(),
  active: z.boolean().default(true).optional()
})
export const newsSchema = z.object({
  id: z.number().optional(),
  meta: z.object({
    title: z.string().optional(),
    date: z.date().optional().default(new Date),
    label: z.string().optional(),
    data: z.string().optional(),
  }),
  type: z.string().optional(),
  media: z.string().optional(),
  active: z.boolean().default(true).optional()
})

export const types = Object.values(MediaType.Values);

