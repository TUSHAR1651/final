let post = document.querySelector(".post-btn");
let chatarea = document.querySelector(".chatarea");
let text = document.querySelector("#content");
let comment = document.querySelector('.comment');

let heart = true;

// comment.addEventListener('click',function(e){
//     let ch = document.createElement('div');
//     ch.innerHTML = `

//     `
// });

post.addEventListener('click',function(e){
    console.log("clicked");
    let chat = document.createElement("div");
    chat.innerHTML = `<div class="posts">
    <div class="left">
        <div class="prof-img">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="#">
        </div>
        <div class="post-right">
            <div class="post-det">
                <h4>Name</h4>
                <h5>@tushar1651</h5>
                <div class="post-right-btns">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="#">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="#">
                </div>
            </div>
            <div class="post-txt-area">
                <textarea name="post" id="post-area-text" cols="30" rows="10">${text.value}</textarea>
            </div>
            <div class="like-cmnt-btns">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="#" class = "comment">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="#" class = "like">
            </div>
        </div>
    </div>
</div>`
    chatarea.appendChild(chat);
});


const like = document.querySelectorAll('.like');
like.addEventListener('click',function(e){
for(let i=0; i<like.length; i++){
    if(heart){
        like[i].src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455';
    }
    else{
        like[i].src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679';
    }
    heart = !heart;
}
});