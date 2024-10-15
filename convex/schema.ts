import { defineSchema, defineTable  } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  users: defineTable({
    id: v.number(),
    name: v.string(),
    email: v.string(),
    password: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
    orders: v.array(v.string()),
  }),
  counter_table: defineTable({
    counter: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
})
