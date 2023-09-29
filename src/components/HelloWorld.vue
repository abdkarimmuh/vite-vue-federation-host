<script setup>
import { defineAsyncComponent } from "vue";
import counterStore from "@/store/counter";

const RemoteButton = defineAsyncComponent(() => import("remote_app/Button"));
const RemoteDocs = defineAsyncComponent(() => import("remote_app/Docs"));

defineProps({
  msg: String,
});

const count = counterStore();
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <RemoteButton
      :count="count.getCounter"
      @onClick="count.increment()"
    ></RemoteButton>
    <!-- <button type="button" @click="count++">count is {{ count }}</button> -->

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <!-- <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
  <RemoteDocs></RemoteDocs>
</template>

<style scoped>
/* .read-the-docs {
  color: #888;
} */
</style>
