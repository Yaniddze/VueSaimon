<template>
  <div>
    <button @click="$emit('click', $event)">
      {{ title }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'SquareButton',
    props: {
      title: {
        type: String,
      },
    },
  };
</script>

<style scoped lang="scss">
  button {
    padding: 10px;
    border: none;
    background: #66BB6A;
    color: #000;
    box-shadow: 3px 3px #3a7d3d;
    transition: .2s all ease;
    font-size: 16px;
    width: 100%;
    margin: 10px;

    &:active {
      box-shadow: none;
      transform: translate(3px, 3px);
    }

    &:hover {
      cursor: pointer;
    }
  }
</style>
