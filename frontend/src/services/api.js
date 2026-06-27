import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 90000, // 90 seconds - AI chains can take slightly longer under load
})

export const uploadCV = async (file) => {
  try {
    const formData = new FormData()
    formData.append('file', file)
    const response = await api.post('/upload-cv', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return response.data.cv_text
  } catch (error) {
    console.error("Error uploading CV:", error.response?.data || error.message)
    throw error
  }
}

export const analyzeCareer = async (cvText, jobDescription) => {
  try {
    const response = await api.post('/analyze', {
      cv_text: cvText,
      job_description: jobDescription
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    console.error("API Analysis breakdown detail:", {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    })
    throw error
  }
}