"use strict";
n.d(t, { L: () => r });
var i = n(57985);
function r(e, t, n) {
    let r = (0, i.Y1)(n);
    return null == r
        ? e
        : "vc_probability" === r
          ? [...e].sort((e, n) => (t.get(n.id)?.vcProbability ?? 0) - (t.get(e.id)?.vcProbability ?? 0))
          : [...e].sort(
                (e, n) => (t.get(n.id)?.communicationProbability ?? 0) - (t.get(e.id)?.communicationProbability ?? 0),
            );
}
