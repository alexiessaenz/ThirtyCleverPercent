
<template>
    <div class="material-form">
        <md-outlined-text-field v-model="question" label="Email" type="email"
            name="email" required></md-outlined-text-field>
        <label>
        Subscribe
        <md-checkbox name="subscribe"></md-checkbox>
        </label>
    
        <md-text-button type="reset">Reset</md-text-button>
        <md-outlined-button>Submit</md-outlined-button>
    </div>
</template>

<script>
// index.js
import '@material/web/all.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/textfield/outlined-text-field.js';
export default {
    name: 'MaterialForm',
    props: {
        msg: String
    }
}


</script>

<style lang="scss">
:root {
        --md-ref-typeface-brand: 'Roboto Flex', sans-serif;
        --md-ref-typeface-plain: 'Roboto Flex', sans-serif;
    }
</style>