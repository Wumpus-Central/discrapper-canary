e.d(s, { default: () => o });
var i = e(627968),
    n = e(64700),
    a = e(189213),
    r = e(73621),
    l = e(375708),
    c = e(543495);
let o = function (t) {
    let { transitionState: s, errors: e, onClose: o } = t,
        d = n.useMemo(() => [{ variant: "secondary", text: l.intl.string(l.t["NX+WJN"]), onClick: o }], [o]);
    return (0, i.jsx)(a.Modal, {
        title: l.intl.string(l.t.AUIsQU),
        transitionState: s,
        onClose: o,
        actions: d,
        children: (0, i.jsx)("div", {
            className: c.s,
            children: e.map((t) => (0, i.jsx)(r.A, { error: t }, t.filename)),
        }),
    });
};
