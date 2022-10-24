<template>
    <div id="register" class="mt-3">
        <h3>Register here</h3>
        <form class="row" @submit.prevent="saveInterest">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" name="emailAddress" v-model="emailAddress"
                    aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Full name</label>
                <input type="text" class="form-control" name="fullname" v-model="fullname" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Mobile Number</label>
                <input type="text" class="form-control" name="mobileNumber" v-model="mobileNumber">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" name="isInterested" v-model="isInterested" />
                <label for="checkbox mx-3">Are you interested in the event?</label>

            </div>
            <button type="submit" class="btn btn-outline-danger">Register for the event</button>
        </form>

        <section id="contact" class="mt-4">
            <p>For further information contact Spiwe Ndlovu</p>
            <p><i class="bi bi-telephone me-2"></i>Phone: +263 78 3917 708</p>
            <p><i class="bi bi-envelope me-2"></i>Email: sndlovu@newsday.co.zw</p>
        </section>
    </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
export default {
    data() {
        return {
            fullname: '',
            emailAddress: '',
            mobileNumber: '',
            isInterested: false,
        }
    },
    methods: {
        saveInterest: async function (event) {
            const form = new FormData(event.target)
            const formData = Object.fromEntries(form.entries())
            console.log(formData);
            try {
                const docRef = await addDoc(collection(db, "guests"), formData)
                console.log(`Document written with ID: ${docRef}`)
            } catch(e) {
                console.error(`Error adding document: ${e}`);
            }

            // var templateParams = formData
            emailjs.send("service_h5pc8mo", "template_8x2wnz8", formData).then((response) => {
                console.log('Success: ', response.status, response.text);
            }).catch(err => {
                console.error('Failed: ', err);
            })
        }

    }
}

</script>

<style>
#register {
    max-width: 70%;
    margin: auto;
    padding: 1.3rem;
}

.btn {
    border-radius: 0px;
}
</style>