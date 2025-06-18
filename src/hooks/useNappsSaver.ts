import { useArtifact } from '@artifact/client/hooks'
import type { NappsData } from '../types/napp'

const useNappsSaver = () => {
  const artifact = useArtifact()

  return async (data: NappsData): Promise<void> => {
    if (!artifact) return
    artifact.files.write.json('napps.json', data)
    await artifact.branch.write.commit('Update napps data')
  }
}

export default useNappsSaver
