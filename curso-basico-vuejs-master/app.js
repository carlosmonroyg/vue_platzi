Vue.component("CoinDetail", {
  //PERTENECE AL COMPONENTE PADRE
  props: ["coin"],

  data() {
    return {
      showPrices: false,
      value: 0,
    };
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;

      this.$emit("change-color", this.showPrices ? "FF96C8" : "3D3D3D");
    },
  },

  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },

    convertedValue() {
      console.log("entre a computed");
      if (!this.value) {
        return 0;
      }

      return this.value / this.coin.price;
    },
  },

  template: `
    <div>
      <img
        v-on:mouseover="toggleShowPrices"
        v-on:mouseout="toggleShowPrices"
        v-bind:src="coin.img"
        v-bind:alt="coin.name"
        width = "200" height = "200"
      >

      <h1
        v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
        {{ title }}
        <span v-if="coin.changePercent > 0">🤑</span>
        <span v-else>🤯</span>
        <button v-on:click="toggleShowPrices">
          {{ showPrices? '🙈' : '🐵' }}
        </button>
      </h1>

      <input type="number" v-model="value">
      <span>{{ convertedValue }}</span>

      <slot name="text"></slot>
      <slot name="link"></slot>

      <ul v-show="showPrices">
        <li
          class="uppercase"
          v-bind:class="{
            green: p.value > coin.price,
            orange: p.value === coin.price,
            red: p.value < coin.price,
          }"
          v-for="(p, index) in coin.pricesWithDays"
          v-bind:key="p.day">
          {{ index }} - {{ p.day }} - {{ p.value }}
        </li>
      </ul>
    </div>
  `,
});

new Vue({
  el: "#app",

  data() {
    return {
      btc: {
        name: "Bitcoin",
        symbol: "BTC",
        img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png ",
        changePercent: -10,
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
      },
      color: "f4f4f4",
    };
  },
  create(){ // Ideal para comunicacion con ujna api rest

  },


  mounted(){//aceder a info del dom 

  },

  // watch() {
  //   showPrices(newValor, oldValor);
  //   console.log(newValor, oldValor);
  // },

  methods: {
    updateColor(color) {
      this.color = color || this.color.split("").reverse("").join(""); //* Tomamos el string del color y le damos la vuelta.
    },
  },
});
