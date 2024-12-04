import { UniqueEntityID } from './value-objects/unique-entity-id'

export abstract class Entity<IProps> {
  private _id: UniqueEntityID
  protected props: IProps

  get id() {
    return this._id
  }

  protected constructor(props: IProps, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID(id)
  }

  public equals(entity: Entity<unknown>) {
    if (entity === this) {
      return true
    }

    if (entity.id === this._id) {
      return true
    }

    return false
  }
}
