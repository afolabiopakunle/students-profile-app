new Vue({
    el: "#root",
    data: {
        showCover: false,
        enterDetails: true,
    },
    methods: {
        runIt: function (e) {
            e.preventDefault();
            this.showCover = true;
            this.enterDetails = false;
            setTimeout(() => {
                this.showCover = false
            }, this.random());
        },
        random: function () {
            return Math.round(Math.random() * 2000)
        }
    }
})