import { useExists, useJson } from '@artifact/client/hooks'
import { nappsDataSchema, type NappsData } from '../types/napp'
import { useEffect, useState } from 'react'

const useNappsData = () => {
  const exists = useExists('napps.json')
  const raw = useJson('napps.json')
  const [data, setData] = useState<NappsData>()

  useEffect(() => {
    if (raw !== undefined) {
      setData(nappsDataSchema.parse(raw))
    }
  }, [raw])

  const loading = exists === null || (exists && raw === undefined)
  const error = exists === false ? 'napps.json not found' : null

  return { data, loading, error }
}

export default useNappsData
