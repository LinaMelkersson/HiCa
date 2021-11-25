<template>
<div>
    <div class="box1">
      <div class="header">
        <div class="title">
          <h1 style="font-size: 50pt;">Hiking at heart</h1>
        </div>
      </div>
    </div>

    <div class="checkoutgrid">
        <div>
            <cart></cart>
        </div>
        <div>
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
            <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="cardinfo"
            :rules="cardRules"
            label="Card Number"
            required
            ></v-text-field>

            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree to our terms and conditions?"
            required
            ></v-checkbox>

            <v-btn
            :disabled="!valid"
            color="success lighten-1"
            class="mr-4"
            @click="validate"
            >
            Order
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            >
            Reset Form
            </v-btn>

            </v-form>
        </div>
    </div>
</div>
</template>

<script>
import cart from '../components/cart.vue'
  export default {
      components: {
          cart
      },
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 1) || 'Name must be atleast 1 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      cardinfo: '',
      cardRules: [
          v => !!v || 'Card number is required',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>


  


<style>

.checkoutgrid {
    width: 75%; 
    margin: auto; 
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

</style>