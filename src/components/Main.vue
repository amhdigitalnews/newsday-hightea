<template>
    <!-- <h4>Welcome to the main content view</h4>/ -->
    <Speakers />
    <Register />
    <Sponsors />
</template>

<script>
import Speakers from './Speakers.vue'
import Sponsors from './Sponsors.vue'
import Register from './Register.vue';
export default {
    components: { Speakers, Register, Sponsors }
}
</script>