<style scoped>
    .lh-36 {
        line-height: 36px;
        height: 36px;
        /*font-size: 24px;*/
    }
    .card {
        margin: 10rem;
    }
    
    .card-title {
        font-size: 2rem;
    }
    
    button {
        background-color: inherit;
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
    }
</style>

<template>
    <div id="CARD" class="paper card image-card">
        <div class="card-img">
            <img src="https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/projects/projects-onepaper.jpg">
            <div class="card-intro">
                <p class="card-title lh-36">Lorem ipsum dolor sit amet.<i class="material-icons lh-36 pull-right">more_vert</i></p>
                <p class="card-time">2018-03-16</p>
            </div>
        </div>
        <div class="card-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloribus eligendi iusto? Ab adipisci architecto asperiores cupiditate deserunt est eum excepturi explicabo hic natus, nisi optio pariatur perferendis quo quos repellendus repudiandae rerum sint veniam vitae voluptate voluptatibus voluptatum. Ad, assumenda cupiditate eos error illo iste magni, perspiciatis, quam quo rerum veritatis voluptate. Animi aut debitis, deleniti, dignissimos doloribus error esse expedita in laborum molestias nobis quaerat quia quos sequi voluptatum. Adipisci aliquid beatae consequatur culpa ex in laborum nemo pariatur porro, quia quod ratione, repudiandae similique tempore vel? Ab adipisci aliquid architecto blanditiis dicta dignissimos dolore dolorem doloremque earum error et eum ex facere fuga illo illum impedit in ipsa labore, maxime necessitatibus nemo quasi quis quisquam reiciendis rem repellendus repudiandae, rerum sequi sunt suscipit tempora unde ut velit, veniam voluptates voluptatum? Consequatur delectus ducimus ea, fugit, harum ipsa maxime minima natus nisi obcaecati, repellendus tenetur voluptatibus? A, accusamus aliquid asperiores aut commodi consectetur dolore dolorem eum excepturi expedita harum impedit ipsum labore laborum magni molestias nesciunt perferendis placeat praesentium quam quasi quia quidem quo repudiandae saepe sapiente sequi tenetur, vero voluptate voluptatem. Accusamus asperiores assumenda, doloremque doloribus dolorum ducimus hic iste iusto nostrum, optio quia recusandae vel vitae.</p>
        </div>
        <div class="card-action">
            <button>THIS IS A LINK</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "uitest"
    }
</script>
