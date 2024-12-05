import { Either, right } from '@/core/either'
import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { Injectable } from '@nestjs/common'
import { Public } from '@/infra/auth/public'

interface IGetQuestionBySlugRequest {
  slug: string
}

type IGetQuestionBySlugResponse = Either<
  null,
  {
    question: Question
  }
>

@Injectable()
@Public()
export class GetQuestionBySlugUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    slug,
  }: IGetQuestionBySlugRequest): Promise<IGetQuestionBySlugResponse> {
    const question = await this.questionsRepository.findBySlug(slug)

    if (!question) {
      throw new Error('Question not found')
    }

    return right({
      question,
    })
  }
}
