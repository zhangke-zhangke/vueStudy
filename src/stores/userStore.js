import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('userStore', () => {
    const userName = ref('')

    function setUserName(value){
        userName.value = value
    }

    return { userName, setUserName}
})





