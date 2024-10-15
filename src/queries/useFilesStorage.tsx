import { createQuery } from '~/cvxsolid'
import { api } from '~convex/_generated/api'
import { type FileMetadata } from '~convex/files'

export const useFilesStorage = () => {
  const files = createQuery<FileMetadata[]>(api.files.listAllFiles)
  // const file = createQuery<FileMetadata | null>(api.files.getMetadataByStorageId, {
  //   storageId: 'kg21qmfv9kg2w4av1prtv0kf0571832y',
  // })

  return {
    files,
  }
}
