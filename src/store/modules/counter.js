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
    articleLists: ['build_website_1', 'build_website_2','build_website_3'],
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
        },
        'build_website_2': {
            id: 'build_website_2',
            router: '/articles/build_website_2',
            src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-1stpater-homepage.png',
            alt: 'build_website_2',
            color: 'black',
            time: '2018-03-16',
            content: 'Github个人博客，建站说明第二章。托管代码到GITHUB。',
            title: 'Github个人博客 | 建站说明第二章',
            markdownData: "# Github个人博客建立 - 托管代码\n" +
            ">  利用Github建立个人博客；\n" +
            "\n" +
            "## 序\n" +
            "\n" +
            "本章说明，如何将上一章节中本地打包好的代码文件托管至`Github`。\n" +
            "\n" +
            "至于为什么将选择`Github`作为托管网站？\n" +
            "\n" +
            "免费啊，大兄弟～\n" +
            "\n" +
            "## 技术要求\n" +
            "\n" +
            "只需要一个`Github`账号。以及初步使用技巧，如果你是从零开始使用`Github`，请点击[官方文档](https://help.github.com/)学会`Github`使用。没有比它说明的更详细了。\n" +
            "\n" +
            "## 正文 - 托管到Github\n" +
            "\n" +
            "在本小节之前，请确认已经具有向`Github`提交代码的权限，代码权限查看：\n" +
            "\n" +
            "![权限查看](https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-2stpater-pushtogithub.png)\n" +
            "\n" +
            "如果该项内部没有内容，请再次确认**官方教程**。\n" +
            "\n" +
            "初始化工程为`Git`工程。初始化工程方法如下（如果已经进行，请跳过）：\n" +
            "\n" +
            "```shell\n" +
            "#在工程根目录下\n" +
            "git init\n" +
            "git remote add <工程地址>\n" +
            "```\n" +
            "\n" +
            "对于默认利用`vue-cli`创建的工程而言，`.gitignore`文件默认将`dist`排除在外。找到这个文件，并将这句话删掉。\n" +
            "\n" +
            "```shell\n" +
            "git add *\n" +
            "git commit -m \"first commit\"\n" +
            "git push -u origin master\n" +
            "```\n" +
            "\n" +
            "此时刷新页面，就可以看到页面中已经有我们的工程。\n" +
            "\n" +
            "![工程设置](https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-2stpater-setting.png)\n" +
            "\n" +
            "在工程上方，我们可以上图所示，点击`setting`，在**Options**一项中找到**GitHub Pages**。在`source`下拉菜单中选择`master`分支。（重点不在于哪个分支，只要选择有用`dist`文件夹的那个分支，如果没有，下拉菜单是无法选择的）\n" +
            "\n" +
            "\n"
        },
        'build_website_3': {
            id: 'build_website_3',
            router: '/articles/build_website_3',
            src: 'https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-1stpater-homepage.png',
            alt: 'build_website_3',
            color: 'black',
            time: '2018-03-16',
            content: 'Github个人博客，建站说明第三章。使用Github保存图片。',
            title: 'Github个人博客 | 建站说明第三章',
            markdownData: "# 使用Github托管图片\n" +
            "> 将Github作为博客图床\n" +
            "\n" +
            "## 序\n" +
            "\n" +
            "试过用阿里云的OSS作为图床。其实并不难，只要注册阿里云，然后开启阿里云OSS服务，然后按照官方教程来就可以了。就算找不到官方教程，里面那些按钮随便点点，也能摸清楚一点门路。\n" +
            "\n" +
            "`Github`和阿里云此类相比，最大优势就是免费了。而且只要`Github`不抽风，加载速度还是可以的。\n" +
            "\n" +
            "## 正文\n" +
            "\n" +
            "博客或网页中一般都含有图片。我们将这些图片随着工程一起上传到`Github`。和工程文件一样，这些图片都是可以在`Github`项目页上找到的。例如该博客图片[存放地址](https://github.com/JiangWeixian/HTMLlearning/tree/master/README)。\n" +
            "\n" +
            "以下图为例\n" +
            "\n" +
            "![图片查看实例](https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-1stpater-homepage.png)\n" +
            "\n" +
            "其地址为`https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-1stpater-homepage.png`\n" +
            "\n" +
            "在[存放地址](https://github.com/JiangWeixian/HTMLlearning/tree/master/README)点击任意图像地址，然后在新标签页中的图片右键新标签页打开。就可以看到类似上图以`raw.githubusercontent.com`为前缀的地址。大胆的引用到网页中吧。\n" +
            "\n" +
            "## 后续\n" +
            "\n" +
            "至此，简单博客搭建都已经完成。和`HEXO`此类博客框架相比，自己使用`VUE`构建博客，缺点在于：\n" +
            "\n" +
            "* 每次更改博客内容，都需要从头开始`build`，然后`push`此类步骤。\n" +
            "\n" +
            "但是页面整体风格，完全都在你的掌控之中，也属于乘机学习`VUE`的方式。相信我...你一定会遇到更多的坑。\n"
        },
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
