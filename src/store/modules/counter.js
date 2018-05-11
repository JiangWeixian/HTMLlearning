import Vue from 'vue'
import axios from 'axios'

const state = {
    author: 'JiangWeixian',
    apiUrl: './static/public/',
    searchContent: '',
    onepaperLists: [],
    onepaperThreads: {},
    projectLists: ['onepaper', 'plugins', 'ui'],
    projectThreads: {
        'onepaper': {
            id: 'onepaper',
            router: '/onepaper',
            src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/projects-onepaper.jpg',
            alt: 'onepaper',
            color: 'white',
            title: 'ONEPAPER',
            time: '2018-10-1',
            content: '单页Vue页面，UI/动画/组件设计。属于练手项目'
        },
        'plugins': {
            id: 'plugins',
            router: '/',
            src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/projects-components.jpg',
            alt: 'plugins',
            color: 'white',
            title: 'PLUGINS',
            time: '2018-03-05',
            content: '具有实际功能的可用插件'
        },
        'ui': {
            id: 'ui',
            router: '/',
            alt: 'ui',
            color: 'white',
            src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/projects-uirules.jpg',
            title: 'UI',
            time: '2018-10-1',
            content: 'Blog UI 设计规范'
        }
    },
    articleLists: ['build_website'],
    articleThreads: {
        'build_website': {
            id: 'build_website',
            router: 'https://github.com/JiangWeixian/HTMLlearning/blob/dev/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/1-%E5%89%8D%E6%9C%9F%E5%87%86%E5%A4%87.md',
            src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-1stpater-homepage.png',
            alt: 'build_website_1',
            color: 'black',
            time: '2018-03-05',
            content: 'Github个人博客 - Vue/图片池',
            title: 'Github建博客系列'
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
