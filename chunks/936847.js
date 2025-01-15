n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(576125),
    r = n(465858),
    s = n(112843),
    o = n(524484);
function c(e) {
    let { callTileRef: t, isFiring: n } = e,
        i = (0, s.Z)(),
        a = (0, r.Z)(t);
    return (
        l.useEffect(() => {
            n && null != a && null != t && i.fire(a.x + t.clientWidth / 2, a.y + t.clientHeight / 2, { countMultiplier: 4 });
        }, [t, i, n, a]),
        null
    );
}
function u(e) {
    return (0, i.jsx)(a.Z, {
        confettiLocation: o.Hn.CALL_TILE,
        children: (0, i.jsx)(c, { ...e })
    });
}
