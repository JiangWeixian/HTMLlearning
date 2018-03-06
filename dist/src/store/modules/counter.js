'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
    blog: 'jiangweixian',
    searchContent: '',
    articleLists: [],
    articleThreads: {
        'a_2': {
            id: 'a_2',
            articleTitle: '如何在线装换Markdown文件',
            timestamp: '2018-03-05',
            markdownData: "# [Vuelog](https://vuelog.js.org/)\n" + "\n" + "[![ES2015+](https://img.shields.io/badge/es-2015+-ff69b4.svg)](https://kangax.github.io/compat-table/es6/)\n" + "[![CircleCI](https://img.shields.io/circleci/project/myst729/Vuelog/master.svg)](https://circleci.com/gh/myst729/Vuelog/tree/master)\n" + "[![Codecov](https://img.shields.io/codecov/c/github/myst729/Vuelog/master.svg)](https://codecov.io/github/myst729/Vuelog)\n" + "[![Release](https://img.shields.io/github/release/myst729/Vuelog.svg)](https://github.com/myst729/Vuelog/releases/latest)\n" + "[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/myst729/Vuelog/blob/master/LICENSE)\n" + "\n" + "> A backend-free blog system built on top of Vue.js\n" + "\n" + "\n" + "## Browsers Support\n" + "\n" + "| <img src=\"https://myst729.github.io/blog-images/browsers/chrome/chrome_256x256.png\" alt=\"Chrome\" width=\"96\" height=\"96\"><br>Chrome | <img src=\"https://myst729.github.io/blog-images/browsers/edge/edge_256x256.png\" alt=\"Edge\" width=\"96\" height=\"96\"><br>Edge | <img src=\"https://myst729.github.io/blog-images/browsers/firefox/firefox_256x256.png\" alt=\"Firefox\" width=\"96\" height=\"96\"><br>Firefox | <img src=\"https://myst729.github.io/blog-images/browsers/opera/opera_256x256.png\" alt=\"Opera\" width=\"96\" height=\"96\"><br>Opera | <img src=\"https://myst729.github.io/blog-images/browsers/safari/safari_256x256.png\" alt=\"Safari\" width=\"96\" height=\"96\"><br>Safari | <img src=\"https://myst729.github.io/blog-images/browsers/internet-explorer/internet-explorer_256x256.png\" alt=\"Internet Explorer\" width=\"96\" height=\"96\"><br>Internet Explorer |\n" + "| :------: | :------: | :------: | :------: | :------: | :--: |\n" + "| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✘ |\n" + "\n" + "\n" + "## Build Setup\n" + "\n" + "```bash\n" + "# install dependencies\n" + "npm install\n" + "\n" + "# serve with hot reload at localhost:8080\n" + "npm run dev\n" + "\n" + "# build for production with minification, and update documentation as well\n" + "npm run build\n" + "\n" + "# build for production, and view the bundle analyzer report\n" + "npm run report\n" + "\n" + "# build for production, but dependencies are loaded from jsDelivr CDN\n" + "npm run lite\n" + "\n" + "# run unit tests\n" + "npm run unit\n" + "\n" + "# run e2e tests\n" + "npm run e2e\n" + "\n" + "# run all tests\n" + "npm run test\n" + "```\n" + "\n" + "For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).\n" + "\n" + "If you just want to write something, grab the latest release package [here](https://github.com/myst729/Vuelog/releases/latest).\n" + "\n" + "\n" + "## Documentation\n" + "\n" + "https://vuelog.js.org/\n" + "\n" + "\n" + "## Changelog\n" + "\n" + "https://vuelog.js.org/#/page/changelog/\n" + "\n" + "## License\n" + "\n" + "[MIT](http://opensource.org/licenses/MIT)\n" + "\n" + "Copyright (c) 2016-2017 [Leo Deng](https://myst729.github.io/)"
        }
    }
};

var mutations = {
    SET_SEARCHCONTENT: function SET_SEARCHCONTENT(state, _ref) {
        var searchContent = _ref.searchContent;

        state.searchContent = searchContent;
    }
};

var actions = {
    set_searchcontent: function set_searchcontent(_ref2, _ref3) {
        var commit = _ref2.commit;
        var searchContent = _ref3.searchContent;

        commit('SET_SEARCHCONTENT', { searchContent: searchContent });
    }
};

var getters = {
    currentArticle: function currentArticle(state) {
        return function (id) {
            return state.articleThreads[id];
        };
    },
    get_seachcontent: function get_seachcontent(state) {
        return state.searchContent;
    }
};

var api = {
    createArticleThread: function createArticleThread(state, id, thread) {
        _vue2.default.set(state.articleThreads, id, {
            id: id,
            markdownData: thread.markdownData
        });
    },
    updateArticleList: function updateArticleList(state, id) {
        state.articleLists.push(id);
    }
};

exports.default = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};
//# sourceMappingURL=counter.js.map