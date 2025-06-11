# napps-widget

This project demonstrates a widget running inside an Artifact Frame. It manages a list of "natural applications" (napps) stored in `napps.json` and persists changes back to the repository.

## Development

```bash
npm run dev
```

## Building

```bash
npm run build
```

Load `dist/index.html` in an `ArtifactFrameHolder` to embed the widget.

### Data shape

The napp data structure is defined in `src/types/napp.ts` and looks like this:

```ts
export const nappSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  version: z.string(),
  isEnabled: z.boolean(),
  installDate: z.string()
})
```
