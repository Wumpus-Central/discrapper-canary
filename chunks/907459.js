"use strict";
n.d(t, { L: () => i });
var r = n(57985);
function i(e, t, n) {
    let i = (0, r.Y1)(n);
    return null == i
        ? e
        : "vc_probability" === i
          ? [...e].sort((e, n) => (t.get(n.id)?.vcProbability ?? 0) - (t.get(e.id)?.vcProbability ?? 0))
          : [...e].sort(
                (e, n) => (t.get(n.id)?.communicationProbability ?? 0) - (t.get(e.id)?.communicationProbability ?? 0),
            );
}
