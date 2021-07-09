import { Children } from "../types";

enum Mode {
  Wrap,
  Clone,
}

// TODO: Make this use an imported type instead
function useMode(children: JSX.Element): Mode {
  if (children.type == "function") {
    return Mode.Wrap;
  }

  return Mode.Clone;
}

export { Mode, useMode };
