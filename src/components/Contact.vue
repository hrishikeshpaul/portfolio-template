<template>
    <div class="bg-light py-4">
        <div class="container">
            <p class="title pgray text-center">contact.</p>
            <hr width="50%" />
            <br />
            <div class="text-center">
                <div class="mb-3">
                    <input type="text" name="user_name" v-model="name" placeholder="name" class="pinput pgray"/>
                </div>

                <div class="my-3">
                    <input type="email" name="user_email" v-model="email" placeholder="email" class="pinput pgray"/>
                </div>

                <div class="my-3">
                    <textarea name="message" v-model="text" placeholder="message" class="pinput pgray" rows="4"></textarea>
                </div>

                <button @click.prevent="sendEmail" class="mt-1 btn w-50 mb-3">Send</button>
            </div>

            <Snackbar :showSnackbar="showSnackbar" @close="closeSnackbar" :snackbarMessage="snackbarMessage" :snackbarColor="snackbarColor" />
            
        </div>
    </div>
</template>

<script>
import config from '../../config'
import emailjs from 'emailjs-com';

import Snackbar from './helpers/Snackbar'

export default {
    name: "Contact",
    components: {
        Snackbar
    },
    data () {
        return {
            email: '',
            name: '',
            text: '',
            showSnackbar: false,
            snackbarMessage: '',
            snackbarColor: ''
        }
    },
    methods: {
        closeSnackbar(val) {
            if (!val) {
                setTimeout(() => { 
                    this.showSnackbar = val
                    }, 1000);
            }
            
        },
        sendEmail() {
            if (!this.email || !this.name || !this.text) {
                this.showSnackbar = true
                this.snackbarMessage = 'Please all the fields'
                this.snackbarColor = 'rgb(212, 149, 97)'
            } else {
                var obj = {
                    user_email: this.email, from_name: this.name,  message_html: this.text, to_name: 'Hrishikesh Paul'
                }

                emailjs.send(config.emailjs.serviceID, config.emailjs.templateID, obj, config.emailjs.userID)
                    .then((result) => {
                        this.showSnackbar = true
                        this.snackbarMessage = 'Thanks! Message recieved.'
                        this.snackbarColor = '#1aa260'

                        this.email = ''
                        this.text = ''
                        this.name = ''
                    }, (error) => {
                        this.showSnackbar = true
                        this.snackbarMessage = 'Oops! Something went wrong.'
                        this.snackbarColor = 'rgb(212, 149, 97)'
                    });
            }
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 30px;
    font-weight: 500;
}
.title1 {
    font-size: 24px;
    font-weight: 400;
}

.title2 {
    font-size: 20px;
    font-weight: 400;
}

.title3 {
    font-size: 16px;
    font-weight: 400;
}

.pinput {
    font-size: 18px;
    outline: none;
    border: none;
    border-radius: 7px;
    padding: 10px;
    width: 50%;
}

.btn {
    border-color: #669DB3FF;
    color: #669DB3FF
}

.btn:hover {
    background-color: #669DB3FF;
    border-color: #669DB3FF;
    color: white;
}

.btn:focus {
    background-color: #669DB3FF;
    border-color: #669DB3FF;
    color: white;
}


</style>