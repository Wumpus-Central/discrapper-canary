n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(809206),
    l = n(852860),
    o = n(164946),
    c = n(350327),
    d = n(25990),
    u = n(647699),
    m = n(155433),
    g = n(388032);
function h() {
    let e = (0, s.e7)([d.Z], () => d.Z.getIsSubmitDisabled()),
        t = (0, s.e7)([d.Z], () => d.Z.getErrors()),
        [n, h] = r.useState(!1),
        p = r.useMemo(() => ((null == t ? void 0 : t.message) != null ? (null == t ? void 0 : t.message) : Object.keys(null != t ? t : {}).length > 0 ? g.intl.string(g.t['84MExs']) : null), [t]),
        x = r.useCallback(async () => {
            var e, t, n;
            h(!0);
            let i = d.Z.getAllPending(),
                r = (0, o.ED)(i),
                s = (0, o.g9)(i),
                l = !0;
            if (Object.keys(r).length > 0) {
                let n = await (0, a.Mn)(r);
                (l = l && null !== (t = null == n ? void 0 : n.ok) && void 0 !== t && t), (null == n ? void 0 : n.ok) ? (0, a.si)() : (null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.username) != null && (0, m.P)();
            }
            if (Object.keys(s).length > 0) {
                let e = await (0, c.Z)(s);
                (l = l && null !== (n = null == e ? void 0 : e.ok) && void 0 !== n && n), (null == e ? void 0 : e.ok) ? (0, c.pG)() : (0, u.r)();
            }
            l && (0, a.b9)(), h(!1);
        }, []),
        f = r.useCallback(() => {
            (0, a.W3)();
        }, []);
    return (0, i.jsx)(l.Z, {
        submitting: n,
        onSave: x,
        onReset: f,
        disabled: e,
        errorMessage: null != p ? p : void 0
    });
}
