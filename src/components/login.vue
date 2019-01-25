<template>
        <div class="main">
            <div class="login-form" style="text-align: center;">
                <h2 class="heading"> Login Using Your Bits Mail</h2>
                <input type="email" v-model="email" placeholder="EMAIL" class="email"> <br>
                <input type="password" v-model="password" placeholder="PASSWORD" class="password"> <br>
                <button class="btn btn-login" @click="login">Login</button> <br>
                <a @click.prevent="$router.push('signup')" class="link">Create a Account</a>      
            </div>
            <div class="side-screen">
                <h1>Social Net</h1>	
            </div>
        </div>
</template>

<script>
import * as firebase from 'firebase'
    export default {
		name: 'login',
		data () {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			login () {
				var vm = this
				if (this.email && this.password) {
					firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
						resp => {
							alert('Logged in succesfully')
							console.log(resp)
							vm.$router.push('home')
						}
					).catch(
						err => {
							alert(err)
						}
					)
				} else {
					alert('Enter Email and Password')
				}
			}
		}
    }
</script>


<style scoped>
 
.main {      /* total page */
	height: 100vh;
	width: 100vw;
	display: flex;
	margin: 0px;
	padding: 0px;
	font-family: 'Montserrat';
}

input {
    color: #2c395e;
}

.heading {                      
	position: relative;
	color: #444;
	margin-top: 15vh;
	margin-bottom: 15vh;
	text-align: center;
}


.login-form{	
	flex: 1;
	color:  white;
	float:left;
	width:50vw;
    text-align: center;
	height: 100vh;
	background: #ffffff	;
}

.side-screen{
	font-size: 4em;
	flex: 1;
	height: 100vh;
	width:50vw;
	text-align: center;
    /* background:linear-gradient(45deg,deeppink, #2c395e ); */
    background:#2c395e;  
}

.side-screen h1 {
	height: 30vh;
	transform: translateY(47.5vh);
	color: orange;
	font-size: 4rem;
	padding: 0px;
	margin: 0px;
}

.email{
	all: unset;
	position: relative;
	border-radius:50px;
	background: #dfdfdf;
	height: 7%;
    width: 45%;
    color: #444444;

}
.password{
	all: unset;
	position: relative;
	margin-top: 20px;
	border-radius:50px;
	background: #dfdfdf;
	height: 7%;
    width: 45%;
    color: #444444;
}

/* input:focus{
	color: black;
} */

.btn {
    all: unset;
    color:black;
	height: 6%;
	width: 12%;
	background:  orange;
	border-radius: 50px;
	position: relative;
    align-content: center;
    padding: 10px 20px 10px 20px;
	transition: 0.5s;
}

.btn-login {
	position: relative;
	margin-top: 10vh;
	margin-bottom: 40px;
	align-content: center;
	text-align: center;
}

.btn:hover{
	color: white;
	background:  #2c395e;
	cursor: pointer;
}
.link {
	all: unset;
	color: black;
	font-weight: bold;
	font-size: 1.2rem;
	position: relative;
	width: 35%;
    align-content: center;
	text-align: center;
    }
    
    .link::after{
        position: absolute;
        content: '';
        height: 4px;
        margin: 35px auto;
        left: 0;
        right: 0;
        width: 50%;
        background: #008000;
        transition: 0.5s;
    }

.link:hover{
	color: orange;
	cursor: pointer;
	
}

.link:hover:after {
  left: -5%;
  width: 110%;
  background: orange;
}

@media screen and (min-width: 1000px) {
	.btn-login {
		padding-left: 50px;
		padding-right: 50px;
	}
}

@media screen and (max-width: 1000px ) {
	.email {
		width: 70%;
	}
	.password {
		width: 70%;
	}
	.btn-login {
		width: 30%;
	}
}

@media screen and (max-width: 800px ) {
	.email {
		width: 80%;
	}
	.password {
		width: 80%;
	}
	.btn-login {
		width: 50%;
	}
}

@media screen and (max-width: 640px ) {
	.side-screen {
		display: none;
	}
	.login-form {
		width: 100vw;
	}
	.email {
		width: 50%;
	}
	.password {
		width: 50%;
	}
	.btn {
		width: 30%;
		padding: 5px 15px 5px 15px;
	}
	.heading {
		padding-left: 40px;
		padding-right: 40px;
		margin-top: 15vh;
		margin-bottom: 20vh;
	}
}

@media screen and (max-width: 420px ) {
	.side-screen {
		display: none;
	}
	.email {
		width: 80%;
	}
	.password {
		width: 80%;
	}
	.btn {
		padding: 5px 15px 5px 15px;
	}
	.heading {
		padding-left: 40px;
		padding-right: 40px;
		margin-top: 15vh;
		margin-bottom: 20vh;
	}
}

</style>
