<template>
 <div class="contianer">
  <h1> <span>R</span>outing</h1>
  <router-link class="link" to="/">  home</router-link> 
  <router-link class="link" to="/login">login</router-link> 
  <router-link class="link" to="/footer"><abbr title="do login first ">about us</abbr></router-link> </div>
</template>
<style scoped>
h1{
    color: rgb(44, 33, 54);   padding: 10px;
}
h1 span{
    font-size: 44px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
}
.contianer{
  width: 100vw; padding: 10px;
  height:100px;
  background: rebeccapurple;
  display: flex; justify-content: flex-start; align-items: center; gap: 2rem;
}
.link{
    color: #fff; 
    text-decoration: none;
    font-size: 18px; font-family: sans-serif; text-transform: capitalize;  padding: 10px;  border-radius: 5px;
}
.link:hover{
  background: rgb(117, 79, 155);
  transition: background 0.4s ease; 
}
.router-link-active{
    background: rgb(117, 79, 155);
}
</style>