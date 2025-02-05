n.d(t, { Z: () => c });
var l = n(200651),
    i = n(192379),
    r = n(576125),
    a = n(465858),
    s = n(112843),
    o = n(524484);
function u(e) {
    let { callTileRef: t, isFiring: n } = e,
        l = (0, s.Z)(),
        r = (0, a.Z)(t);
    return (
        i.useEffect(() => {
            n && null != r && null != t && l.fire(r.x + t.clientWidth / 2, r.y + t.clientHeight / 2, { countMultiplier: 4 });
        }, [t, l, n, r]),
        null
    );
}
function c(e) {
    return (0, l.jsx)(r.Z, {
        confettiLocation: o.Hn.CALL_TILE,
        children: (0, l.jsx)(u, { ...e })
    });
}
