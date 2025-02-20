n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(852860),
    l = n(164946),
    o = n(350327),
    c = n(647699),
    d = n(18438),
    u = n(778825),
    m = n(388032);
function g() {
    let e = (0, s.e7)([u.Z], () => u.Z.getIsSubmitDisabled()),
        t = (0, s.e7)([u.Z], () => u.Z.getGuild()),
        n = (0, s.e7)([u.Z], () => u.Z.getErrors()),
        [g, p] = i.useState(!1),
        h = i.useMemo(() => ((null == n ? void 0 : n.message) != null ? (null == n ? void 0 : n.message) : Object.keys(null != n ? n : {}).length > 0 ? m.NW.string(m.t.s35OuL) : null), [n]),
        f = i.useCallback(async () => {
            var e, n;
            p(!0);
            let r = u.Z.getAllPending(),
                i = (0, l.Jo)(r),
                s = (0, l.g9)(r),
                a = !0;
            if (Object.keys(i).length > 0) {
                let n = await (0, d.iq)(null == t ? void 0 : t.id, i);
                (a = a && null !== (e = null == n ? void 0 : n.ok) && void 0 !== e && e), (null == n ? void 0 : n.ok) && (0, d.IO)();
            }
            if (Object.keys(s).length > 0) {
                let e = await (0, o.Z)(s, null == t ? void 0 : t.id);
                (a = a && null !== (n = null == e ? void 0 : e.ok) && void 0 !== n && n), (null == e ? void 0 : e.ok) ? (0, d.pG)() : (0, c.v)();
            }
            a && (0, d.b9)(), p(!1);
        }, [null == t ? void 0 : t.id]),
        b = i.useCallback(() => {
            (0, d.W3)();
        }, []);
    return (0, r.jsx)(a.Z, {
        submitting: g,
        onSave: f,
        onReset: b,
        disabled: e,
        errorMessage: null != h ? h : void 0
    });
}
