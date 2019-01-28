<template>
    <div class="userPost" v-click-outside="outside" ref="postBody"  style="text-align:center;">
        <div class="postHeader">
            <img class="userPostImg" src="" alt="">
            <p>Create A post</p>
            <i class="material-icons closeIcon" @click="outside" ref="closeIcon" style="float: right;transform: translateY(10px);margin-right: 20px;" >clear</i>
        </div>
        <div class="postBody">
            <textarea name="post" @click="showForumSelection" placeholder="Write Your Post Here" class="userPostInput"></textarea>
        </div>
        <div class="forumSelection" ref="showForumSelection">
            <div class="forumSelectioninputCont" style="display: flex;margin: 20px;text-align: left;">
                <div style="flex:1"></div>
                <div style="flex: 2;">
                    <label class="inputCont">One
                        <input type="radio" checked="checked" name="forumSelection">
                        <span class="checkmark"></span>
                    </label>
                    <label class="inputCont">Two
                        <input type="radio" name="forumSelection">
                        <span class="checkmark"></span>
                    </label>
                    <label class="inputCont">Three
                        <input type="radio" name="forumSelection">
                        <span class="checkmark"></span>
                    </label>
                    <label class="inputCont">Four
                        <input type="radio" name="forumSelection">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div style="flex: 2;">
                    <label class="inputCont">Five
                        <input type="radio" name="forumSelection">
                        <span class="checkmark"></span>
                    </label>
                    <label class="inputCont">Six
                        <input type="radio" name="forumSelection">
                        <span class="checkmark"></span>
                    </label>
                    <label class="inputCont">Seven
                        <input type="radio" name="forumSelection">
                        <span class="checkmark"></span>
                    </label>
                    <label class="inputCont">Eight
                        <input type="radio" name="forumSelection">
                        <span class="checkmark"></span>
                    </label>
                </div>

            </div>
        </div>
        <div class="tags" style="display: flex;">
            <div style="flex: 1"></div>
            <button class="tagBtn" style="flex:3 ;"> <i class="bx bx-code tagIcons" style=""></i> </button>
            <button class="tagBtn" style="flex:3 ;"> <i class="bx bx-image-alt tagIcons"></i> </button>
            <button class="tagBtn" style="flex:3 ;"> <i class="bx bx-video tagIcons"></i> </button>
            <button class="tagBtn" style="flex:3 ;"> <i class="bx bx-file-blank tagIcons"></i> </button>
            <div style="flex: 1"></div>
        </div>
        <button ref="postSubmitBtn" class="postSubmitBtn">Submit</button>
    </div>
 
</template>

