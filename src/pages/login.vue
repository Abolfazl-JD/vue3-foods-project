<script setup lang="ts">
const router = useRouter()

const username = ref('')
const password = ref('')
const alert = ref('')
const submitForm = () => {
    if (username.value && password.value) router.push('/')
    else {
        alert.value = 'please provide username and login'
        setTimeout(() => {
            alert.value = ''
        }, 5000)
    }
}
</script>

<template>
    <div class="limiter">
        <div class="container-login">
            <div class="wrap-login">
                <form class="login-form">
                    <span class="login-form-title"> Login </span>
                    <div class="wrap-input">
                        <input type="text" class="input" placeholder="username" v-model="username">
                    </div>
                    <div class="wrap-input">
                        <input type="password" placeholder="password" class="input" v-model="password">
                    </div>
                    <div class="container-login-form-btn">
                        <div class="login-form-btn" @click="submitForm">Login</div>
                        <p class="toast-text-alert" v-if="alert">{{ alert }}</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.toast-text-alert {
    color: red;
    position: absolute;
    bottom: 10px;
    font-size: 13px;
    font-weight: bold;
}
</style>

<route>
    {
        "meta" : {
            "layout" : "login"
        }
    }
</route>