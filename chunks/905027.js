n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(852860),
    a = n(164946),
    o = n(350327),
    c = n(647699),
    d = n(18438),
    u = n(778825),
    m = n(388032);
function h() {
    let e = (0, r.e7)([u.Z], () => u.Z.getIsSubmitDisabled()),
        t = (0, r.e7)([u.Z], () => u.Z.getGuild()),
        n = (0, r.e7)([u.Z], () => u.Z.getErrors()),
        [h, g] = s.useState(!1),
        _ = s.useMemo(() => ((null == n ? void 0 : n.message) != null ? (null == n ? void 0 : n.message) : Object.keys(null != n ? n : {}).length > 0 ? m.intl.string(m.t.s35OuL) : null), [n]),
        x = s.useCallback(async () => {
            var e, n;
            g(!0);
            let i = u.Z.getAllPending(),
                s = (0, a.Jo)(i),
                r = (0, a.g9)(i),
                l = !0;
            if (Object.keys(s).length > 0) {
                let n = await (0, d.iq)(null == t ? void 0 : t.id, s);
                (l = l && null !== (e = null == n ? void 0 : n.ok) && void 0 !== e && e), (null == n ? void 0 : n.ok) && (0, d.IO)();
            }
            if (Object.keys(r).length > 0) {
                let e = await (0, o.Z)(r, null == t ? void 0 : t.id);
                (l = l && null !== (n = null == e ? void 0 : e.ok) && void 0 !== n && n), (null == e ? void 0 : e.ok) ? (0, d.pG)() : (0, c.v)();
            }
            l && (0, d.b9)(), g(!1);
        }, [null == t ? void 0 : t.id]),
        p = s.useCallback(() => {
            (0, d.W3)();
        }, []);
    return (0, i.jsx)(l.Z, {
        submitting: h,
        onSave: x,
        onReset: p,
        disabled: e,
        errorMessage: null != _ ? _ : void 0
    });
}
