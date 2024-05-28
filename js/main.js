const {createApp} = Vue 

createApp({
    data(){
        return{
            emails: [],
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
        }
    },
    methods:{
        apiCall(){
            for(let i = 0; i < 10;i++){
                axios.get(this.url).then((response)=>{
                    this.emails.push(response.data)
                })
            }
        }
    },
    created() {
        this.apiCall();
    }
}).mount("#app");