import { articleData } from '../assets/articles/articles.js'

export const initArticles = () => {
    return new Promise((resolve => {
        resolve(articleData)
    }))
}
