import { faker } from '@faker-js/faker'
import { Answer, IAnswerProps } from '@/domain/forum/enterprise/entities/answer'
import { UniqueEntityID } from '@/core/entities/value-objects/unique-entity-id'

export function makeAnswer(
  override: Partial<IAnswerProps> = {},
  id?: UniqueEntityID,
) {
  const answer = Answer.create(
    {
      authorId: new UniqueEntityID(),
      questionId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )
  return answer
}
