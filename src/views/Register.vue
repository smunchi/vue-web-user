<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div class="card card-default">
          <div class="card-header">Register</div>
          <div class="card-body">
            <div class="alert alert-danger" v-if="has_error && !success">
                <p v-if="error == 'registration_validation_error'">Validation Errors.</p>
                <p v-else>Error, can not register at the moment. If the problem persists, please contact an administrator.</p>
            </div>
            <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post">
                <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.name }">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control" placeholder="Full Name" v-model="name">
                    <span class="help-block" v-if="has_error && errors.name">{{ errors.name }}</span>
                </div>
                <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.email }">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email">
                    <span class="help-block" v-if="has_error && errors.email">{{ errors.email }}</span>
                </div>
                <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" v-model="password">
                    <span class="help-block" v-if="has_error && errors.password">{{ errors.password }}</span>
                </div>
                <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
                    <label for="password_confirmation">Password confirmation</label>
                    <input type="password" id="password_confirmation" class="form-control" v-model="password_confirmation">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        has_error: false,
        error: '',
        errors: {},
        success: false
      }
    },
    methods: {
      register() {
        var app = this
        // save data to server
        axios.post('http://127.0.0.1:8000/api/v1/auth/register', { 
                            name: this.name, 
                            email:this.email,
                            password:this.password,
                            password_confirmation:this.password_confirmation

          })
          .then(res => {
              console.log(res);
              app.success = true
              this.$router.push({name: 'login', params: {successRegistrationRedirect: true}})
          }).catch(err => {
          console.log(err)
      })                   
      }
    }
  }
</script>