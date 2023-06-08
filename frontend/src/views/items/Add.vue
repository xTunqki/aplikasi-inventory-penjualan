<template>
  <div>
    <Navbar title="Add Item" backRoute="/items" />
    <div class="max-w-md mx-auto mt-12">
      <form>
        <div class="mb-4">
          <label
            for="itemName"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Item Name</label
          >
          <input
            type="text"
            id="itemName"
            name="itemName"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="flex mb-4">
          <div class="w-1/2 mr-2">
            <label
              for="stock"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Stock</label
            >
            <input
              type="text"
              id="stock"
              name="stock"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="w-1/2 ml-2">
            <label
              for="price"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Price</label
            >
            <input
              type="text"
              id="price"
              name="price"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div class="mb-4">
          <label for="image" class="block text-gray-700 text-sm font-bold mb-2"
            >Image</label
          >
          <input
            type="file"
            id="image"
            name="image"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label for="unit" class="block text-gray-700 text-sm font-bold mb-2"
            >Unit</label
          >
          <select
            id="unit"
            name="unit"
            class="w-full border bg-white rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="kg">Kilogram (Kg)</option>
            <option value="pcs">Pieces (Pcs)</option>
          </select>
        </div>

        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
>

<script>
import Navbar from "../../components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
    };
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>
