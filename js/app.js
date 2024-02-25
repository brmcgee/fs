let viewContainer = elem('#viewPanel');
let controlContainer = elem('#cp_users');

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
                    <div class="card-top">
                        <img class = "card-top-img" src="${blog.author_avatar}" alt="">
                        <div class="card-top-title">${blog.author}</div>
                    </div>
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
                    <div class="comment">
                        <div class="comment-img-top">
                            <img src="${comment.auth_avatar}" alt="">
                        </div>
                        <div class="comment-body">
                            <div class="comment-title">${comment.author}</div>
                            <div class="com-body">${comment.comment}</div>                        </div>
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




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function fsDropdown(str) {
    document.getElementById(str).classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }