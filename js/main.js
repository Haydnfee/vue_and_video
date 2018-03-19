const vm = new Vue({
    el : "#app",

    data : {
        welcomeMessage : "Welcome to the Vue app",

        hasVue : false,

        vuemassage : "id like to use vue, but cant afford $26.95",

        targetURL : "http:vuejs.org",

        anchorOff : true,

        goodfruit : [
            {name: "apples", flavour: "tangy"},
            {name: "peaches", flavour: "sweet"},
            {name: "grapes", flavour: "grape-y"}

        ]
    },

    methods : {
        logFruit(e) {
            console.log(e.currentTarget);
        }
    }
})
