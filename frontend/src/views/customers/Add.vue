<template>
  <div>
    <Navbar title="Add New Customer" backRoute="/customers" />
    <div class="max-w-md mx-auto mt-8">
      <form @submit="handleSubmit">
        <div class="mb-4">
          <label
            for="itemName"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Nama</label
          >
          <input
            type="text"
            id="itemName"
            name="nama"
            v-model="formData.nama"
            class="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label
            for="contact"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Contact</label
          >
          <input
            type="text"
            id="contact"
            name="contact"
            v-model="formData.contact"
            class="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label
            for="email"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Email</label
          >
          <input
            type="text"
            id="email"
            name="email"
            v-model="formData.email"
            class="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label
            for="alamat"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Alamat</label
          >
          <input
            type="text"
            id="alamat"
            name="alamat"
            v-model="formData.alamat"
            class="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="flex mb-4">
          <div class="w-1/2 mr-2">
            <label
              for="diskon"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Diskon</label
            >
            <input
              type="text"
              id="diskon"
              name="diskon"
              v-model="formData.diskon"
              class="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="w-1/2 ml-2">
            <label
              for="tipe_diskon"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Tipe Diskon</label
            >
            <select
            id="tipe_diskon"
            name="tipe_diskon"
            v-model="formData.tipe_diskon"
            class="w-full border bg-white rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          >
            <option value="persentase">Persentase</option>
            <option value="fix diskon">Fix Diskon</option>
          </select>
          </div>
        </div>

        <div class="mb-4">
          <label for="ktp" class="block text-gray-700 text-sm font-bold mb-2"
            >KTP Image URL</label
          >
          <input
            type="text"
            id="ktp"
            name="ktp"
            v-model="formData.ktp"
            class="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          />
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
        nama: "",
        contact: null,
        email: null,
        alamat: "",
        diskon: "",
        tipe_diskon: "",
        ktp: "",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$refs.submit_btn.setAttribute("disabled", "disabled");

      const formDataToSubmit = { ...this.formData };

      // Perform the API call to post the data
      fetch("http://localhost:8080/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSubmit),
      })
        .then((response) => response.json())
        .then((data) => {
          this.$router.push('/customers');
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
