import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {LoadingState} from "../../constants/loadingState"
import {ResponsePostDto} from "../../pages/posts/types/responsePostDto"
import {postApi} from "../../api/postApi"
import {PostDto} from "../../pages/posts/types/postDto"

const sliceName = "posts"

interface PostsState {
	posts: ResponsePostDto[]

	isLoading: LoadingState
}

const initialState: PostsState = {
	posts: [],

	isLoading: LoadingState.Empty,
}

export const getPosts = createAsyncThunk<ResponsePostDto[]>(`${sliceName}/getPosts`, async (params, thunkApi) => {
	try {
		const resp = await postApi.getPosts()
		return resp.data
	} catch {
		return thunkApi.rejectWithValue("Ошибка соединения. Повторите попытку")
	}
})

export const createPost = createAsyncThunk<ResponsePostDto, {data: PostDto}>(`${sliceName}/createPost`, async (params, thunkApi) => {
	try {
		const {data} = params
		const resp = await postApi.createPost(data)
		return resp.data
	} catch {
		return thunkApi.rejectWithValue("Ошибка соединения. Повторите попытку")
	}
})

export const updatePost = createAsyncThunk<ResponsePostDto, {data: PostDto; queryParams: {id: string}}>(
	`${sliceName}/updatePost`,
	async (params, thunkApi) => {
		try {
			const {data, queryParams} = params
			const resp = await postApi.updatePost(data, queryParams)
			return resp.data
		} catch {
			return thunkApi.rejectWithValue("Ошибка соединения. Повторите попытку")
		}
	}
)

export const deletePost = createAsyncThunk<void, {params: {id: string}}>(`${sliceName}/getPosts`, async (params, thunkApi) => {
	try {
		const resp = await postApi.deletePost(params)
		return resp.data
	} catch {
		return thunkApi.rejectWithValue("Ошибка соединения. Повторите попытку")
	}
})

const postsSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		setInitialState: () => {
			return initialState
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getPosts.pending, (state) => {
			state.isLoading = LoadingState.Pending
		})
		builder.addCase(getPosts.fulfilled, (state, action) => {
			state.posts = action.payload
			state.isLoading = LoadingState.Fulfilled
		})
		builder.addCase(getPosts.rejected, (state) => {
			state.isLoading = LoadingState.Reject
		})

		builder.addCase(createPost.pending, (state) => {
			state.isLoading = LoadingState.Pending
		})
		builder.addCase(createPost.fulfilled, (state, action) => {
			state.isLoading = LoadingState.Fulfilled
		})
		builder.addCase(createPost.rejected, (state) => {
			state.isLoading = LoadingState.Reject
		})

		builder.addCase(updatePost.pending, (state) => {
			state.isLoading = LoadingState.Pending
		})
		builder.addCase(updatePost.fulfilled, (state, action) => {
			state.isLoading = LoadingState.Fulfilled
		})
		builder.addCase(updatePost.rejected, (state) => {
			state.isLoading = LoadingState.Reject
		})

		builder.addCase(deletePost.pending, (state) => {
			state.isLoading = LoadingState.Pending
		})
		builder.addCase(deletePost.fulfilled, (state, action) => {
			state.isLoading = LoadingState.Fulfilled
		})
		builder.addCase(deletePost.rejected, (state) => {
			state.isLoading = LoadingState.Reject
		})
	},
})

export const {setInitialState} = postsSlice.actions
export const postsReducer = postsSlice.reducer
