n.d(t, {
    A: () => c,
});
var r = n(627968),
    a = n(735438),
    i = n.n(a),
    l = n(397927),
    s = n(828904),
    o = n(974175),
    d = n(985018);

function c(e) {
    let { camera: t } = e;
    if (null == t)
        return (0, r.jsx)(l.y$y, {
            type: l.y$y.Type.SPINNING_CIRCLE,
        });
    let n = i().map(t, (e, t) => {
        if (!(o.R[t] || void 0 === e))
            return (0, r.jsx)(
                o.q7,
                {
                    label: t,
                    value: e,
                },
                t,
            );
    });
    return (0, r.jsxs)(l.BJc, {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-md/medium",
                children: d.intl.string(d.t["2AGBWH"]),
            }),
            (0, s.C6)(n),
        ],
    });
}
