<template>
  <div id="app">
    <div>
      <ButtonComponent
        @click="handleClick"
        :button="buttons[0]"
        audio-url="http://www.kellyking.me/projects/simon/sounds/1.mp3"
      />
      <ButtonComponent
        @click="handleClick"
        :button="buttons[1]"
        audio-url="http://www.kellyking.me/projects/simon/sounds/2.mp3"
      />
    </div>
    <div>
      <ButtonComponent
        @click="handleClick"
        :button="buttons[2]"
        audio-url="http://www.kellyking.me/projects/simon/sounds/3.mp3"
      />
      <ButtonComponent
        @click="handleClick"
        :button="buttons[3]"
        audio-url="http://www.kellyking.me/projects/simon/sounds/4.mp3"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import ButtonComponent from '@/components/ButtonComponent.vue';
  import { SimonButton } from '@/model';

  export default Vue.extend({
    name: 'App',
    components: {
      ButtonComponent,
    },

    data() {
      return {
        buttons: [
          new SimonButton('red'),
          new SimonButton('green'),
          new SimonButton('blue'),
          new SimonButton('yellow'),
        ],
        locked: false,
      };
    },

    methods: {
      handleClick(btn: SimonButton) {
        if (!this.locked) {
          btn.PlayAudio();
        }
      },
    },
  });
</script>

<style lang="scss">
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    background: #E8F5E9;
  }

  #app {
    > div {
      display: flex;

      > div {
        margin: 10px;
      }
    }
  }
</style>
