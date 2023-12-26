var posts=["2023/12/02/cet/","2023/12/06/blog搭建/","2023/12/17/markdown语法/","2023/12/03/picture/","2023/12/21/图片的插入/","2023/12/08/blog主题及美化/","2023/12/15/开始blog写作/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };