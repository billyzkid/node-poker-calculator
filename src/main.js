const defaults = {
  args: null
};

function run(args = defaults.args) {
  console.log(args);
}

export {
  defaults,
  run
};
