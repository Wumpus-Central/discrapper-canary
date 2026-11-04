var i = n(57985);
n.d(
    t,
    {},
    {
        L: function (e, t, n) {
            let r = (0, i.Y1)(n);
            return null == r
                ? e
                : "vc_probability" === r
                  ? [...e].sort((e, n) => (t.get(n.id)?.vcProbability ?? 0) - (t.get(e.id)?.vcProbability ?? 0))
                  : [...e].sort(
                        (e, n) =>
                            (t.get(n.id)?.communicationProbability ?? 0) - (t.get(e.id)?.communicationProbability ?? 0),
                    );
        },
    },
);
