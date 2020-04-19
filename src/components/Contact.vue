<template>
    <div class="bg-light py-4">
        <div class="container">
            <p class="title pgray text-center">contact.</p>
            <hr width="50%" />

            <div>
                <input type="text" name="user_name" v-model="name" placeholder="name" class="pinput"/>
            </div>

            <div>
                <input type="email" name="user_email" v-model="email" placeholder="email" class="pinput"/>
            </div>

            <div>
                <textarea name="message" v-model="text" placeholder="message" class="pinput"></textarea>
            </div>

                
            <button @click.prevent="sendEmail">Send</button>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: "Contact",
    data () {
        return {
            email: '',
            name: '',
            text: ''
        }
    },
    methods: {
        sendEmail() {
            
            var obj = {
                user_email: this.email, from_name: this.name,  message_html: this.text, to_name: 'Hrishikesh Paul'
            }

            // emailjs.send('gmail', 'template_zHretJ0d', obj, 'user_8g0rh3d6Qj1QZBEU8USls')
            //     .then((result) => {
            //         console.log('SUCCESS!', result.status, result.text);
            //     }, (error) => {
            //         console.log('FAILED...', error);
            //     });
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