let app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    images: [
      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
      "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg",
    ],
  },
  methods: {
    next() {
      this.counter++;
      if (this.counter > this.images.length - 1) {
        this.counter = 0;
      }
    },
    prev() {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.counter = this.images.length - 1;
      }
    },
  },
  created() {
    setInterval(this.next, 3000);
    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowRight") {
        this.next();
      }
      if (e.key === "ArrowLeft") {
        this.prev();
      }
    });
  },
});
