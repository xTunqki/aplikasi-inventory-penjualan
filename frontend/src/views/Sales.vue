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

const { data, error } = useSWR("http://localhost:8080/api/sales", fetcher);
</script>


<template>
  <div>
    <Navbar title="Sales" backRoute="/" />
    <div class="max-w-4xl mx-auto mt-8">
      <div class="flex justify-between mb-4">
        <h2 class="text-lg font-bold">Data List</h2>
        <router-link to="/sales/new">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded"
          >
            Add New Data
          </button>
        </router-link>
      </div>
      <table class="w-full border-collapse rounded-lg overflow-hidden text-sm">
        <tr class="bg-yellow-500 text-white text-center">
          <th class="py-1 px-2 font-bold">Kode Transaksi</th>
          <th class="py-1 px-2 font-bold">Tanggal Transaksi</th>
          <th class="py-1 px-2 font-bold">Customer</th>
          <th class="py-1 px-2 font-bold">Item</th>
          <th class="py-1 px-2 font-bold">Quantity</th>
          <th class="py-1 px-2 font-bold">Total Diskon</th>
          <th class="py-1 px-2 font-bold">Total Harga</th>
          <th class="py-1 px-2 font-bold">Total Bayar</th>
        </tr>
        <tr class="bg-gray-100 text-center" v-if="!data">
    <td colspan="8" class="py-2 px-4">Loading...</td>
  </tr>
  <template v-else-if="data && data.length > 0">
          <tr class="bg-gray-100 text-center" v-for="arr in data" :key="arr.id">
            <td class="py-1 px-2">{{ arr.code_transaksi }}</td>
            <td class="py-1 px-2">{{ arr.tanggal_transaksi }}</td>
            <td class="py-1 px-2">{{ arr.customer_data.nama }}</td>
            <td class="py-1 px-2">{{ arr.item_data.nama_item }}</td>
            <td class="py-1 px-2">{{ arr.qty }}</td>
            <td class="py-1 px-2">{{ arr.total_diskon }}</td>
            <td class="py-1 px-2">{{ arr.total_harga }}</td>
            <td class="py-1 px-2">{{ arr.total_bayar }}</td>
          </tr>
        </template>
        <tr class="bg-gray-100 text-center" v-else>
          <td colspan="8" class="py-2 p12x-4">No data available</td>
        </tr>
      </table>
    </div>
  </div>
</template>
>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Sales",
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
