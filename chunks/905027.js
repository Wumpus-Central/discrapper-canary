n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(852860),
    a = n(164946),
    o = n(350327),
    c = n(647699),
    d = n(18438),
    u = n(778825),
    h = n(388032);
function m() {
    let e = (0, l.e7)([u.Z], () => u.Z.getIsSubmitDisabled()),
        t = (0, l.e7)([u.Z], () => u.Z.getGuild()),
        n = (0, l.e7)([u.Z], () => u.Z.getErrors()),
        [m, g] = s.useState(!1),
        x = s.useMemo(() => ((null == n ? void 0 : n.message) != null ? (null == n ? void 0 : n.message) : Object.keys(null != n ? n : {}).length > 0 ? h.intl.string(h.t.s35OuL) : null), [n]),
        _ = s.useCallback(async () => {
            var e, n;
            g(!0);
            let i = u.Z.getAllPending(),
                s = (0, a.Jo)(i),
                l = (0, a.g9)(i),
                r = !0;
            if (Object.keys(s).length > 0) {
                let n = await (0, d.iq)(null == t ? void 0 : t.id, s);
                (r = r && null !== (e = null == n ? void 0 : n.ok) && void 0 !== e && e), (null == n ? void 0 : n.ok) && (0, d.IO)();
            }
            if (Object.keys(l).length > 0) {
                let e = await (0, o.Z)(l, null == t ? void 0 : t.id);
                (r = r && null !== (n = null == e ? void 0 : e.ok) && void 0 !== n && n), (null == e ? void 0 : e.ok) ? (0, d.pG)() : (0, c.v)();
            }
            r && (0, d.b9)(), g(!1);
        }, [null == t ? void 0 : t.id]),
        p = s.useCallback(() => {
            (0, d.W3)();
        }, []);
    return (0, i.jsx)(r.Z, {
        submitting: m,
        onSave: _,
        onReset: p,
        disabled: e,
        errorMessage: null != x ? x : void 0
    });
}
