"use strict";
function i(e) {
    return e
        .replace(/[\s-~]+/g, "-")
        .replace(/^-+/, "")
        .replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "")
        .toLowerCase();
}
n.d(t, { A: () => i });
