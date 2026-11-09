var l = n(477900),
    i = n(582128),
    r = n(855986),
    s = n(531685),
    a = n(620141),
    u = n(19309),
    o = n(224964);
function d(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        l = (0, r.bG)([s.A], () => s.A.isFocused()),
        a = (0, o.A)();
    return (
        i.useEffect(() => {
            if (l && n) {
                let e = (0, u.A)(t);
                null != e && a.fire(e.x, e.y);
            }
        }, [a, t, l, n]),
        null
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, l.jsx)(a.A, { confettiLocation: e.confettiLocation, children: (0, l.jsx)(d, { ...e }) });
        },
    },
);
