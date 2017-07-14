import Card from "./model/Card";
import Rank from "./model/Rank";
import Suit from "./model/Suit";

const defaults = {
  args: null
};

function run(args = defaults.args) {
  console.log(args, new Card(Rank.ACE, Suit.SPADE).toString());
}

export {
  defaults,
  run
};
