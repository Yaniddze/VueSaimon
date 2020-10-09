<template>
  <div id="app">
    <div>
      <div class="round">
        <div>
          Раунд {{ round }}
        </div>
      </div>

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

    <div class="difficulties">
      <DifficultSelector @click="handleDifficultChange"/>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import ButtonComponent from '@/components/ButtonComponent.vue';
  import DifficultSelector from '@/components/DifficultSelector.vue';

  import { SimonButton, DifficultLevels } from '@/model';
  import { Difficult } from '@/model/DifficultLevels';

  export default Vue.extend({
    name: 'App',
    components: {
      ButtonComponent,
      DifficultSelector,
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
        round: 0,
        difficult: DifficultLevels[0],
      };
    },

    methods: {
      handleClick(btn: SimonButton) {
        if (!this.locked) {
          btn.PlayAudio();
        }
      },

      handleDifficultChange(difficult: Difficult) {
        this.difficult = difficult;
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
    position: absolute;
    display: flex;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    > div > div {
      display: flex;

      > div {
        margin: 10px;
      }
    }
  }

  .round {
    font-size: 26px;
    font-weight: bold;
  }

  .difficulties {
    margin-top: 40px;
  }
</style>
