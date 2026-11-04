n(321073);
var a = n(477900),
    s = n(582128),
    e = n(189213),
    r = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { transitionState: i, onClose: n, title: l, body: c, cta: o, closeLabel: u, onConfirm: p } = t,
                [d, h] = s.useState(!1),
                k = l ?? r.intl.string(r.t.D94rwS),
                y = [];
            return (
                null != u && y.push({ variant: "secondary", text: u, onClick: n }),
                y.push({
                    variant: "primary",
                    text: o,
                    onClick: async function () {
                        h(!0);
                        try {
                            (await p(), n());
                        } finally {
                            h(!1);
                        }
                    },
                    loading: d,
                }),
                (0, a.jsx)(e.a, { title: k, actions: y, transitionState: i, onClose: n, children: c })
            );
        },
    },
);
