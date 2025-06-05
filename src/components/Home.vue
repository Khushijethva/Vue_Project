<template>

    <body>
        <div id="app">
            <h1>🌟 Vue 3 Demo by Khushi Jethva 🌟</h1>
            <p>The message is taken from <code>data()</code> inside the Vue instance.</p>
            <div class="highlight"> {{ message }}</div>
            <p>Count: {{ count }}</p>
            <button @click="count++">Increment Count</button>
            <div>🎲 Random Number: {{ randomNumber }}</div>
            <div>🔄 Reverse Message: {{ reversedMessage }}</div>


            <div :class="vueclass">✨ This is a bound class (v-bind)</div>
            <p> function call : {{ getName() }}</p>
            <p v-once>📝 v-once: {{ message }}</p>
            <p>
                <transition name="fade">
                    <img :src="show ? 'happyemoji.jpeg' : 'sad.jpeg'" key="mood" style="height: 100px;" />
                </transition> <br />
                <button @click="toggleMood">
                    {{ show ? '😊 Feeling Happy - Click to Switch' : '😢 Feeling Sad - Click to Switch' }}
                </button>
            </p>

            <div v-html="dynamicHtml"></div>

            <div :style="{ fontSize: size + 'px' }">🖋️ Dynamic Font Size Text</div>
            <button @click="size += 2">➕ Increase Font</button>
            <button @click="size -= 2">➖ Decrease Font</button>
            <br>
            <button @click="msg">🎯 Click Me (v-on)</button>
            <button @dblclick="msg">🎯 Click Me Dubble Time (v-on) </button>
            <button @mousemove="msg">🎯 Click Me Mouse Move (v-on) </button>

            <div style="margin-top: 20px;">
                <div v-if="name === 'khushi'">✅ Name is Khushi</div>
                <div v-else>❌ Name is not Khushi</div>
            </div>

            <div class="family-list">
                <strong>👪 Family Members:</strong>
                <div v-for="item in family" :key="item">{{ item }}</div>
            </div>

            <div class="highlight">📝 Form</div>

            <input type="text" v-model.trim="name" placeholder="Enter your name">
            <!--  trim.lazy after move textbox out write -->
            <p>Name: <strong>{{ name }}</strong></p>
            <div>
                <input type="range" min="1" max="100" step="1" v-model="age">
                <p><code>{{ age }}</code></p>
            </div>


            <p> Hobbies Select : </p>
            <label for="dance"> Dancing</label>
            <input v-model="hobbies" type="checkbox" id="dance" value="Dancing">

            <label for="code"> Coding</label>
            <input v-model="hobbies" type="checkbox" id="code" value="Coding">

            <label for="read"> Reading</label>
            <input v-model="hobbies" type="checkbox" id="read" value="Reading">
            <br> <br>

            <p> Hobbies : {{ hobbies }}</p>

            <label for="country">🌍 Select Country:</label>
            <select v-model="country" id="country">
                <option value="India">India</option>
                <option value="America">America</option>
            </select>

            <pre>My Country Is: {{ country }}</pre>

            <button @click="showmsg('Hello Khushi!')"> 👋 Click Hello Event</button>

            <div class="calculator">
                <h2>🧮 Simple Calculator</h2>
                <input type="number" v-model.number="num1" placeholder="Enter First Value">
                <input type="number" v-model.number="num2" placeholder="Enter Second Value">
                <p>➕ Sum: {{ num1 + num2 }}</p>
                <p>✖️ Multiply: {{ num1 * num2 }}</p>
                <p> - Substraction {{ num1 - num2 }} </p>
                <p> / Division : {{ num1 / num2 }}</p>
            </div>

            <div class="calculator">
                <h2> Life Cycle Methods</h2>
            </div>

            <div>
                <p> The 'K' Key generates an alerts : </p>
                <textarea cols="20" rows="3" v-on:keydown.k="createAlert" placeholder="start writing ... "></textarea>

            </div>

            <h1>🌟 Vue App with Component 🌟 </h1>

            <!-- Use the custom child component -->
            <FamilyCard name="khushi" age="20" :getdata="getdata"> </familycard>

            <ul style="list-style: none; ">
                <li v-for="s in study" :key="s.name" style="  margin-bottom: 10px;">
                    <span style="margin-right: 8px;"> 📘 </span>
                    <FamilyCard name="khushi" age="20" :getdata="getdata" :info="s" />
                </li>
            </ul>

            <ChildCompo :getUser="getusename"></ChildCompo>


            <h1>Refs Example</h1>
            <p>Vue Template Refs are used to refer to specific DOM elements.</p>

            Enter Name: <input type="text" ref="input" />
            <button @click="getRef">Click Me !!</button>


            <div style="margin-top: 20px;">
                <label><input type="checkbox" v-model="agree"> ✅ Agree?</label><br>
                <button v-if="agree" @click="showmsg('sucessfully submit data !! ')">💾 Save</button>
            </div>


        </div>
    </body>
