var i = n(477900);
n(582128);
var r = n(377802),
    a = n(597798),
    s = n(693409),
    l = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { centerButton: t = !1, onClick: n, onMouseEnter: o, onMouseLeave: d, ...c } = e,
                u = t ? s.l : s.A,
                { Component: _, events: E } = (0, r.O)();
            return (0, i.jsx)(u, {
                ...c,
                isTrayButton: !1,
                onClick: function () {
                    (n?.(), a.default.disconnect());
                },
                iconComponent: _,
                onMouseEnter: (e) => {
                    (o?.(e), E.onMouseEnter());
                },
                onMouseLeave: (e) => {
                    (d?.(e), E.onMouseLeave());
                },
                label: l.intl.string(l.t["6vrfgt"]),
            });
        },
    },
);
