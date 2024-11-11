import Category from "../Components/Category"
import { commonAPI } from "./commonAPI"
import {server_url} from "./server_url"






///add video API

export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}


//getvideos

export const getAllVideoAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}


//get video

export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}


//deletevideo

export const deletevideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}


//add history api

export const addHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

//get history

export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

///deleteHistory

export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}


///add category API

export const addCategoryAPI=async(Category)=>{
    return await commonAPI("POST",`${server_url}/category`,Category)
}

//getCategoryAPI

export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}


//deleteCategory

export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}



//updateCategoryAPI

export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}