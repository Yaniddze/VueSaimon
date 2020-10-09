<template>
  <div id="app">
    <div>
      <div class="round">
        <div>
          Раунд {{ round }}
        </div>

        <div v-if="round > 0">
          Сложность {{ difficult.title }}
        </div>
      </div>

      <div>
        <ButtonComponent
          @click="handleClick"
          :button="buttons[0]"
          audio-url="./1.mp3"
        />
        <ButtonComponent
          @click="handleClick"
          :button="buttons[1]"
          audio-url="./2.mp3"
        />
      </div>
      <div>
        <ButtonComponent
          @click="handleClick"
          :button="buttons[2]"
          audio-url="./3.mp3"
        />
        <ButtonComponent
          @click="handleClick"
          :button="buttons[3]"
          audio-url="./4.mp3"
        />
      </div>
    </div>

    <div v-if="round === 0" >
      <div class="difficulties">
        <DifficultSelector @change="handleDifficultChange"/>
      </div>

      <div class="start-btn-holder">
        <button @click="handleStart">
          Старт
        </button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import ButtonComponent from '@/components/ButtonComponent.vue';
  import DifficultSelector from '@/components/DifficultSelector.vue';

  import {
    SimonButton,
    DifficultLevels,
    CompareSequences,
    GenerateSequence,
    PlayRound,
  } from '@/model';
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
        selectedButtons: [] as SimonButton[],
        roundSequence: [] as SimonButton[],
        round: 0,
        difficult: DifficultLevels[0],
      };
    },

    methods: {
      handleClick(btn: SimonButton) {
        if (this.round > 0 && !this.locked) {
          this.selectedButtons.push(btn);

          btn.PlayAudio();
        }
      },

      handleDifficultChange(difficult: Difficult) {
        this.difficult = difficult;
      },

      handleStart(event: MouseEvent) {
        event.preventDefault();

        this.round = 1;
      },
    },

    watch: {
      round() {
        if (this.round === 0) return;
        this.selectedButtons = [];
        this.locked = true;

        this.roundSequence = GenerateSequence(this.roundSequence, this.buttons);

        setTimeout(() => {
          this.locked = false;
        }, this.round * this.difficult.value);

        PlayRound(this.roundSequence, this.difficult);
      },

      selectedButtons() {
        if (this.selectedButtons.length === this.round) {
          if (CompareSequences(this.selectedButtons, this.roundSequence)) {
            this.round += 1;
          } else {
            this.round = 0;
          }
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
    position: absolute;

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

  @media (min-width: 500px) {
    #app {
      display: flex;
    }
  }

  .round {
    font-size: 26px;
    font-weight: bold;
  }

  .difficulties {
    margin-top: 40px;

    > div > div {
      margin: 10px;
    }
  }

  .start-btn-holder {
    margin-left: 20px;

    button {
      border: none;
      background: green;
      color: white;
      padding: 10px;
      width: 75px;
      font-size: 16px;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
