e.d(s, { default: () => c });
var r = e(627968),
    i = e(64700),
    a = e(189213),
    n = e(73621),
    l = e(985018),
    o = e(543495);
let c = (t) => {
    let { transitionState: s, errors: e, onClose: c } = t,
        d = i.useMemo(() => [{ variant: "secondary", text: l.intl.string(l.t["NX+WJN"]), onClick: c }], [c]);
    return (0, r.jsx)(a.Modal, {
        title: l.intl.string(l.t.AUIsQU),
        transitionState: s,
        onClose: c,
        actions: d,
        children: (0, r.jsx)("div", {
            className: o.s,
            children: e.map((t) => (0, r.jsx)(n.A, { error: t }, t.filename)),
        }),
    });
};
