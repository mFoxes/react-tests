import { Controller, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { CreatePostDto } from "./dto/create-post.dto"
import { Post } from "./posts.model"
import { PostDto } from "./dto/post.dto"

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) {}

  async getAllPosts() {
    const posts = await this.postRepository.findAll({ include: { all: true } })
    return posts
  }

  async createPost(dto: CreatePostDto) {
    const post = await this.postRepository.create({ ...dto })
    return post
  }

  async updatePost(id: string, dto: PostDto) {
    const post = await this.postRepository
      .findOne({ where: { id: id } })
      .then(function (obj) {
        if (obj) return obj.update(dto)
        return Post.create(dto)
      })
    return post
  }

  async deletePost(id: string) {
    const post = await this.postRepository.findOne({ where: { id: id } })

    await post.destroy()
  }
}
