<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
    query: `mutation {
        login(email:"${this.form.email}", password:"${this.form.password}")
    }`,
  variables: {}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("https://testdrive.kompletecare.com/graphql", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    sessionStorage.setItem('token', result.data.login);
    this.$router.push('/dashboard');
  })
  .catch(error => console.log('error', error));
        }
        }
    }
    
</script>

<template>
<div class="login-page flex justify-center items-center">

<div class="login-container">
    <div class="login-header avenir text-primary">Login to authenticate</div>
    <input type="text" name="email" v-model="form.email">
    <input type="password" name="password" v-model="form.password">
    <button class="btn bg-primary" @click="login()">Login</button>
</div>

</div>
</template>

<style lang="scss" scoped>
.login-page{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
}
.login-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    .login-header{
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    input{
            padding: 8px 10px;
    border: 1px solid #2A36A4;
    border-radius: 5px;
    margin: 15px 0;
    }
    button{
        padding: 8px 10px;
    border: 1px solid #2A36A4;
    color: #fff;
    width: auto;
    cursor: pointer;
    border-radius: 5px;
    margin: 15px 0;
    }

}
</style>