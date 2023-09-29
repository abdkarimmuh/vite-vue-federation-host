export default {
  setCounter(payload) {
    this.counter = payload;
  },
  increment() {
    this.counter += 1;
  },
};

// export const increment = () => {
//   this.counter += 1;
// };
