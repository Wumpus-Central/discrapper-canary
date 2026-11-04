var n = s(477900),
    a = s(582128),
    e = s(189213),
    c = s(231723),
    r = s(289873),
    u = s(792996),
    d = s(576370);
s.d(
    i,
    {},
    {
        default: function (t) {
            let { transitionState: i, processFiles: s, onClose: l } = t;
            return (
                a.useEffect(() => {
                    !(async function () {
                        i === c.ip.ENTERED && (await s(), l());
                    })();
                }, [l, s, i]),
                (0, n.jsx)(e.a, {
                    title: u.intl.string(u.t["B/HSDd"]),
                    subtitle: u.intl.string(u.t.k7OALr),
                    actions: void 0,
                    onClose: l,
                    transitionState: i,
                    children: (0, n.jsx)(r.y, { className: d.u }),
                })
            );
        },
    },
);
