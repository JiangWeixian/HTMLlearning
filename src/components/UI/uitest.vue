<style scoped>
    .lh-36 {
        line-height: 36px;
        height: 36px;
        /*font-size: 24px;*/
    }
    .card {
        margin: 10rem;
    }
    
    button {
        background-color: inherit;
        padding-left: 0;
        padding-right: 1rem;
        color: #0c72ee;
    }
    
    .image-card {
        display: grid;
        grid-template-rows: repeat(3, min-content);
        grid-template-columns: 40% auto;
        grid-auto-rows: min-content;
        width: 50%;
    }
    .image-card .card-img{
        grid-row: 1;
        grid-column: 1 / span 2;
    }
    .image-card .card-content{
        grid-row: 2;
        grid-column: 1 / span 2;
    }
    .image-card .card-action{
        grid-row: 3;
        grid-column: 1 / span 2;
    }

    .horizontal-image-card {
        display: grid;
        grid-template-rows: auto 4rem;
        grid-template-columns: 40% auto;
        grid-auto-rows: min-content;
        width: 50%;
        height: 200px;
    }
    .horizontal-image-card .card-img {
        height: inherit;
        grid-row: 1 / span 2;
        grid-column: 1;
    }

    .horizontal-image-card .card-img img {
        /*width: inherit;*/
        height: inherit;
        display: block;
        object-fit: fill;
    }
    
    .horizontal-image-card .card-content{
        grid-row: 1;
        grid-column: 2;
    }

    .horizontal-image-card .card-action{
        grid-row: 2;
        grid-column: 2;
    }
    
    .reveal-image-card {
        display: grid;
        grid-template-rows: repeat(3, min-content);
        grid-template-columns: 40% auto;
        grid-auto-rows: min-content;
        width: 50%;
        position: relative;
    }
    
    .reveal-image-card .card-intro {
        background-color: white;
        color: black!important;
        font-weight: normal;
    }

    .reveal-image-card .card-img{
        grid-row: 1 / span 2;
        grid-column: 1 / span 2;
    }
    .reveal-image-card .card-content{
        position: absolute;
        width: 100%;
        height: 100%;
        border: none;
        background-color: white;
        border: 1px solid red;
        /*display: none;*/
        left: 0;
        top: calc(100% - 5rem);
    }
    .reveal-image-card .card-action{
        position: relative;
        /*z-index: 99;*/
        background-color: white;
        grid-row: 3;
        grid-column: 1 / span 2;
    }
</style>

<template>
    <div id="CARD" class="paper card reveal-image-card">
        <div class="card-img">
            <img src="https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/projects-onepaper.jpg">
            <div class="card-intro">
                <p class="card-title lh-36">Lorem ipsum dolor sit amet.<i class="material-icons lh-36 pull-right">more_vert</i></p>
                <p class="card-time">2018-03-16</p>
            </div>
        </div>
        <div class="card-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda distinctio maiores, natus officia quas similique? Adipisci assumenda cumque debitis esse labore magni nihil quae quas qui quisquam. Quo, similique.</p>
        </div>
        <div class="card-action">
            <button @click="test">THIS IS A LINK</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "uitest",
        methods: {
            get_issue_bylabel (label, creator) {
                let url = `https://api.github.com/repos/JiangWeixian/HTMLlearning/issues?labels=${label}`;
                return axios.get('https://api.github.com/repos/JiangWeixian/HTMLlearning/issues', {
                    params: {
                        labels: label,
                        creator: creator
                    }
                })
                    .then((res) => {
                        let data = res.data[0].body;
                        return Promise.resolve(data)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            test() {
                axios.get('./static/public/projects/onepaper.json')
                    .then((res) => {
                        console.log(res)
                    })
                // this.get_issue_bylabel('onepaper', 'JiangWeixian')
                //     .then((data) => {
                //         let onepaper = JSON.parse(data)
                //         console.log(Object.keys(onepaper))
                //     })
            }
        },
        created() {
            this.$store.dispatch('set_single_project', { projectName: 'onepaper' })
        }
    }
</script>
