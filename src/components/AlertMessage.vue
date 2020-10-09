<template>
  <div class="alert">
    <div>
      {{ message }}
    </div>
    <div class="btn">
      <SquareButton
        @click="$emit('click')"
        title="Ok"
      />
    </div>
  </div>
</template>

<script>
  import SquareButton from './buttons/SquareButton.vue';

  export default {
    name: 'AlertMessage',

    props: {
      message: {
        type: String,
      },
    },

    components: {
      SquareButton,
    },
  };
</script>

<style scoped lang="scss">
  @keyframes Show {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .alert {
    position: fixed;
    top: 0;
    left: 50%;
    margin-top: 30px;

    padding: 10px;

    transform: translate(-50%, -100%);

    width: 250px;
    border-radius: 10px;

    background: #79d27d;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

    .btn {
      display: flex;

      > * {
        margin-left: auto;
        margin-right: 10px;
      }
    }

    animation: .2s Show normal;
  }
</style>
