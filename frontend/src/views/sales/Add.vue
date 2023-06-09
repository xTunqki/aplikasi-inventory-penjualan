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
          <label for="unit" class="block text-gray-700 text-sm font-bold mb-2"
            >Customer</label
          >
          <select
            id="unit"
            name="unit"
            class="w-full border bg-white rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
            v-model="selectedCustomer"
          >
            <option disabled selected value="">Select Customer</option>
            <option
              v-for="customer in customerData"
              :key="customer.id"
              :value="customer.id"
            >
              {{ customer.nama }} (Tipe Diskon: {{ customer.tipe_diskon }}) 
            </option>
          </select>
        </div>

        <div class="mb-4">
          <label for="unit" class="block text-gray-700 text-sm font-bold mb-2"
            >Item</label
          >
          <select
            id="item"
            name="item"
            class="w-full border bg-white rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-sm"
            required
            v-model="selectedItem"
          >
            <option disabled selected value="">Select Item</option>
            <option
              v-for="item in itemData"
              :key="item.id"
              :value="item.id"
            >
              {{ item.nama_item }} - (Stok: {{ item.stok }}{{ item.unit }}) - Harga Satuan: {{ item.harga_satuan }}
            </option>
          </select>
        </div>

        <div class="mb-4">
          <label for="qty" class="block text-gray-700 text-sm font-bold mb-2"
            >Quantity</label
          >
          <input
            type="text"
            id="qty"
            name="qty"
            @input="validateQuantity"
            v-model="formData.qty"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="">
          <p v-if="selectedItem !== '' && formData.qty !== ''"
          >Harga: {{ formData.qty }} x {{ itemData.find(o => o.id === selectedItem)?.harga_satuan }} = {{ formData.total_harga }}</p>
          <p v-if="selectedItem !== '' && formData.qty !== '' && formData.customer !== ''">
          Diskon: Rp{{ formData.total_diskon }} {{ '(' }}{{ this.customerData.find(o => o.id === this.formData.customer)?.diskon }} {{ customerData.find(o => o.id === formData.customer)?.tipe_diskon == 'persentase' ? '%' : 'rupiah' }}{{ ')' }}
          <br>
          Total Bayar: {{ formData.total_bayar }}
          </p>
        </div>

        <button
          type="submit"
          ref="submit_btn"
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
      customerData: [],
      itemData: [],
    };
  },
  watch:
  {
    selectedItem: function (val) {
      this.formData.item = val;
    },
    formData: {
      handler: function (val) {
        this.formData.total_diskon = this.customerData.find(o => o.id === this.formData.customer)?.tipe_diskon == 'persentase' ? this.formData.qty*this.itemData.find(o => o.id === this.selectedItem)?.harga_satuan*(this.customerData.find(o => o.id === this.formData.customer)?.diskon)/100 : 10;
        this.formData.total_harga = this.formData.qty*this.itemData.find(o => o.id === this.selectedItem)?.harga_satuan;
        this.formData.total_bayar = this.formData.total_harga - this.formData.total_diskon;
      },
      deep: true,
    },
  },
  async mounted() {
    const today = new Date().toISOString().split('T')[0];
    this.formData.tanggal_transaksi = today;
    const customerData = await fetch("http://localhost:8080/api/customers");
    this.customerData = await customerData.json();
    const itemData = await fetch("http://localhost:8080/api/items");
    this.itemData = await itemData.json();
  },
  computed: {
    selectedCustomer: {
      get() {
        return this.formData.customer || ""; // Use formData.customer as the initial value, or an empty string if it is not set
      },
      set(value) {
        this.formData.customer = value; // Update the formData.customer property when the select value changes
      },
    },
    selectedItem: {
      get() {
        return this.formData.item || ""; // Use formData.customer as the initial value, or an empty string if it is not set
      },
      set(value) {
        this.formData.item = value; // Update the formData.customer property when the select value changes
      },
    },
  },
  methods: {
    validateQuantity() {
      // Remove non-numeric characters from the qty field
      this.formData.qty = this.formData.qty.replace(/\D/g, '');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$refs.submit_btn.setAttribute("disabled", "disabled");

      const formDataToSubmit = {
        ...this.formData
      };

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
          this.$router.push("/sales");
          console.log("Data successfully submitted:", data);
          // Handle the success response here
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
          this.$refs.submit_btn.removeAttribute("disabled");
          // Handle the error here
        });
    },
  },
};
</script>
