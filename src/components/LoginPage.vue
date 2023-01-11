<template>
<div class="login-page">
    <div class="movie-img">
    <img class="img-mob"
        src="../assets/LoginPage.jpg"
        alt="dummy-img"
        
    />
    </div>
<div class="login-form">
    <div class="username">
        <input class="user-input" type="text" placeholder="username"  v-model="username"/>
    </div>
    <div class="password">
        <input class="pass-input" type="password" placeholder="password" v-model="password" />
    </div>
    <div class="login">
    <button @click="loginCredentials()" >Login</button>
    </div>

</div>
</div>  
</template>

<script>
export default {
    name:"loginPage",
    data() {
        return {
            username:'',
            password:''
        }
    },
    methods:{
        loginCredentials(){
            if(this.username == 'admin' && this.password == 'admin'){
                console.log('valid');
                return window.location.pathname='/homepage';
            } else {
                alert('invalid credentials')
            }
        }

    }

}
</script>

<style lang="scss" scoped>
// body{
//     background-color: black;
// }
.login-page {
    width: 1000px;
    height: 500px;
    margin: 4% auto;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to right, red,white,red,white,red,black,red);
    border-radius: 40px;


    @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 350px;
    height: 600px;
    margin: 8% 4%;
    display: flex;
    justify-content: space-between;
    }

    .movie-img{
        height: 500px;
        width: 600px;
        @media screen and (min-width: 375px) and (max-width: 767px) {
            height: 600px;
            width: 400px;
        }

        .img-mob{
            width:600px;
            height:500px;
            border-radius: 40px 0 0 40px;
            @media screen and (min-width: 375px) and (max-width: 767px) {
                position: absolute;
                width: 350px;
                height: 600px;
        }
        }
    }
    .login-form{
        width: 400px;
        height: 300px;
        margin: 10% 4%;
        @media screen and (min-width: 375px) and (max-width: 767px) {
            position: absolute;
            width: 250px;
            height: 200px;
            margin: 50% 13%;
            }
        }

    .username{
        width: 280px;
        height: 100px;
        margin: 40px 20px 0px 20px;
        @media screen and (min-width: 375px) and (max-width: 767px) {
               width: 200px;
    height: 50px;
        margin: 20px 10px 0px 20px;
        }

        .user-input{
            width: 270px;
        height: 50px;
        @media screen and (min-width: 375px) and (max-width: 767px) {
            width: 200px;
    height: 35px;
        }
        }
    }

    .password{
        height: 90px;
    width: 280px;
    margin: 0 20px 0px 20px;
    @media screen and (min-width: 375px) and (max-width: 767px) {
           width: 200px;
    height: 50px;
   margin: 10px 15px 10px 20px;
        }

        .pass-input{
            width: 270px;
        height: 50px;
        @media screen and (min-width: 375px) and (max-width: 767px) {
                width: 200px;
    height: 35px;
        }
        }
    }

    .login {
        margin: auto;
    width: 80px;
    height: 40px;
    @media screen and (min-width: 375px) and (max-width: 767px) {
                width: 80px;
                height: 30px;
        }

    button{
        width: 80px;
    height: 40px;
    @media screen and (min-width: 375px) and (max-width: 767px) {
            width: 80px;
            height: 30px;
        }
    }
    }
}

input{
    text-align: center;
    font-size: 20px;
}

</style>>