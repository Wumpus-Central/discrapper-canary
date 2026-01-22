n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(342494),
    l = n(997509),
    a = n(652215),
    s = n(49999),
    o = n(985018),
    c = n(279688);

function u(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: u } = e;
    return (0, r.jsx)(i.AM, {
        targetElementRef: u,
        title: o.intl.string(o.t.Hgd22r),
        body: o.intl.string(o.t.SorTPA),
        graphic: {
            type: "image",
            src: c,
        },
        actions: [
            {
                text: o.intl.string(o.t["9l+df7"]),
                variant: "primary",
                onClick: (e) => {
                    l.A.open(t.id, a.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(s.i.USER_DISMISS),
        position: "bottom",
        caretConfig: {
            align: "center",
        },
    });
}
