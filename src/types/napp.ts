import { z } from 'zod'

export const nappSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  version: z.string(),
  isEnabled: z.boolean(),
  installDate: z.string()
})

export type Napp = z.infer<typeof nappSchema>

export const nappsDataSchema = z.object({
  installedNapps: z.array(nappSchema),
  availableNapps: z.array(nappSchema)
})

export type NappsData = z.infer<typeof nappsDataSchema>
