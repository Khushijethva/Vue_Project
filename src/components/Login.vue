<template>
    <div class="login-container">

        <!-- Property ID pass with tag not props asign use $attrs attribute like id <h1> id is "pass in parents" -->
        <h1 v-bind="$attrs">User Details Form</h1>


         <!-- Routing path  Profile page router link use  -->
         <br><br>
         <router-link to="/Profile">Profile</router-link>
         <!-- Routing path  Profile page router link use  -->
         <br>
        <form @submit.prevent="loginUser">

               
            <!-- Email -->
            <div class="form-group">
                <label for="email">📧 Email</label>
                <input type="email" v-model="form.email" id="email"  />
            </div>
            <!-- Password -->
            <div class="form-group">
                <label for="password">🔒 Password</label>
                <input type="password" v-model="form.password" id="password"  />
            </div>

            <!-- Gender -->
            <div class="form-group">
                <label>👤 Gender</label>
                <label><input type="radio" value="Male" v-model="form.gender" /> Male</label>
                <label><input type="radio" value="Female" v-model="form.gender" /> Female</label>
                <label><input type="radio" value="Other" v-model="form.gender" /> Other</label>
            </div>

            <!-- Hobbies -->
            <div class="form-group">
                <label>🎯 Hobbies</label>
                <label><input type="checkbox" value="Dancing" v-model="form.hobbies" /> Dancing</label>
                <label><input type="checkbox" value="Coding" v-model="form.hobbies" /> Coding</label>
                <label><input type="checkbox" value="Reading" v-model="form.hobbies" /> Reading</label>
            </div>

            <!-- Country -->
            <div class="form-group">
                <label for="country">🌍 Country</label>
                <select v-model="form.country" id="country">
                    <option disabled value="">-- Select Country --</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                </select>
            </div>

            <!-- Message -->
            <div class="form-group">
                <label for="message">📝 Message</label>
                <textarea v-model="form.message" id="message" rows="4" placeholder="Type your message..."></textarea>
            </div>

            <!-- Submit -->
            <button type="submit">🚀 Submit</button>
        </form>

        <!-- Real-Time Output (Optional) -->
        <div class="result">
            <h3>🧾 Your Input:</h3>
            <p><strong>Email:</strong> {{ form.email }}</p>
            <p><strong>Password:</strong> {{ form.password }}</p>
            <p><strong>Gender:</strong> {{ form.gender }}</p>
            <p><strong>Hobbies:</strong> {{ form.hobbies.join(', ') }}</p>
            <p><strong>Country:</strong> {{ form.country }}</p>
            <p><strong>Message:</strong> {{ form.message }}</p>
        </div>

        <div class="result">
            <h3>🧾 Errors :</h3>
            <ul>
                <li v-for="e in error" :key="e">{{ e }} Not Valid </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LoginApp',
    //inheritAttrs:false,  not direct asign main tag in unprops attribute
    data() {
        return {
            form: {
                email: '',
                password: '',
                gender: '',
                hobbies: [],
                country: '',
                message: '',
            
            },
                error: [],
        };
    },
    methods: {
        loginUser() {
            this.error = [];
            alert("✅ Form Submitted Successfully!");

            for(const item in this.form)
            {
              if(this.form[item] === "" || this.form[item].lenght == 0)
              {
                this.error.push(item)
              }
            }

            if(this.error.lenght === 0)
            {
                alert("data has been Sumited");
            }

        //     console.log({
        //         email: this.email,
        //         password: this.password,
        //         gender: this.gender,
        //         hobbies: this.hobbies,
        //         country: this.country,
        //         message: this.message
        //     });

        console.warn(this.form,this.error)
         }
    }
};
</script>

<style scoped>
.login-container {
    max-width: 600px;
    margin: 40px auto;
    padding: 30px;
    background-color: #f8f9fa;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', sans-serif;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 25px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 6px;
    color: #555;
    font-weight: 500;
}

input[type="text"],
input[type="email"],
input[type="password"],
select,
textarea {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 15px;
}

textarea {
    resize: vertical;
}

input:focus,
select:focus,
textarea:focus {
    border-color: #007bff;
    outline: none;
}

button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

.result {
    margin-top: 30px;
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: inset 0 0 10px #ddd;
}
</style>
