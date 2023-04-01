<template>
  <div>
    <label>Brand</label>
    <select v-model="filters.brand" @change="updateFilter('brand', $event.target.value)">
      <option value="">All</option>
      <option v-for="brand in uniqueValues('brand')" :key="brand.index" :value="brand">{{ brand }}</option>
    </select>

    <label>RAM Size</label>
    <select v-model="filters.ram_size" @change="updateFilter('ram_size', $event.target.value)">
      <option value="">All</option>
      <option v-for="ram_size in uniqueValues('ram_size')" :key="ram_size.index" :value="ram_size">{{ ram_size }} GB</option>
    </select>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Catalog-filter",
  data() {
    return {
      filters: {
        brand: '',
        ram_size: '',
      }
    }
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  created() {
    const { brand, ram_size } = this.$route.query
    if (brand) {
      this.filters.brand = brand
    }
    if (ram_size) {
      this.filters.ram_size = ram_size
    }
  },
  methods: {
    ...mapActions(["ADD_FILTERS"]),
    updateFilter(property, value) {
      this.filters[property] = value
      this.ADD_FILTERS(this.filters)
      // this.$emit('updateFilter', property, value)
      const queryParams = { ...this.$route.query }
      queryParams[property] = value
      this.$router.push({ path: '/catalog', query: queryParams })
    },
    uniqueValues(property) {
      return this.products.reduce((uniqueValues, product) => {
        const value = product[property]
        if (!uniqueValues.includes(value)) {
          uniqueValues.push(value)
        }
        return uniqueValues
      }, [])
    }
  }
}
</script>

<style scoped>

</style>