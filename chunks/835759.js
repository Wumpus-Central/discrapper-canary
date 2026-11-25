var l = n(477900),
    i = n(582128),
    r = n(855986),
    a = n(531685),
    s = n(620141),
    o = n(19309),
    u = n(224964);
function d(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        l = (0, r.bG)([a.A], () => a.A.isFocused()),
        s = (0, u.A)();
    return (
        i.useEffect(() => {
            if (l && n) {
                let e = (0, o.A)(t);
                null != e && s.fire(e.x, e.y);
            }
        }, [s, t, l, n]),
        null
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, l.jsx)(s.A, { confettiLocation: e.confettiLocation, children: (0, l.jsx)(d, { ...e }) });
        },
    },
);
