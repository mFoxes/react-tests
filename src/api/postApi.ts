import {Axios, AxiosResponse} from "axios"
import customAxios from "../https/customAxios"
import {ResponsePostDto} from "../pages/posts/types/responsePostDto"
import {PostDto} from "../pages/posts/types/postDto"

export const postApi = {
	getPosts: (): Promise<AxiosResponse<ResponsePostDto[]>> => {
		return customAxios.get<ResponsePostDto[]>("posts")
	},

	createPost: (data: PostDto): Promise<AxiosResponse<ResponsePostDto>> => {
		return customAxios.post<ResponsePostDto>("posts", data)
	},

	updatePost: (data: PostDto, params: object): Promise<AxiosResponse<ResponsePostDto>> => {
		return customAxios.put<ResponsePostDto>("posts", data, {params})
	},

	deletePost: (params: object): Promise<AxiosResponse<void>> => {
		return customAxios.delete<void>("posts", {params})
	},
}
