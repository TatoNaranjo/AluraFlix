import axios from "axios";

const api = axios.create ({
        baseURL: "http://localhost:3000/",
})

export const search = async (url,setData) =>{
    try{

        const answer = await api.get(url)
        setData(answer.data)
    } catch (error){
        console.log(error)
    }
}

export const deleteVideo = async (url,video) =>{
    const {id} = video
    try{
        await api.delete(`${url}/${id}`)
    } catch (error){
        console.log(error)
    }
}

export const editVideo = async (url,video) =>{
    const {id,title,category,image,description,videoURL} = video
    try{
        await api.put(`${url}/${id}`,{
            title,
            category,
            image,
            videoURL,
            description
        })

    } catch (error){
        console.log(error)
    }

}

export const postVideo = async (url,video) =>{
    const {title,category,image,description,videoURL} = video
    try{
        await api.post(url,{
            title,
            category,
            image,
            videoURL,
            description
        })

    } catch (error){
        console.log(error)
    }
}