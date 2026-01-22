n.d(t, {
    L: () => i,
}),
    n(896048),
    n(638769);
var r = n(57985);

function i(e, t, n) {
    let i = (0, r.Y1)(n);
    return null == i
        ? e
        : "vc_probability" === i
          ? [...e].sort((e, n) => {
                var r, i, a, s;
                return (
                    (null != (r = null == (a = t.get(n.id)) ? void 0 : a.vcProbability) ? r : 0) -
                    (null != (i = null == (s = t.get(e.id)) ? void 0 : s.vcProbability) ? i : 0)
                );
            })
          : [...e].sort((e, n) => {
                var r, i, a, s;
                return (
                    (null != (r = null == (a = t.get(n.id)) ? void 0 : a.communicationProbability) ? r : 0) -
                    (null != (i = null == (s = t.get(e.id)) ? void 0 : s.communicationProbability) ? i : 0)
                );
            });
}
