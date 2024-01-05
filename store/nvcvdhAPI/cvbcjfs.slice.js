import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cvbcjf_list = createAsyncThunk(
  "cvbcjfs/api_v1_cvbcjf_list",
  async payload => {
    const response = await apiService.api_v1_cvbcjf_list(payload)
    return response.data
  }
)
export const api_v1_cvbcjf_create = createAsyncThunk(
  "cvbcjfs/api_v1_cvbcjf_create",
  async payload => {
    const response = await apiService.api_v1_cvbcjf_create(payload)
    return response.data
  }
)
export const api_v1_cvbcjf_retrieve = createAsyncThunk(
  "cvbcjfs/api_v1_cvbcjf_retrieve",
  async payload => {
    const response = await apiService.api_v1_cvbcjf_retrieve(payload)
    return response.data
  }
)
export const api_v1_cvbcjf_update = createAsyncThunk(
  "cvbcjfs/api_v1_cvbcjf_update",
  async payload => {
    const response = await apiService.api_v1_cvbcjf_update(payload)
    return response.data
  }
)
export const api_v1_cvbcjf_partial_update = createAsyncThunk(
  "cvbcjfs/api_v1_cvbcjf_partial_update",
  async payload => {
    const response = await apiService.api_v1_cvbcjf_partial_update(payload)
    return response.data
  }
)
export const api_v1_cvbcjf_destroy = createAsyncThunk(
  "cvbcjfs/api_v1_cvbcjf_destroy",
  async payload => {
    const response = await apiService.api_v1_cvbcjf_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cvbcjfsSlice = createSlice({
  name: "cvbcjfs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_cvbcjf_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbcjf_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcjf_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcjf_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbcjf_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcjf_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcjf_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbcjf_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcjf_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcjf_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbcjf_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcjf_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcjf_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbcjf_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcjf_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcjf_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbcjf_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbcjf_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_cvbcjf_list,
  api_v1_cvbcjf_create,
  api_v1_cvbcjf_retrieve,
  api_v1_cvbcjf_update,
  api_v1_cvbcjf_partial_update,
  api_v1_cvbcjf_destroy,
  slice: cvbcjfsSlice
}
