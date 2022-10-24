<template>
    <h4>Welcome to the main content view</h4>
    <Speakers />
    <Register />
</template>

<script>
import Speakers from './Speakers.vue'
import Register from './Register.vue';
export default {
    components: { Speakers, Register }
}
</script>