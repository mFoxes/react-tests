import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common"
import { CreatePostDto } from "./dto/create-post.dto"
import { PostsService } from "./posts.service"
import { PostDto } from "./dto/post.dto"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { Post as PostModelDto } from "./posts.model"
import { query } from "express"

@ApiTags("Посты")
@Controller("api/posts")
export class PostsController {
  constructor(private postService: PostsService) {}

  @ApiOperation({ summary: "Получение всех постов" })
  @ApiResponse({ status: 200, type: [PostModelDto] })
  @Get()
  getAllPost() {
    return this.postService.getAllPosts()
  }

  @ApiOperation({ summary: "Создание поста" })
  @ApiResponse({ status: 200, type: PostModelDto })
  @Post()
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto)
  }

  @ApiOperation({ summary: "Обновление поста" })
  @ApiResponse({ status: 200, type: PostModelDto })
  @Put()
  updatePost(@Body() dto: PostDto, @Query() query: { id: string }) {
    return this.postService.updatePost(query.id, dto)
  }

  @ApiOperation({ summary: "Удалить пост" })
  @ApiResponse({ status: 200 })
  @Delete()
  deletePost(@Query() query: { id: string }) {
    console.log("query", query)
    return this.postService.deletePost(query.id)
  }
}
