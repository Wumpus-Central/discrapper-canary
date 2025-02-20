n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(809206),
    l = n(852860),
    o = n(164946),
    c = n(350327),
    d = n(25990),
    u = n(647699),
    m = n(155433),
    g = n(388032);
function p() {
    let e = (0, s.e7)([d.Z], () => d.Z.getIsSubmitDisabled()),
        t = (0, s.e7)([d.Z], () => d.Z.getErrors()),
        [n, p] = i.useState(!1),
        h = i.useMemo(() => ((null == t ? void 0 : t.message) != null ? (null == t ? void 0 : t.message) : Object.keys(null != t ? t : {}).length > 0 ? g.NW.string(g.t['84MExs']) : null), [t]),
        f = i.useCallback(async () => {
            var e, t, n;
            p(!0);
            let r = d.Z.getAllPending(),
                i = (0, o.ED)(r),
                s = (0, o.g9)(r),
                l = !0;
            if (Object.keys(i).length > 0) {
                let n = await (0, a.Mn)(i);
                (l = l && null !== (t = null == n ? void 0 : n.ok) && void 0 !== t && t), (null == n ? void 0 : n.ok) ? (0, a.si)() : (null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.username) != null && (0, m.P)();
            }
            if (Object.keys(s).length > 0) {
                let e = await (0, c.Z)(s);
                (l = l && null !== (n = null == e ? void 0 : e.ok) && void 0 !== n && n), (null == e ? void 0 : e.ok) ? (0, c.pG)() : (0, u.r)();
            }
            l && (0, a.b9)(), p(!1);
        }, []),
        b = i.useCallback(() => {
            (0, a.W3)();
        }, []);
    return (0, r.jsx)(l.Z, {
        submitting: n,
        onSave: f,
        onReset: b,
        disabled: e,
        errorMessage: null != h ? h : void 0
    });
}
