e.d(s, { default: () => o });
var i = e(477900),
    n = e(582128),
    a = e(189213),
    r = e(73621),
    c = e(375708),
    l = e(945060);
let o = function (t) {
    let { transitionState: s, errors: e, onClose: o } = t,
        d = n.useMemo(() => [{ variant: "secondary", text: c.intl.string(c.t["NX+WJN"]), onClick: o }], [o]);
    return (0, i.jsx)(a.a, {
        title: c.intl.string(c.t.AUIsQU),
        transitionState: s,
        onClose: o,
        actions: d,
        children: (0, i.jsx)("div", {
            className: l.s,
            children: e.map((t) => (0, i.jsx)(r.A, { error: t }, t.filename)),
        }),
    });
};
