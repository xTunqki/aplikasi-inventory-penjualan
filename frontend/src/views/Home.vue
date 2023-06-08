<template>
    <div>
        <Navbar title="Aplikasi Inventory Penjualan"/>
        <div class="flex justify-center mt-5">
            <div class="grid grid-cols-3 gap-4">
                <!-- Item -->
                <router-link to="/items">
                    <div class="max-w-sm select-none rounded overflow-hidden shadow-lg bg-gray-200 hover:cursor-pointer">
                        <img class="w-full h-24" src="../assets/goods.svg" alt="Item" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-center">Item</div>
                            <p class="text-gray-700 text-base text-center">Data item penjualan</p>
                        </div>
                    </div>
                </router-link>

                <!-- Customer -->
                <router-link to="/customers">
                <div class="max-w-sm select-none rounded overflow-hidden shadow-lg bg-gray-200">
                    <img class="w-full h-24" src="../assets/customer.svg" alt="Customer" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Customer</div>
                        <p class="text-gray-700 text-base text-center">Data customer penjualan</p>
                    </div>
                </div>
                </router-link>

                <!-- Sale -->
                <router-link to="/sales">
                <div class="max-w-sm select-none rounded overflow-hidden shadow-lg bg-gray-200">
                    <img class="w-full h-24" src="../assets/sales.svg" alt="Customer" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Sales</div>
                        <p class="text-gray-700 text-base text-center">Data sales penjualan</p>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
    name: "App",
    components: {
        Navbar
    },
    data() {
        return {
        };
    },
    methods: {},
    computed: {},
    created() { },
    mounted() { },
};
</script>

<style lang="scss"></style>
