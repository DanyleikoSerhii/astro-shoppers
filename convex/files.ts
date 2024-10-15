import { v } from 'convex/values'
import { query } from './_generated/server'

export type FileMetadata = {
  _id: string
  _creationTime: number
  sha256: string
  size: number
  contentType?: string
}

export type FileStorage = FileMetadata & {
  url: string | null
}

export const getMetadataByStorageId = query({
  args: {
    storageId: v.id('_storage'),
  },
  handler: async (ctx, args): Promise<FileMetadata | null> => {
    return await ctx.db.system.get(args.storageId)
  },
})

export const getFilesMetadata = query({
  handler: async (ctx): Promise<FileMetadata[]> => {
    return await ctx.db.system.query('_storage').collect()
  },
})

export const listAllFiles = query({
  handler: async (ctx): Promise<FileStorage[]> => {
    const files = await ctx.db.system.query('_storage').collect()

    return Promise.all(
      files.map(async (file) => ({
        ...file,
        url: await ctx.storage.getUrl(file._id),
      }))
    )
  },
})
