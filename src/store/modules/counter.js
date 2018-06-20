import Vue from 'vue'
import axios from 'axios'

const state = {
    author: 'JiangWeixian',
    apiUrl: './static/public/',
    searchContent: '',
    onepaperLists: [],
    onepaperThreads: {},
    projectLists: ['onepaper', 'phoneclass', 'gan'],
    projectThreads: {
        'onepaper': {
            id: 'onepaper',
            router: '/onepaper',
            src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/projects-onepaper.jpg',
            alt: 'onepaper',
            color: 'white',
            title: 'ONEPAPER',
            time: '2017-10-1',
            content: '单页Vue页面，UI/动画/组件设计。属于练手项目'
        },
        'phoneclass': {
            id: 'phoneclass',
            router: 'https://github.com/JiangWeixian/tf-mobilenet-vue',
            src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/projects-phone.jpg',
            alt: 'phoneclass',
            color: 'white',
            title: 'Tensorflow+Vue实现图像分类',
            time: '2018-05-10',
            content: '结合Tensorflow+Vue实现对手机摄像头画面中图像进行分类，网络模型基于ImageNet训练得到。'
        },
        'gan': {
            id: 'gab',
            router: 'https://github.com/JiangWeixian/pytorch-cifar',
            alt: 'gan',
            color: 'white',
            src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/project-gan.jpg',
            title: 'gan',
            time: '2018-04-05',
            content: '生成对抗网络实现分类'
        }
    },
    articleLists: ['build_website', 'js_tips', 'nznd', 'js_books'],
    articleThreads: {
        'build_website': {
            id: 'build_website',
            router: 'https://github.com/JiangWeixian/articles/blob/master/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/content.md',
            src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-1stpater-homepage.png',
            alt: 'build_website_1',
            color: 'black',
            time: '2018-03-05',
            content: 'Github个人博客 - Vue/图片池',
            title: 'Github建博客系列'
        },
        'js_tips': {
            id: 'js_tips',
            router: 'https://github.com/JiangWeixian/JS-Tips',
            src: 'https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/img/js-tips.png',
            alt: 'js_tips',
            color: 'black',
            time: '2018-05-10',
            content: '使用JavaScript过程中一些HACKS技巧性总结。不仅仅包括JS，还有一些关于CSS等之类的技巧。',
            title: 'JS-Tips'
        },
        'nznd': {
            id: 'nznd',
            router: "https://github.com/JiangWeixian/articles/blob/master/%E4%B8%8D%E4%BD%9C%E6%AD%BB%E5%B0%B1%E4%B8%8D%E4%BC%9A%E6%AD%BB/content.md",
            src: 'https://raw.githubusercontent.com/JiangWeixian/articles/master/%E4%B8%8D%E4%BD%9C%E6%AD%BB%E5%B0%B1%E4%B8%8D%E4%BC%9A%E6%AD%BB/img/title.jpeg',
            alt: 'nznd',
            color: 'white',
            time: '2018-05-13',
            content: '尝试新事物，完全属于不作死就不会死的行为。',
            title: 'NZND - 不作死就不会死'
        },
        'js_books': {
            id: 'js_books',
            router: "https://github.com/JiangWeixian/JS-Books",
            src: 'https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/README/Javascript-books.jpg',
            alt: 'js_books',
            color: 'white',
            time: '2018-05-13',
            content: '程序猿书籍和公开课阅读笔记。',
            title: '永远保持饥渴'
        }
    }
};

const mutations = {
    SET_SEARCHCONTENT ( state, { searchContent }) {
        state.searchContent = searchContent
    },
    SET_SINGLE_PROJECT (state, { data, projectName }) {
        let projectsLists = `${projectName}Lists`,
            projectThreads = `${projectName}Threads`;
        state[projectsLists] = Object.keys(data);
        state[projectThreads] = data;
    }
};

const actions = {
    set_searchcontent ({ commit }, { searchContent }) {
        commit('SET_SEARCHCONTENT', { searchContent })
    },
    set_single_project (context , { projectName }) {
        let projectsLists = `${projectName}Lists`,
            projectThreads = `${projectName}Threads`,
            url = `${context.state.apiUrl}projects/${projectName}.json`;
        let fetchFlag = api.isEmptyArr(context.state[projectsLists]) || api.isEmptyObject(context.state[projectThreads]);
        if ( fetchFlag ) {
            api.fetch(url)
                .then((data) => {
                    context.commit('SET_SINGLE_PROJECT', { data: data, projectName: projectName })
                })
        }
        else {
            console.log('already exited')
        }
    }
};

const getters = {
    currentArticle: (state) => (id) => {
        return state.articleThreads[id]
    },
    get_articlelists (state) {
        return state.articleLists.map((id) => {
            let item = state.articleThreads[id]
            item.style = {
                color: item.color
            }
            return item
        })
    },
    get_articlelens (state) {
        return state.articleLists.length
    },
    get_projectlists (state)  {
        return state.projectLists.map((id) => {
            let item = state.projectThreads[id]
            item.style = {
                color: item.color
            }
            return item
        })
    },
    get_projectlens (state) {
        return state.projectLists.length
    },
    get_single_project: (state) => (label) => {
        let projectsLists = `${label}Lists`,
            projectThreads = `${label}Threads`;
        let flag = api.isEmptyArr(state[projectsLists]) || api.isEmptyObject(state[projectThreads]);
        if ( flag ) {
            return []
        }
        else {
            return state[projectsLists].map((id) => {
                return state[projectThreads][id]
            })
        }
    },
    get_seachcontent ( state ) {
        return state.searchContent;
    }
};

const api = {
    createArticleThread (state, id, thread) {
        Vue.set(state.articleThreads, id, {
            id: id,
            markdownData: thread.markdownData
        })
    },
    updateArticleList (state, id) {
        state.articleLists.push(id)
    },
    fetch (url) {
        return axios.get(url)
            .then((res) => {
                let data = res.data;
                return Promise.resolve(data)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    isEmptyObject (obj) {
        if (Object.keys(obj).length !== 0) {
            return false
        }
        return true
    },
    isEmptyArr (arr) {
        if (Array.isArray(arr) && arr.length !== 0) {
            return false
        }
        return true
    }
}



export default {
    state,
    mutations,
    actions,
    getters
}