</template>
<script>

import FamilyCard from './familycard.vue';
import ChildCompo from './Child.vue';



export default {
    name: 'HomePage',
    data() {
        return {
            message: "Hello World! Khushi Jethva!!",
            count: 0,
            vueclass: "bg",
            getName: function () {
                return "khushi jethva";
            },
            show: true,
            dynamicHtml: "<h2>💡 Hi from v-html!</h2>",
            size: 20,
            name: "khushi",
            family: ['Khushi', 'Janvi', 'Prakashbhai', 'Deepaben'],
            agree: false,
            country: '',
            num1: 0,
            num2: 0,
            age: 70,
            hobbies: [],
            study: [
                { name: 'BCA' },
                { name: 'BCOM' },
                { name: 'BSC' },
                { name: 'BBA' },
                { name: 'BA' }
            ],


        }
    },

    components: {

        FamilyCard,
        ChildCompo,

    },

    computed: {
        randomNumber() {
            return Math.ceil(Math.random() * 10);
        },
        reversedMessage() {
            return this.message.split('').reverse().join('');
        },


    },
    watch:
    {
        age(val) {
            if (val > 20 && val < 60) {
                if (val < 40) {
                    this.age = 20;
                }
                else {
                    this.age = 60;
                }

            }
        },

        count(val, prev) {
            alert("Value:  " + val + " previous Value : " + prev);
        }
    },

    methods: {
        toggleMood() {
            this.show = !this.show; // toggle the boolean
        },
        msg() {
            alert("Hello! Button was clicked.");
        },
        showmsg(msg) {
            alert(msg);
        },
        createAlert() {
            alert("You pressed the 'K' key!");
        },
        getdata() {
            alert("Parent Function called ...")
        },
        getusename(name) {
            alert(name)
        },
        getRef() {
            // DOM Reference using $refs
            this.$refs.input.focus();
            let val = this.$refs.input.value;
            console.warn(val);
            this.$refs.input.style.color = "green";
        },


    },

    beforeCreate() {
        console.log('Before Created ... ')

    },
    created() {
        console.log('Created... ')
    },
    // template not ready before
    beforeMount() {
        console.log('before Mount ... ')
    },
    mounted() {
        console.log('Mounted... ', this.$el) //  el means elements (Template tag) all data
    },
    beforeUpdate() {
        console.log('Before Update... ')
    },
    updated() {
        console.log('Updated... ')
    },
    beforeUnmount() {
        console.log('Before Unmounted ... ')
    },
    unmounted() {
        console.log('Unmounted ... ')
    }



}
</script>
<style>
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(to right, #f0f8ff, #e0ffff);
    margin: 0;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    color: #0d3b66;
    margin-bottom: 10px;
    text-shadow: 0 0 10px #00c8a0, 0 0 20px #00c8a0;
    animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
    from {
        text-shadow: 0 0 5px #00c8a0;
    }

    to {
        text-shadow: 0 0 20px #00c8a0;
    }
}




.highlight {
    font-weight: bold;
    font-size: 20px;
    color: #005050;
    margin-bottom: 10px;
}

.bg {
    background-color: #b2fefa;
    padding: 10px;
    border-radius: 8px;
    margin: 10px 0;
}

input[type="text"],
input[type="number"],
input[type="email"],
select {
    padding: 10px;
    width: 100%;
    margin: 10px 0;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 16px;
}

button {
    background-color: #00c8a0;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 10px 5px 0 0;
}

button:hover {
    background-color: #009f85;
}

.calculator {
    background: #f2fdfc;
    padding: 15px;
    border-radius: 12px;
    border: 1px solid #00c8a0;
    margin-top: 20px;
}

.family-list {
    margin: 10px 0;
    padding: 0;
}

.family-list div {
    background-color: #e6f7f2;
    margin: 4px 0;
    padding: 5px 10px;
    border-radius: 6px;
}

pre {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 6px;
    color: #333;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>