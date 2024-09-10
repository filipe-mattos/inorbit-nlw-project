import dayjs from 'dayjs'
import { client, db } from './index'
import { goalCompletions, goals } from './schema/schema'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Estudar 1 hora programacao', desiredWeeklyFrequency: 7 },
      {
        title: 'ler 30 minutos o livro Ultra aprendizado',
        desiredWeeklyFrequency: 5,
      },
      { title: 'Ir para a academia', desiredWeeklyFrequency: 3 },
    ])
    .returning()
  const startOfWeek = dayjs().startOf('week')
  await db.insert(goalCompletions).values([
    {
      goalId: result[0].id,
      createdAt: startOfWeek.toDate(),
    },
    {
      goalId: result[1].id,
      createdAt: startOfWeek.add(1, 'day').toDate(),
    },
  ])
}
seed().finally(() => {
  client.end()
})
