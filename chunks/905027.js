n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(852860),
    l = n(164946),
    o = n(350327),
    c = n(647699),
    d = n(18438),
    u = n(778825),
    m = n(388032);
function g() {
    let e = (0, r.e7)([u.Z], () => u.Z.getIsSubmitDisabled()),
        t = (0, r.e7)([u.Z], () => u.Z.getGuild()),
        n = (0, r.e7)([u.Z], () => u.Z.getErrors()),
        [g, h] = s.useState(!1),
        p = s.useMemo(() => ((null == n ? void 0 : n.message) != null ? (null == n ? void 0 : n.message) : Object.keys(null != n ? n : {}).length > 0 ? m.intl.string(m.t.s35OuL) : null), [n]),
        x = s.useCallback(async () => {
            var e, n;
            h(!0);
            let i = u.Z.getAllPending(),
                s = (0, l.Jo)(i),
                r = (0, l.g9)(i),
                a = !0;
            if (Object.keys(s).length > 0) {
                let n = await (0, d.iq)(null == t ? void 0 : t.id, s);
                (a = a && null !== (e = null == n ? void 0 : n.ok) && void 0 !== e && e), (null == n ? void 0 : n.ok) && (0, d.IO)();
            }
            if (Object.keys(r).length > 0) {
                let e = await (0, o.Z)(r, null == t ? void 0 : t.id);
                (a = a && null !== (n = null == e ? void 0 : e.ok) && void 0 !== n && n), (null == e ? void 0 : e.ok) ? (0, d.pG)() : (0, c.v)();
            }
            a && (0, d.b9)(), h(!1);
        }, [null == t ? void 0 : t.id]),
        f = s.useCallback(() => {
            (0, d.W3)();
        }, []);
    return (0, i.jsx)(a.Z, {
        submitting: g,
        onSave: x,
        onReset: f,
        disabled: e,
        errorMessage: null != p ? p : void 0
    });
}
