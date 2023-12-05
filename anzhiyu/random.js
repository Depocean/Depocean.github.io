var posts=["2023/12/03/hello-world/","2023/12/03/picture/","2023/12/02/cet/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };