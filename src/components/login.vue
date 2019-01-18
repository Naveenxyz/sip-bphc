<template>
	<div>
        <div class="main">
            <div class="login-form">
                <h1 class="heading"> LOGIN FOR THE SERVICES</h1>
                <input type="email" placeholder="EMAIL" class="email"> <br>
                <input type="password" placeholder="PASSWORD" class="password"> <br>
                <div class="login-btn">
                    <button class="btn btn-login">Login</button>
                </div>
                <a href="#" class="link">Create a Account</a>      
            </div>
            <div class="side-screen">
                <h1>SIP BPHC</h1>	
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'login'
    }
</script>


<style scoped>


.html{
    height: 100vh;
	background: #ffffff;
	font-family: 'Montserrat', sans-serif;
}
body {
	overflow: hidden;
	font-family: 'Montserrat', sans-serif;
}

.main {                         // total page
	height: 100vh;
	width: 100vw;
	display: flex;
	margin: 0px;
	padding: 0px;
}

input {
    color: #2c395e;
}

.heading {                      
	position: absolute;
	color: #444;
	top: 6vh;
	left: 10vw;
	width: 30vw;
	text-align: center;
	padding-top: 10vh;
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
    //background:linear-gradient(45deg,deeppink, #2c395e );
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
	top: 35vh;
	left: 0vw;
	margin:8px;
	border-radius:50px;
	background: #dfdfdf;
	height: 7%;
    width: 45%;
    color: #444444;

}
.password{
	all: unset;
	position: relative;
	top: 36vh;
	left: 0vw;
	margin:8px;
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
	background:  orange;;
	//background: orange; 
	border-radius: 50px;
	position: relative;
    align-content: center;
    padding: 20px;
	
}
.login-btn {
  

 text-align: center;
 font-size: 1.2rem;


}

.btn-login {
	position: relative;
	top: 45vh;
	left: 0vw;
	align-content: center;
	text-align: center;
}

.btn:hover{
	color: black;
	background:  #2c395e;
	cursor: pointer;
}
.link {
	all: unset;
	color: black;
	font-weight: bold;
	font-size: 1.2rem;
	position: relative;
	top:50vh;
	left: 0%;
	width: 35%;
    align-content: center;
	text-align: center;
    }
    
    .link::after{
        position: absolute;
        content: '';
        height: 4px;
        margin: 30px auto;
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

</style>
