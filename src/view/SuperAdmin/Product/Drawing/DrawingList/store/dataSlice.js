import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiDeleteDrawingByDrawingId, apiGetAllDrawingByProductId } from '../../../../../../services/SuperAdmin/Product/DrawingService'

export const getAllDrawingsByProductId = createAsyncThunk(
    'product/details/data/drawing/list',
    async (data) => {
        try {
            const response = await apiGetAllDrawingByProductId(data)
            return response
        } catch (error) {
            return error?.response
        }
    }
)
export const deleteDrawingByDrawingId = createAsyncThunk(
    'product/details/data/drawing/delete',
    async (data) => {
        try {
            const response = await apiDeleteDrawingByDrawingId(data)
            return response
        } catch (error) {
            return error?.response
        }
    }
)

export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
}


export const initialFilterData = {
    status: ''
}

// Helper function to sort drawings by revision_number alphabetically
const sortDrawingsByRevisionNumber = (drawingList) => {
    if (!drawingList || !drawingList.Drawings || !Array.isArray(drawingList.Drawings)) {
        return drawingList
    }
    
    const sortedDrawings = [...drawingList.Drawings].sort((a, b) => {
        const revA = (a.revision_number || '').toString().toUpperCase()
        const revB = (b.revision_number || '').toString().toUpperCase()
        return revA.localeCompare(revB)
    })
    
    return {
        ...drawingList,
        Drawings: sortedDrawings
    }
}

const dataSlice = createSlice({
    name: 'product/details/data',
    initialState: {
        loading: false,
        drawingList: {},
        tableData: initialTableData,
        filterData: initialFilterData,
    },
    reducers: {
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setDrawingList: (state, action) => {
            state.drawingList = sortDrawingsByRevisionNumber(action.payload)
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: {
        [getAllDrawingsByProductId.fulfilled]: (state, action) => {
            const rawData = action.payload.data?.data || []
            state.drawingList = sortDrawingsByRevisionNumber(rawData)
            state.loading = false
        },
        [getAllDrawingsByProductId.pending]: (state, action) => {
            state.loading = true
        },
        [deleteDrawingByDrawingId.fulfilled]: (state, action) => {
            if (action.payload?.status === 200) {
                const updatedDrawingList = {
                    ...state.drawingList,
                    Drawings: state.drawingList?.Drawings?.filter(drawing => drawing?.drawing_id !== action.meta.arg?.drawing_id)
                }
                state.drawingList = sortDrawingsByRevisionNumber(updatedDrawingList)
            }
        }
    },
})

export const { setTableData, setFilterData, setDrawingList } =
    dataSlice.actions

export default dataSlice.reducer