<style scoped>
    .userPost {
        width: 80%;
        margin-left: 10%;
        margin-top: 5vh;
        margin-bottom: 5vh;
        height: auto;
        background: #2c395e;
        border-radius: 5px;
        transition: 0.2s;
    }
    .postHeader{
        display: flex;
        align-content: center;
        color: white;
        text-align: left;
        border-radius: 5px;
        z-index: 9;
    }
    .postHeader p {
        font-size: 15px;
        padding-top: 15px;
        padding-left: 20px; 
        flex: 10;
    }
    .postHeader img {
        flex: 1;
    }
    .postBody {
        height: auto;
        width: 100%;
        background: #EEEFF7;
        border: 0.5px solid #aaaaaa;
        z-index: 1;
        display: flex;
    }
    .userPostImg {
        height: auto;
        background: orange;
        -webkit-clip-path: circle(30.0% at 50% 50%);
        clip-path: circle(30.0% at 50% 50%);
    }
    .userPostInput{
        background: whitesmoke;
        color: #2c395e;
        text-align: center;
        line-height: 20px;
        margin: auto 0;
        padding: 30px;
        padding-top: 5vh;
        flex: 9;
        height: 15vh;
        text-decoration: none;
        resize: none;
    }

    input:focus, textarea:focus {
        outline: 0;
    }

    .inputCont {
        display: block;
        position: relative;
        margin: 20px;
        padding-left:30px;
        cursor: pointer;
        font-size: 15px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color: #EEEFF7;
    }

    .forumSelection {
        display: none;
    }

    /* Hide the browser's default radio button */
    .inputCont input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    /* Create a custom radio button */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 15px;
        width: 15px;
        background-color: #eee;
        border-radius: 50%;
    }

    /* On mouse-over, add a grey background color */
    .inputCont:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    .inputCont input:checked ~ .checkmark {
        background-color: orange;
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    .inputCont input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the indicator (dot/circle) */
    .inputCont .checkmark:after {
        top: 4px;
        left: 4px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #2c395e;
    }

    .tagBtn {
        all: unset;
        text-align: center;
        background: #eeeeee;
        margin-left: 10px;
        margin-right: 10px;
        padding: 10px;
        border-radius: 100px;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 12px;
        cursor: pointer;
        margin-bottom: 20px;
    }
    .tagBtn:hover {
        transform: translateY(-1px) scale(1.1, 1.1);
        transition: 0.1s;
    }

    .tagIcons {
        margin-right: 20px;
        transform: scale(1.5, 1.5) translateY(0.5px);
        color: darkOrange;
        font-weight: 900;
    }

    .postSubmitBtn {
        all: unset;
        color: #2c395e;
        background: orange;
        border-radius: 5px;
        width: 20%;
        margin-top: 60px;
        margin-left:40% ;
        transform: translateY(-30px);
        padding-top: 10px;
        padding-bottom: 10px;
        cursor: pointer;
        font-weight: 500;
        font-size: 15px;
        font-family: Montserrat;
        display: none;
    }

    .closeIcon {
        color: #EEEFF7;
        display: none;
        cursor: pointer;
    }
@media screen and (max-width: 420px ) {
   .userPostImg{
    padding-left: 5vw;             
    }
    .postHeader p{
        padding-left: 10px;
    }
    .userPost {
        width: 90%;
        margin-left: 5%;
    }
    
}

@media screen and (max-width: 620px ) {
  
}

@media screen and (max-width: 768px ) {
  
}

@media screen and (max-width: 992px ) {
  
}

@media screen and (max-width: 1100px ) {
  
}
</style>

<script>
export default {
    name: 'post',
    data () {
        return {
            textClickCounter: 0,
        }
    },
    methods: {
        showForumSelection () {
            ++this.textClickCounter
            if ( this.textClickCounter % 2  == 0) {
               /* this.$refs.showForumSelection.style.display = 'none'
                this.$refs.postSubmitBtn.style.display = 'none'
                this.$refs.postBody.classList.remove('elevation-24')
                this.$refs.postBody.style.width = '80%'
                this.$refs.postBody.style.marginLeft = '10%' */
                if (window.innerWidth <= '420') {
                    this.$refs.postBody.style.width = '95%'
                    this.$refs.postBody.style.marginLeft = '2.5%'
                } else {
                    this.$refs.postBody.style.width = '90%'
                    this.$refs.postBody.style.marginLeft = '5%'
                }
                this.$refs.showForumSelection.style.display = 'block'
                this.$refs.postSubmitBtn.style.display = 'block'
                this.$refs.postBody.classList.add('elevation-24')
                this.$refs.closeIcon.style.display = 'block'
            } else {
                this.$refs.showForumSelection.style.display = 'block'
                this.$refs.postSubmitBtn.style.display = 'block'
                this.$refs.postBody.classList.add('elevation-24')
                if (window.innerWidth <= '420') {
                    this.$refs.postBody.style.width = '95%'
                    this.$refs.postBody.style.marginLeft = '2.5%'
                } else {
                    this.$refs.postBody.style.width = '90%'
                    this.$refs.postBody.style.marginLeft = '5%'
                }
                this.$refs.closeIcon.style.display = 'block'
            }
        },
        outside () {
            this.$refs.showForumSelection.style.display = 'none'
            this.$refs.postSubmitBtn.style.display = 'none'
            this.textClickCounter = 0
            this.$refs.postBody.classList.remove('elevation-24')
                if (window.innerWidth <= '420') {
                    this.$refs.postBody.style.width = '90%'
                    this.$refs.postBody.style.marginLeft = '5%'
                } else {
                    this.$refs.postBody.style.width = '80%'
                    this.$refs.postBody.style.marginLeft = '10%'
                }
            this.$refs.closeIcon.style.display = 'none'
        }
    },
    directives: {
        'click-outside': {
        bind: function(el, binding, vNode) {
            // Provided expression must evaluate to a function.
            if (typeof binding.value !== 'function') {
                const compName = vNode.context.name
            let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
            if (compName) { warn += `Found in component '${compName}'` }
            
            console.warn(warn)
            }
            // Define Handler and cache it on the element
            const bubble = binding.modifiers.bubble
            const handler = (e) => {
            if (bubble || (!el.contains(e.target) && el !== e.target)) {
                binding.value(e)
            }
            }
            el.__vueClickOutside__ = handler

            // add Event Listeners
            document.addEventListener('click', handler)
                },
        
        unbind: function(el, binding) {
            // Remove Event Listeners
            document.removeEventListener('click', el.__vueClickOutside__)
            el.__vueClickOutside__ = null

        }
        }
    }
}
</script>
