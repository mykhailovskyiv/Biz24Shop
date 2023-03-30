<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MainWrapper",
  components: {},
  props: {},
  data() {
    return {
      title: "Only for Gamers",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" >
.main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}
</style>
