<template>
  <div class="difficulties-holder">
    <div
      v-for="difficult in difficulties"
      class="difficult"
      :class="difficult.title === selected.title && 'selected'"
      @click="handleClick(difficult)"
      :key="difficult.title"
    >
      {{ difficult.title }}
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  import { DifficultLevels } from '@/model';
  import { Difficult } from '@/model/DifficultLevels';

  export default Vue.extend({
    name: 'DifficultSelector',

    data() {
      return {
        difficulties: DifficultLevels,
        selected: DifficultLevels[0],
      };
    },

    methods: {
      handleClick(difficult: Difficult) {
        if (this.selected === difficult) return;

        this.selected = difficult;

        this.$emit('change', difficult);
      },
    },

    mounted(): void {
      this.$emit('change', this.selected);
    },
  });
</script>

<style scoped lang="scss">
  .difficulties-holder {
    margin: 10px;

    display: flex;

    flex-direction: column;
  }

  .selected {
    color: red;
  }

  .difficult {
    border: 1px solid black;
    padding: 10px;

    &:hover {
      cursor: pointer;
    }
  }
</style>
