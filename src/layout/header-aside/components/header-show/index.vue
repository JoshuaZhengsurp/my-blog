<template>
  <!-- <el-tooltip effect="dark" :content="tooltipContent" placement="bottom"> -->
  <el-button
    class="d2-ml-0 d2-mr btn-text can-hover"
    type="text"
    @click="handleClick"
  >
    <d2-icon name="diamond" style="font-size: 20px" />
  </el-button>
  <!-- </el-tooltip> -->
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {},
  methods: {
    ...mapMutations("d2admin/common", ["changeHidden"]),

    handleClick() {
      console.log(this.changeHidden);
      this.changeHidden();
    }
  }
};
</script>
