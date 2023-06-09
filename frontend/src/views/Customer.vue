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

const { data, error } = useSWR("http://localhost:8080/api/customers", fetcher);
</script>


<template>
  <div>
    <Navbar title="Customer" backRoute="/" />
    <div class="max-w-5xl mx-auto mt-8">
      <div class="flex justify-between mb-4">
        <h2 class="text-lg font-bold">Data List</h2>
        <router-link to="/customers/new">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded"
          >
            Add New Data
          </button>
        </router-link>
      </div>
      <table class="w-full border-collapse rounded-lg overflow-hidden text-sm">
        <tr class="bg-green-500 text-white text-center">
          <th class="py-1 px-2 font-bold">Nama</th>
          <th class="py-1 px-2 font-bold">Contact</th>
          <th class="py-1 px-2 font-bold">Email</th>
          <th class="py-1 px-2 font-bold">Alamat</th>
          <th class="py-1 px-2 font-bold">Diskon</th>
          <th class="py-1 px-2 font-bold">Tipe Diskon</th>
          <th class="py-1 px-2 font-bold">KTP</th>
        </tr>
        <tr class="bg-gray-100 text-center" v-if="!data">
    <td colspan="7" class="py-2 px-4">Loading...</td>
  </tr>
  <template v-else-if="data && data.length > 0">
          <tr class="bg-gray-100 text-center" v-for="arr in data" :key="arr.id">
            <td class="py-1 px-2">{{ arr.nama }}</td>
            <td class="py-1 px-2">{{ arr.contact }}</td>
            <td class="py-1 px-2">{{ arr.email }}</td>
            <td class="py-1 px-2">{{ arr.alamat }}</td>
            <td class="py-1 px-2">{{ arr.diskon }}</td>
            <td class="py-1 px-2">{{ arr.tipe_diskon }}</td>
            <td class="py-1 px-2 max-w-[5em]	max-h-[5em]"><img :src="arr.ktp"/></td>
          </tr>
        </template>
        <tr class="bg-gray-100 text-center" v-else>
          <td colspan="7" class="py-2 p12x-4">No data available</td>
        </tr>
      </table>
    </div>
  </div>
</template>
>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Customer",
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
