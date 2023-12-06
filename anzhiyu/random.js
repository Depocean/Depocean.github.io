var posts=["2023/12/02/cet/","2023/12/06/blog搭建/","2023/12/03/picture/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };