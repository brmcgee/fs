let viewContainer = elem('#viewPanel');
let controlContainer = elem('#control_users');

let commentHTML = '';
let controlPanelHtml = '';


function elem (str) {
    return document.querySelector(str);
};



function displayAll () {
    f_blogs.forEach(blog => {
    
        if (blog.category.trim() === "Military") {


            let html = ` 
                <div class="card" id="blog${blog.id}">
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
            
            f_comment.forEach(comment => {
                commentHTML = '';
                if (comment.post_id == blog.id) {
                    commentHTML +=  `
                    <div class="comment comment${blog.id}">
                        <div class="comment-img-top">
                            <img src="${comment.auth_avatar}" alt="">
                        </div>
                        <div class="comment-body">
                            <div class="comment-title">${comment.author}</div>
                            <div class="comment-body">${comment.comment}</div>                        </div>
                    </div>        
                    `;
                }
                viewContainer.innerHTML += commentHTML;
            });  
            
        }


        });
        
    
};


function displayUsers () {
    f_users.forEach(user => {
    
        controlPanelHtml = ` 
            <div class="user-container">
                <p class="user-name">${user.user_id} - ${user.username}</p>
                <p class="user-password">Password: ${user.userpassword}</p>
            </div>
        `;
        controlContainer.innerHTML += controlPanelHtml;
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

displayAll();
displayUsers();
