<template>
  <div>
    <header class="bg-gray-800 hover:bg-gray-600 text-white py-4">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-bold text-center text-sm">
          Aplikasi Inventory Penjualan
        </h1>
      </div>
    </header>
    <div class="flex justify-center mt-5">
      <div class="grid grid-cols-3 gap-4">
        <!-- Item -->
        <router-link to="/item">
          <div
            class="max-w-sm select-none rounded overflow-hidden shadow-lg bg-gray-200 hover:cursor-pointer">
            <img class="w-full h-24" src="../assets/goods.svg" alt="Item" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">Item</div>
              <p class="text-gray-700 text-base text-center">Data item.</p>
            </div>
          </div>
        </router-link>

        <!-- Customer -->
        <div
          class="max-w-sm select-none rounded overflow-hidden shadow-lg bg-gray-200"
        >
          <img
            class="w-full h-24"
            src="../assets/customer.svg"
            alt="Customer"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">Customer</div>
            <p class="text-gray-700 text-base text-center">Data Customer.</p>
          </div>
        </div>

        <!-- Sale -->
        <div
          class="max-w-sm select-none rounded overflow-hidden shadow-lg bg-gray-200"
        >
          <img class="w-full h-24" src="../assets/sales.svg" alt="Customer" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">Sales</div>
            <p class="text-gray-700 text-base text-center">Data Sales.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      nama: "DanTDM",
    };
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style lang="scss"></style>
