n.d(t, { Z: () => f }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(809206),
    a = n(852860),
    o = n(321114),
    c = n(164946),
    d = n(350327),
    u = n(330055),
    m = n(25990),
    p = n(647699),
    g = n(155433),
    h = n(388032);
function f() {
    let e = (0, s.e7)([m.Z], () => m.Z.getIsSubmitDisabled()),
        t = (0, s.e7)([m.Z], () => m.Z.getErrors()),
        [n, f] = r.useState(!1),
        b = r.useMemo(() => ((null == t ? void 0 : t.message) != null ? (null == t ? void 0 : t.message) : Object.keys(null != t ? t : {}).length > 0 ? h.intl.string(h.t['84MExs']) : null), [t]),
        _ = r.useCallback(async () => {
            var e, t, n, i, r;
            f(!0);
            let s = m.Z.getAllPending(),
                a = (0, c.ED)(s),
                h = (0, c.g9)(s),
                b = (0, c.jE)(s),
                _ = !0;
            if (Object.keys(a).length > 0) {
                let i = await (0, l.Mn)(a);
                if (((_ = _ && null != (t = null == i ? void 0 : i.ok) && t), null == i ? void 0 : i.ok)) {
                    let e = i.body;
                    void 0 !== s.pendingAvatar &&
                        (0, u.Z)({
                            avatarHash: e.avatar,
                            avatarId: a.avatarId,
                            avatarAssetOrigin: null == (n = s.pendingAvatar) ? void 0 : n.assetOrigin
                        }),
                        (0, l.si)();
                } else (null == i || null == (e = i.body) ? void 0 : e.username) != null && (0, g.P)();
            }
            if (Object.keys(h).length > 0) {
                let e = await (0, d.Z)(h);
                (_ = _ && null != (i = null == e ? void 0 : e.ok) && i), (null == e ? void 0 : e.ok) ? (0, d.pG)() : (0, p.r)();
            }
            if (Object.keys(b).length > 0) {
                let { primaryGuildId: e } = b;
                if (void 0 !== e) {
                    let t = await (0, o.c)(e, null !== e);
                    (_ = _ && null != (r = null == t ? void 0 : t.ok) && r), (null == t ? void 0 : t.ok) ? (0, l.OU)() : (0, p.r)();
                }
            }
            _ && (0, l.b9)(), f(!1);
        }, []),
        x = r.useCallback(() => {
            (0, l.W3)();
        }, []);
    return (0, i.jsx)(a.Z, {
        submitting: n,
        onSave: _,
        onReset: x,
        disabled: e,
        errorMessage: null != b ? b : void 0
    });
}
