new Vue({
    el: "#root",
    data: {
        showCover: false,
    },
    methods: {
        runIt: function (e) {
            e.preventDefault();
            this.showCover = true;
            // box.style.display = "block";
            setTimeout(() => {
                this.showCover = false
            }, this.random());
        },
        random: function () {
            return Math.round(Math.random() * 2000)
        }
    }
})