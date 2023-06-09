<template>
  <div>
    <Navbar title="Add New Item" backRoute="/items" />
    <div class="max-w-md mx-auto mt-12">
      <form @submit="handleSubmit">
        <div class="mb-4">
          <label
            for="itemName"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Item Name</label
          >
          <input
            type="text"
            id="itemName"
            name="nama_item"
            v-model="formData.nama_item"
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
              @input="validateStock"
              name="stok"
              v-model="formData.stok"
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
              name="harga_satuan"
              v-model="formData.harga_satuan"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div class="mb-4">
          <label for="image" class="block text-gray-700 text-sm font-bold mb-2"
            >Image URL</label
          >
          <input
            type="input"
            id="image"
            name="barang"
            v-model="formData.barang"
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
            v-model="formData.unit"
            class="w-full border bg-white rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="kg">Kilogram (Kg)</option>
            <option value="pcs">Pieces (Pcs)</option>
          </select>
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
        nama_item: "",
        stok: null,
        harga_satuan: null,
        barang: null,
        unit: "kg",
      },
    };
  },
  methods: {
    // uploadImage(e) {
    //   const image = e.target.files[0];
    //   const reader = new FileReader();
    //   reader.readAsDataURL(image);
    //   reader.onload = (e) => {
    //     this.barang = e.target.result;
    //   };
    // },
    validateStock() {
      // Remove non-numeric characters from the qty field
      this.formData.stok = this.formData.stok.replace(/\D/g, '');
    },
    handleSubmit(e) {
      this.$refs.submit_btn.setAttribute("disabled", "disabled");
      e.preventDefault();

      const formDataToSubmit = { ...this.formData };

      // Perform the API call to post the data
      fetch("http://localhost:8080/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSubmit),
      })
        .then((response) => response.json())
        .then((data) => {
          this.$router.push("/items");
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
