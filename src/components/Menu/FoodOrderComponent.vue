<template>
  <div class="container-fluid">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">OrderId</th>
          <th scope="col">Tittle</th>
          <th scope="col">Items</th>
          <th scope="col">Cost</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in menus" :key="index">
          <th scope="row">1</th>
          <td>{order.title}</td>
          <td>{order.amount}</td>
          <td>{order.cost}</td>
          <td>
            <Button class="btn btn-info btn-sm">Processing</Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
.img img {
  height: 200px;
  width: 190px;
}
.desc {
  line-height: 0.5em;
}
.empty {
  height: 400px;
  width: 100%;
  margin: auto;
}
</style>
<script>
import axios from "axios";
export default {
  name: "menuorders",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("GET_MENUORDERS").then(() => {
      console.log("fetching orders ...");
    });
  },
  computed: {
    orders() {
      return this.$store.getters.orders;
    }
  },
  methods: {}
};
</script>
