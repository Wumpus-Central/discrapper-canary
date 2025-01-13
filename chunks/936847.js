n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(576125),
    a = n(465858),
    s = n(112843),
    o = n(524484);
function c(e) {
    let { callTileRef: t, isFiring: n } = e,
        i = (0, s.Z)(),
        r = (0, a.Z)(t);
    return (
        l.useEffect(() => {
            n && null != r && null != t && i.fire(r.x + t.clientWidth / 2, r.y + t.clientHeight / 2, { countMultiplier: 4 });
        }, [t, i, n, r]),
        null
    );
}
function u(e) {
    return (0, i.jsx)(r.Z, {
        confettiLocation: o.Hn.CALL_TILE,
        children: (0, i.jsx)(c, { ...e })
    });
}
