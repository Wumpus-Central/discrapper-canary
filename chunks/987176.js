var a = i(477900),
    s = i(582128),
    c = i(189213),
    e = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { transitionState: n, onConfirm: i, onClose: r, onDismiss: o } = t,
                [l, u] = s.useState(!1);
            function d() {
                return (o(), r());
            }
            return (0, a.jsx)(c.a, {
                transitionState: n,
                onClose: d,
                title: e.intl.string(e.t["66tnno"]),
                subtitle: e.intl.string(e.t["c/k4SW"]),
                actions: [
                    { text: e.intl.string(e.t["ETE/oC"]), onClick: d, variant: "secondary" },
                    {
                        text: e.intl.string(e.t["cY+Oob"]),
                        onClick: async function () {
                            if (!l) {
                                u(!0);
                                try {
                                    await i();
                                } catch (t) {
                                } finally {
                                    u(!1);
                                }
                                r();
                            }
                        },
                        loading: l,
                    },
                ],
            });
        },
    },
);
