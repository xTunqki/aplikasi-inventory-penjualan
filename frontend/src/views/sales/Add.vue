<template>
  <div>
    <Navbar title="Add New Sales" backRoute="/sales" />
    <div class="max-w-md mx-auto mt-12">
      <form @submit="handleSubmit">

        <div class="flex mb-4">
          <div class="w-1/2 mr-2">
            <label
              for="stock"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Kode Transaksi</label
            >
            <input
              type="text"
              id="code_transaksi"
              name="code_transaksi"
              v-model="formData.code_transaksi"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="w-1/2 ml-2">
            <label
              for="tanggal_transaksi"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Tanggal Transaksi</label
            >
            <input
              type="date"
              id="tanggal_transaksi"
              name="tanggal_transaksi"
              v-model="formData.tanggal_transaksi"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div class="mb-4">
          <label
            for="customer"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Customer</label
          >
          <input
            type="text"
            id="customer"
            name="customer"
            v-model="formData.customer"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label for="item" class="block text-gray-700 text-sm font-bold mb-2"
            >Item</label
          >
          <input
            type="text"
            id="item"
            name="item"
            v-model="formData.item"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label for="qty" class="block text-gray-700 text-sm font-bold mb-2"
            >Quantity</label
          >
          <input
            type="text"
            id="qty"
            name="qty"
            v-model="formData.qty"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
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

<script>
import Navbar from "../../components/Navbar.vue";
export default {
  name: "AddItem",
  components: {
    Navbar,
  },
  data() {
    return {
      formData: {
        code_transaksi: "",
        tanggal_transaksi: null,
        customer: null,
        item: "",
        qty: "",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      const formDataToSubmit = { ...this.formData, 
        total_diskon: 10, total_harga: 10, total_bayar: 10 };

      // Perform the API call to post the data
      fetch("http://localhost:8080/api/sales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSubmit),
      })
        .then((response) => response.json())
        .then((data) => {
          this.$router.push('/sales');
          console.log("Data successfully submitted:", data);
          // Handle the success response here
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
          // Handle the error here
        });
    },
  },
};
</script>
