let selection: Selection | null;
let range: Range | null;

const save = (): Range | null => {
  selection = document.getSelection();
  if (selection && selection.rangeCount > 0) {
    range = selection.getRangeAt(0);
  } else {
    range = null; // reset previous range
  }

  return range;
};

const restore = (cb?: () => void): void => {
  window.setTimeout(() => {
    if (selection && range) {
      selection.removeAllRanges();
      selection.addRange(range);
      if (cb) {
        cb();
      }
    }
  });
};

const empty = (): void => {
  document.getSelection()?.empty();
};

export const withRange = (fn: (range: Range) => void): void => {
  const range = save();
  if (!range) {
    return;
  }

  fn(range);
};

export default {
  save,
  restore,
  empty,
};
