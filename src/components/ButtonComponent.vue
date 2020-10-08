<template>
  <div
    @click="handleClick"
    :style="style"
    class="btn"
    :class="playing && 'playing'"
  >
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { SimonButton } from '@/model';

  export default Vue.extend({
    name: 'ButtonComponent',

    props: {
      button: {
        type: Object as () => SimonButton,
      },
      audioUrl: {
        type: String,
      },
    },

    data() {
      return {
        audio: new Audio(this.audioUrl),
        playing: false,
      };
    },

    mounted(): void {
      this.button.PlayAudio = () => {
        this.audio.play();

        this.playing = true;

        setTimeout(() => {
          this.playing = false;
        }, 200);
      };
    },

    methods: {
      handleClick(event: MouseEvent) {
        event.preventDefault();

        this.$emit('click', this.button);
      },
    },

    computed: {
      style() {
        return `background: ${this.button.Color}`;
      },
    },
  });
</script>

<style scoped lang="scss">
  .btn {
    width: 150px;
    height: 150px;
    border: 1px solid black;
    transition: .2s all ease;

    &:hover {
      cursor: pointer;
    }
  }

  .playing {
    opacity: 0.5;
  }
</style>
