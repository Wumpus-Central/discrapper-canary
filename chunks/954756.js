n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(809206),
    a = n(852860),
    o = n(164946),
    c = n(350327),
    d = n(25990),
    u = n(647699),
    m = n(155433),
    h = n(388032);
function g() {
    let e = (0, r.e7)([d.Z], () => d.Z.getIsSubmitDisabled()),
        t = (0, r.e7)([d.Z], () => d.Z.getErrors()),
        [n, g] = s.useState(!1),
        _ = s.useMemo(() => ((null == t ? void 0 : t.message) != null ? (null == t ? void 0 : t.message) : Object.keys(null != t ? t : {}).length > 0 ? h.intl.string(h.t['84MExs']) : null), [t]),
        x = s.useCallback(async () => {
            var e, t, n;
            g(!0);
            let i = d.Z.getAllPending(),
                s = (0, o.ED)(i),
                r = (0, o.g9)(i),
                a = !0;
            if (Object.keys(s).length > 0) {
                let n = await (0, l.Mn)(s);
                (a = a && null !== (t = null == n ? void 0 : n.ok) && void 0 !== t && t), (null == n ? void 0 : n.ok) ? (0, l.si)() : (null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.username) != null && (0, m.P)();
            }
            if (Object.keys(r).length > 0) {
                let e = await (0, c.Z)(r);
                (a = a && null !== (n = null == e ? void 0 : e.ok) && void 0 !== n && n), (null == e ? void 0 : e.ok) ? (0, c.pG)() : (0, u.r)();
            }
            a && (0, l.b9)(), g(!1);
        }, []),
        p = s.useCallback(() => {
            (0, l.W3)();
        }, []);
    return (0, i.jsx)(a.Z, {
        submitting: n,
        onSave: x,
        onReset: p,
        disabled: e,
        errorMessage: null != _ ? _ : void 0
    });
}
