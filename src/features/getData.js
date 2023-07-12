import {createAsyncThunk , createSlice } from "@reduxjs/toolkit";

// Get Search Data From API
export const getSearchData = createAsyncThunk("getSearchData" ,
    async(searchData , {rejectWithValue }) =>{
        // console.log(localStorage.getItem("searchQuery"))
        try {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchData}&app_id=6916ab39&app_key=f71cc348408590c7ceedeae64cbe0c1a`);
            const result = await response.json()
            // console.log("Result--->" , result)
            return result;
        } catch (error) {
            return rejectWithValue("Getting Some Error...", error)
        }
    }
)

export const getSingleSearchData = createAsyncThunk("getSingleSearchData" ,
    async(args , {rejectWithValue }) =>{
        try {
            const response = await fetch("...");
            const result = await response.json()
            return result;
        } catch (error) {
            return rejectWithValue("Getting Some Error...", error)
        }
    }
)



// Create A Slice 
export const getData = createSlice({
    name : "getData",
    initialState : {
        Data : [],
        Loading : false,
        error : null,
        searchData : localStorage.getItem("searchQuery")
    },
    reducers : {
        searchData : (state ,action) =>{
            state.searchData = action.payload
        }
    },
    extraReducers : {
        [getSearchData.pending] : (state) =>{
            state.Loading = true;
        },
        [getSearchData.fulfilled] : (state , action) =>{
            state.Loading = false;
            state.Data = action.payload;
        },
        [getSearchData.rejected] : (state , action) =>{
            state.Loading = false;
            state.error = action.payload;
        },
    }
})
export const { searchData } = getData.actions;
export default getData.reducer;