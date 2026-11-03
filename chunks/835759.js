s.d(l, { A: () => o });
var t = s(477900),
    n = s(582128),
    i = s(17928),
    r = s(531685),
    a = s(620141),
    c = s(19309),
    d = s(224964);
function u(e) {
    let { confettiSpawnRef: l, shouldFire: s } = e,
        t = (0, i.bG)([r.A], () => r.A.isFocused()),
        a = (0, d.A)();
    return (
        n.useEffect(() => {
            if (t && s) {
                let e = (0, c.A)(l);
                null != e && a.fire(e.x, e.y);
            }
        }, [a, l, t, s]),
        null
    );
}
function o(e) {
    return (0, t.jsx)(a.A, { confettiLocation: e.confettiLocation, children: (0, t.jsx)(u, { ...e }) });
}
