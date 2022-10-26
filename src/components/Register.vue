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
                <input type="checkbox" class="mx-1" name="isInterested" v-model="isInterested" />
                <label for="checkbox mx-3">I would like to attend the event.</label>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="mx-1" name="toGetNewsletter" v-model="toGetNewsletter" />
                <label for="checkbox mx-3">I would like to receive newsletters related to cancer.</label>
            </div>
            <button type="submit" class="btn btn-outline-danger" id="liveToastBtn">Register for the event</button>
            <div class="toast-container position-fixed top-50 start-50 translate-middle p-3">
                <div id="liveToast" class="toast text-bg-success" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <strong class="me-auto">Registration Success</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Thank you for registering for the event. We will get in touch with further details.
                    </div>
                </div>
            </div>
        </form>

        <section id="contact" class="mt-4 pt-3">
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
            isInterested: true,
            toGetNewsletter: false,
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

            emailjs.send("service_h5pc8mo", "template_8x2wnz8", formData).then((response) => {
                console.log('Success: ', response.status, response.text);
            }).catch(err => {
                console.error('Failed: ', err);
            })

            this.fullname = ''
            this.isInterested = true
            this.emailAddress = ''
            this.mobileNumber = ''
            this.toGetNewsletter = false

            const toastTrigger = document.getElementById('liveToastBtn')
            const toastLiveExample = document.getElementById('liveToast')
            if (toastTrigger) {
                toastTrigger.addEventListener('click', () => {
                    const toast = new bootstrap.Toast(toastLiveExample)

                    toast.show()
                })
            }

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