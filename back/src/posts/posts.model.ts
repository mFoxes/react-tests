import { Column, DataType, Model, Table } from "sequelize-typescript"

interface PostCreationAttrs {
  title: string
  content: string
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string

  @Column({ type: DataType.STRING, allowNull: false })
  content: string
}
