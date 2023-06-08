<script setup>
import { useSWR } from "swr-vue";
import { defineProps} from "vue";
const props = defineProps({
  data: {
    type: Array,
    default: null,
  },
});

const fetcher = async (url) => {
  const res = await fetch(url);

  return res.json();
};

const { data, error } = useSWR("http://localhost:8080/api/items", fetcher);
</script>


<template>
  <div>
    <Navbar title="Items" backRoute="/" />
    <div class="max-w-xl mx-auto mt-8">
      <div class="flex justify-between mb-4">
        <h2 class="text-lg font-bold">Data List</h2>
        <router-link to="/items/new">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded"
          >
            Add New Data
          </button>
        </router-link>
      </div>
      <table class="w-full border-collapse rounded-lg overflow-hidden text-sm">
        <tr class="bg-red-500 text-white text-center">
          <th class="py-1 px-2 font-bold">Item Name</th>
          <th class="py-1 px-2 font-bold">Unit</th>
          <th class="py-1 px-2 font-bold">Stock</th>
          <th class="py-1 px-2 font-bold">Price</th>
          <th class="py-1 px-2 font-bold">Image</th>
        </tr>
        <tr class="bg-gray-100 text-center" v-if="!data">
    <td colspan="5" class="py-2 px-4">Loading...</td>
  </tr>
  <template v-else-if="data && data.length > 0">
          <tr class="bg-gray-100 text-center" v-for="arr in data" :key="arr.id">
            <td class="py-1 px-2">{{ arr.nama_item }}</td>
            <td class="py-1 px-2">{{ arr.unit }}</td>
            <td class="py-1 px-2">{{ arr.stok }}</td>
            <td class="py-1 px-2">{{ arr.harga_satuan }}</td>
            <td class="py-1 px-2">{{ arr.barang }}</td>
          </tr>
        </template>
        <tr class="bg-gray-100 text-center" v-else>
          <td colspan="5" class="py-2 p12x-4">No data available</td>
        </tr>
      </table>
    </div>
  </div>
</template>
>

<script>
import Navbar from "../components/Navbar.vue";
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
