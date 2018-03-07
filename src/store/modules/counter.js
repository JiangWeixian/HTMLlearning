import Vue from 'vue'

const state = {
    blog: 'jiangweixian',
    searchContent: '',
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
    articleLists: ['build_website_1'],
    articleThreads: {
        'build_website_1': {
            id: 'build_website_1',
            router: '/articles/build_website_1',
            src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-1stpater-homepage.png',
            alt: 'build_website_1',
            color: 'black',
            time: '2018-03-05',
            content: 'Github个人博客，建站说明第一章。本地化打包Vue项目',
            title: 'Github个人博客 | 建站说明第一章',
            markdownData: "# Github个人博客建立 - 前期准备\n" +
            ">  技术说明；前期准备；\n" +
            "\n" +
            "<!-- TOC -->\n" +
            "\n" +
            "- [Github个人博客建立 - 前期准备](#github个人博客建立---前期准备)\n" +
            "    - [序](#序)\n" +
            "    - [技术要求](#技术要求)\n" +
            "    - [正文 - 前期准备](#正文---前期准备)\n" +
            "        - [建立`Vue`工程](#建立vue工程)\n" +
            "            - [更多细节设置](#更多细节设置)\n" +
            "\n" +
            "<!-- /TOC -->\n" +
            "\n" +
            "## 序\n" +
            "\n" +
            "现在所看到的网站就是寄托于`Github`建立的个人网站。网站所有数据都保存在`Github`上，包括图片、文章等。所未尽善尽美，望海涵。\n" +
            "\n" +
            "本章介绍，如何本地打包`Vue`工程。\n" +
            "\n" +
            "## 技术要求\n" +
            "\n" +
            "* Vue\n" +
            "* JS\n" +
            "\n" +
            "仅仅是如此而已，没有用到其他东西了。\n" +
            "\n" +
            "## 正文 - 前期准备\n" +
            "\n" +
            "### 建立`Vue`工程\n" +
            "\n" +
            "利用`vue-cli`命令初始化`Vue`工程。该教程见[链接](https://cn.vuejs.org/v2/guide/installation.html)。最终建立工程目录如下：\n" +
            "\n" +
            "```\n" +
            ".\n" +
            "├── build\n" +
            "├── config\n" +
            "├── index.html\n" +
            "├── node_modules\n" +
            "├── package.json\n" +
            "├── package-lock.json\n" +
            "├── README.md\n" +
            "├── src\n" +
            "└── static\n" +
            "```\n" +
            "\n" +
            "**注意**：初始化工程时候，并不建议添加任何代码检测工具，以及测试工具。\n" +
            "\n" +
            "在将工程打包之前，对以下文件做修改：\n" +
            "\n" +
            "* `config/index.js`在`build`一项中，修改\n" +
            "\n" +
            "```\n" +
            "assetsPublicPath: '/' 为 assetsPublicPath: './',\n" +
            "```\n" +
            "\n" +
            "**注意：** 意为'./'为根目录，因此在之后代码编写时候要切记这一点。\n" +
            "\n" +
            "对于一个新建工程，以上修改已经足够。此时在工程根目录下执行`npm run build`。可以发现根目录中多了一个`dist`文件夹，文件夹中有`index.html`，如果可以在浏览器中显示，则工程打包成功。\n" +
            "\n" +
            "#### 更多细节设置\n" +
            "\n" +
            "假设并不是新建的`Vue`工程，而在工程中使用了`vue-router`以及使用了本地图片。则需要更多的设置。\n" +
            "\n" +
            "* `vue-router` - 如果要打包工程，必须取消`vue-router`的`history mode`。使用`Github`服务器处理路由。\n" +
            "* 若`vue`组件中使用了本地化文件（包括图片，字体）。则在`build/utils.js`进行修改，如下：\n" +
            "\n" +
            "```\n" +
            "if (options.extract) {\n" +
            "      return ExtractTextPlugin.extract({\n" +
            "        use: loaders,\n" +
            "        fallback: 'vue-style-loader',\n" +
            "        publicPath: '../../'  \n" +
            "      })\n" +
            "    } else {\n" +
            "      return ['vue-style-loader'].concat(loaders)\n" +
            "    }\n" +
            "```\n" +
            "\n" +
            "以上。在工程根目录下执行`npm run build`。可以发现根目录中多了一个`dist`文件夹，文件夹中有`index.html`，如果可以在浏览器中显示下图，则工程打包成功。\n" +
            "\n" +
            "![首页缩略](https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-1stpater-homepage.png)\n" +
            "\n" +
            "**在下一章中，说明如何将项目托管至Github上。**\n"
        }
    }
};

const mutations = {
    SET_SEARCHCONTENT ( state, { searchContent }) {
        state.searchContent = searchContent
    }
};

const actions = {
    set_searchcontent ({ commit }, { searchContent }) {
        commit('SET_SEARCHCONTENT', { searchContent })
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
    get_projectlists (state)  {
        return state.projectLists.map((id) => {
            let item = state.projectThreads[id]
            item.style = {
                color: item.color
            }
            return item
        })
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
    }
}



export default {
    state,
    mutations,
    actions,
    getters
}
