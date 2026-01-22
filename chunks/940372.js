e.d(s, { default: () => c });
var a = e(627968),
    i = e(64700),
    n = e(732955),
    r = e(563863),
    d = e(985018),
    l = e(267322);
let c = (t) => {
    let { transitionState: s, errors: e, onClose: c } = t,
        o = i.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: d.intl.string(d.t["NX+WJN"]),
                    onClick: c,
                },
            ],
            [c],
        );
    return (0, a.jsx)(n.aFV, {
        title: d.intl.string(d.t.AUIsQU),
        transitionState: s,
        onClose: c,
        actions: o,
        children: (0, a.jsx)("div", {
            className: l.s,
            children: e.map((t) => (0, a.jsx)(r.A, { error: t }, t.filename)),
        }),
    });
};
