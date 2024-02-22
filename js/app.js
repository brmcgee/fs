function elem (str) {
    return document.querySelector(str);
}
function displayAll () {
    blogData.forEach(blog => {
    
        
        let html = `
        
        <div class="card">
            <div class="card-img-top">
                <img src="${blog.img}" alt="">
            </div>
            <div class="card-body">
                <div class="card-title">${blog.title}</div>
                <div class="card-body">${blog.body}</div>
            </div>
        </div>
        `;
    
        viewContainer.innerHTML += html;
        
        blogComment.forEach(comment => {
            commentHTML = '';
            if (comment.post_id == blog.id) {
                commentHTML +=  `
                <div class="comment">
                    <div class="comment-img-top">
                        <img src="${comment.auth_avatar}" alt="">
                    </div>
                    <div class="comment-body">
                        <div class="comment-title">${comment.author}</div>
                        <div class="comment-body">${comment.comment}</div>
                    </div>
                </div>        
                `;
            }
            viewContainer.innerHTML += commentHTML;
        }) 
    
        
        
    })
    
    };


let viewContainer = elem('#viewCont');
let commentHTML = '';

function displayCards (cat) {
blogData.forEach(blog => {
    console.log(cat)
    if (cat == blog.category) {



        let html = `
        
        <div class="card">
            <div class="card-img-top">
                <img src="${blog.img}" alt="">
            </div>
            <div class="card-body">
                <div class="card-title">${blog.title}</div>
                <div class="card-body">${blog.body}</div>
                <div class="">${blog.comment_count}</div>
            </div>
        </div>
        `;

        viewContainer.innerHTML += html;
        
        blogComment.forEach(comment => {
            commentHTML = '';
            if (comment.post_id == blog.id) {
                commentHTML +=  `
                <div class="comment">
                    <div class="comment-img-top">
                        <img src="${comment.auth_avatar}" alt="">
                    </div>
                    <div class="comment-body">
                        <div class="comment-title">${comment.author}</div>
                        <div class="comment-body">${comment.comment}</div>
                    </div>
                </div>        
                `;
            }
            viewContainer.innerHTML += commentHTML;
        }) 

    };
    
});

};

// returns array of categories 
let categories = [];
function getCategories (blogs) {
    blogs.forEach(b => {
        if (!categories.includes(b.category)) {
            myCat = b.category;
            categories.push(b.category);
            viewContainer.innerHTML += "<a  href='#' id='" + myCat + "'>" + myCat + "</a><br>"
        };
    });
    
}

// getCategories(blogData)
viewContainer.innerHTML += '<br>';
displayAll();
