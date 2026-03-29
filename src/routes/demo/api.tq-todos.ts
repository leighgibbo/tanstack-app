import { createFileRoute } from '@tanstack/react-router'

const todos = [
  {
    id: 1,
    name: 'Buy groceries',
  },
  {
    id: 2,
    name: 'Buy mobile phone',
  },
  {
    id: 3,
    name: 'Buy laptop',
  },
]

export const Route = createFileRoute('/demo/api/tq-todos')({
  server: {
    handlers: {
      GET: () => {
        return Response.json(todos)
      },
      POST: async ({ request }) => {
        const body = (await request.json()) as { name?: unknown }
        const name = typeof body.name === 'string' ? body.name : ''
        const todo = {
          id: todos.length + 1,
          name,
        }
        todos.push(todo)
        return Response.json(todo)
      },
    },
  },
})
