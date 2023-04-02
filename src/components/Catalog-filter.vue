<template>
  <div class="catalog-filter">
    <div class="catalog-filter__container">
      <label>Brand </label>
      <select v-model="filters.brand" @change="updateFilter('brand', $event.target.value)">
        <option value="">All</option>
        <option v-for="brand in uniqueValues('brand')" :key="brand.index" :value="brand">{{ brand }}</option>
      </select>
    </div>
    <div class="catalog-filter__container">
      <label>RAM Size </label>
      <select v-model="filters.ram_size" @change="updateFilter('ram_size', $event.target.value)">
        <option value="">All</option>
        <option v-for="ram_size in uniqueValues('ram_size')" :key="ram_size.index" :value="ram_size">{{ ram_size }} GB</option>
      </select>
    </div>
    <div class="range-filter">
      <input
          v-model.number="filters.price"
          type="range"
          min="0"
          max="35000"
          step="1000"
          @change="updateFilter('price', filters.price)"
      >
    </div>
    <div class="range-filter__values">
      <p>min: {{filters.price}}</p>
      <p>max: {{max_price}}</p>
    </div>
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
        price: 0
      },
      max_price: 35000
    }
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  created() {
    const { brand, ram_size, price } = this.$route.query
    if (brand) {
      this.filters.brand = brand
    }
    if (ram_size) {
      this.filters.ram_size = ram_size
    }
    if (price) {
      this.filters.price = price
    }
    this.ADD_FILTERS(this.filters)
  },
  methods: {
    ...mapActions(["ADD_FILTERS"]),
    updateFilter(property, value) {
      this.filters[property] = value
      this.ADD_FILTERS(this.filters)
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
    },
  }
}
</script>

<style scoped lang="scss">
.catalog-filter {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  label {
    margin: 0 5px;
  }
  select {
    padding: 5px;
    border-radius: 5px;
  }
}
  .range-filter {
    width: 130px;
    margin: auto 16px;
    text-align: center;
    position: relative;
    &__values {
      display: flex;
      justify-content: space-around;
      width: 160px;
      p {
        margin: 0 2px;
      }
    }
  }
  .range-filter svg, .range-filter input[type=range] {
    position: absolute;
    left: -2px;
    bottom: -7px;
  }
  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
  @media (max-width: 767px) {
    .catalog-filter {
      flex-direction: column;
      &__container {
        margin-bottom: 10px;
      }
    }
    .range-filter {
      margin: 10px 0;
    }
  }

</style>