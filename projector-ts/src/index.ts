import config, { Operation } from "./config";
import getOpts from "./opts";
import Projector from "./projector";

const opts = getOpts();
const cfg = config(opts);
const proj = Projector.fromConfig(cfg);

if (cfg.operation === Operation.Print) {
  if (cfg.args.length === 0) {
    console.log(JSON.stringify(proj.getValueAll()));
  } else {
    const value = proj.getValue(cfg.args[0]);
    if (value) {
      console.log(value);
    }
  }
}

if (cfg.operation === Operation.Add) {
  proj.setValue(cfg.args[0], cfg.args[1]);
  proj.save();
}

if (cfg.operation === Operation.Remove) {
  proj.removeValue(cfg.args[0]);
  proj.save();
}
