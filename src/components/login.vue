<script>
export default {
    data() {
        return {

            email: '',
            password: "",
        }
    },

    computed: {
        login() {
            if (this.email == 'iman' && this.password == 'admin') {
                localStorage.setItem('books', JSON.stringify(true))
                this.$router.push({
                    path: '/footer'
                });

            } else {
                localStorage.setItem('books', JSON.stringify(false))
            }
        }
    }
}
</script>

<template>
<div class="container">
    <div class="form">
        <h1>login here</h1>
        <div><label for="name">name:</label>
            <input type="text" id="name" v-model="email"></div>
        <div><label for="pass">password:</label>
            <input type="password" id="pass" v-model="password"></div>
        <button @click=login><span>login</span></button>
    </div>
</div>
</template>

<style scoped>
.container {
    background: #312a3b;
    padding: 10px;
    width: 100vw;
    min-height: 77.6vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    gap: 2rem;
    padding: 20px 10px;
    height: 300px;
    background: rgba(235, 238, 237, 0.164);
    border-radius: 1rem;
    ;
}

.form div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

input {
    height: 30px;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    padding: 5px;
}

label {
    color: #271f33;
    font-family: sans-serif;
    font-size: 14px;
    text-transform: capitalize;
}

button {
  border-radius: 4px;
  background-color: rebeccapurple;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  width: 100px; text-transform: capitalize;
  transition: all 0.5s;
  cursor: pointer;   
  margin: 5px;
}
button:active{
    transform: scale(0.93);
}
button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

button:hover span {
  padding-right: 25px;
}

button:hover span:after {
  opacity: 1;
  right: 0;
}
h1{
    color: #271f33;  text-transform: uppercase; font-family: sans-serif;
}
</style>
