i.d(a, {
    default: () => r,
}),
    i(896048),
    i(321073);
var n = i(627968),
    l = i(64700),
    s = i(158954),
    e = i(985018);

function r(t) {
    let { transitionState: a, onClose: i, title: r, body: c, cta: o, closeLabel: u, onConfirm: d } = t,
        [p, h] = l.useState(!1),
        k = async () => {
            h(!0);
            try {
                await d(), i();
            } finally {
                h(!1);
            }
        },
        y = null != r ? r : e.intl.string(e.t.D94rwS),
        C = [];
    return (
        null != u &&
            C.push({
                variant: "secondary",
                text: u,
                onClick: i,
            }),
        C.push({
            variant: "primary",
            text: o,
            onClick: k,
            loading: p,
        }),
        (0, n.jsx)(s.Modal, {
            title: y,
            actions: C,
            transitionState: a,
            onClose: i,
            children: c,
        })
    );
}
