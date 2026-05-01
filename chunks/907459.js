n.d(t, { L: () => a });
var i = n(57985);
function a(e, t, n) {
    let a = (0, i.Y1)(n);
    return null == a
        ? e
        : "vc_probability" === a
          ? [...e].sort((e, n) => (t.get(n.id)?.vcProbability ?? 0) - (t.get(e.id)?.vcProbability ?? 0))
          : [...e].sort(
                (e, n) => (t.get(n.id)?.communicationProbability ?? 0) - (t.get(e.id)?.communicationProbability ?? 0),
            );
}
