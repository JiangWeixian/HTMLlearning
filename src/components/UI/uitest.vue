<style scoped>
    .card {
        margin: 10rem;
        display: grid;
        grid-template-rows: repeat(3, min-content); 
        grid-template-columns: 40% auto; 
        grid-auto-rows: min-content;
    }
    .image-card {
        width: 50%;
    }
    .image-card .card-img{
        grid-row: 1 / span 2;
        grid-column: 1 / span 2;
    }
    .image-card .card-content{
        grid-row: 3;
        grid-column: 1 / span 2;
    }

    .horizontal-image-card {
        width: 50%;
    }
    
    
    .horizontal-image-card .card-img {
        grid-row: 1 / span 3;
        grid-column: 1;
    }
    .horizontal-image-card .card-content{
        grid-row: 1 / span 3;
        grid-column: 2;
    }
</style>

<template>
    <div id="CARD" class="paper card image-card">
        <div class="card-img">
            <img src="https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/projects-onepaper.jpg">
            <div class="card-intro">
                <p class="card-title">Lorem ipsum dolor sit amet.</p>
                <p class="card-time">2018-03-16</p>
            </div>
        </div>
        <div class="card-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, architecto at, consequatur dolorem dolorum eaque eveniet exercitationem in maiores nobis odio officia, quod ratione sequi sunt suscipit ullam vel velit.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "uitest"
    }
</script>
