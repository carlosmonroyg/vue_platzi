new Vue({
  el: "#app",

  data() {
    return {
      name: "Bitcoin",
      symbol: "BTC",
      img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      changePercent: 10,
      color: "f4f4f4",
      price: 8400,
      pricesWithDays: [
        { day: "Lunes", value: 8400 },
        { day: "Martes", value: 7900 },
        { day: "Miercoles", value: 8200 },
        { day: "Jueves", value: 9000 },
        { day: "Viernes", value: 9400 },
        { day: "Sabado", value: 10000 },
        { day: "Domingo", value: 10200 },
      ],
      showPrices: false,
    };
  },

  computed: {
    tilte() {
      return `${this.name} - ${this.symbol}`;
    },
  },

  watch() {
    showPrices(newValor, oldValor);
    console.log(newValor, oldValor);
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;

      this.color = this.color.split("").reverse().join(""); //* Tomamos el string del color y le damos la vuelta.
    },
  },
});
