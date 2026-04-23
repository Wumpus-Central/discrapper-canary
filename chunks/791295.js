n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(265486),
    a = n(997509),
    l = n(652215),
    s = n(49999),
    o = n(985018),
    d = n(279688);
function u(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: u } = e;
    return (0, i.jsx)(r.A, {
        targetElementRef: u,
        title: o.intl.string(o.t.Hgd22r),
        body: o.intl.string(o.t.SorTPA),
        graphic: { type: "image", src: d },
        actions: [
            {
                text: o.intl.string(o.t["9l+df7"]),
                variant: "primary",
                onClick: (e) => {
                    a.A.open(t.id, l.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(s.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
