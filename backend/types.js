import zod from 'zod'

// create zod schema for todo 

export const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

export const updateTodo = zod.object({
    id: zod.string()
})

