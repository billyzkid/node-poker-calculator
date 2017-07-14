import { version } from "../package";

const defaults = {
  args: null
};

function run(args = defaults.args) {
  console.log(args, version);
}

export {
  defaults,
  run
};
