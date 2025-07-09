(n.d(t, { Z: () => b }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(809206),
    l = n(852860),
    o = n(321114),
    c = n(164946),
    d = n(350327),
    u = n(330055),
    m = n(25990),
    p = n(695346),
    g = n(647699),
    h = n(155433),
    f = n(388032);
function b() {
    let e = (0, s.e7)([m.Z], () => m.Z.getIsSubmitDisabled()),
        t = (0, s.e7)([m.Z], () => m.Z.getErrors()),
        [n, b] = r.useState(!1),
        x = r.useMemo(() => ((null == t ? void 0 : t.message) != null ? (null == t ? void 0 : t.message) : Object.keys(null != t ? t : {}).length > 0 ? f.intl.string(f.t['84MExs']) : null), [t]),
        _ = r.useCallback(async () => {
            var e, t, n, i, r;
            b(!0);
            let s = m.Z.getAllPending(),
                l = (0, c.ED)(s),
                f = (0, c.g9)(s),
                x = (0, c.jE)(s),
                _ = !0;
            if (Object.keys(l).length > 0) {
                let i = await (0, a.Mn)(l);
                if (((_ = _ && null != (t = null == i ? void 0 : i.ok) && t), null == i ? void 0 : i.ok)) {
                    let e = i.body;
                    (void 0 !== s.pendingAvatar &&
                        (0, u.Z)({
                            avatarHash: e.avatar,
                            avatarId: l.avatarId,
                            avatarAssetOrigin: null == (n = s.pendingAvatar) ? void 0 : n.assetOrigin
                        }),
                        (0, a.si)());
                } else (null == i || null == (e = i.body) ? void 0 : e.username) != null && (0, h.P)();
            }
            if (Object.keys(f).length > 0) {
                let e = await (0, d.Z)(f);
                ((_ = _ && null != (i = null == e ? void 0 : e.ok) && i), (null == e ? void 0 : e.ok) ? (0, d.pG)() : (0, g.r)());
            }
            if (void 0 !== s.pendingLegacyUsernameDisabled)
                try {
                    (await p.R_.updateSetting(s.pendingLegacyUsernameDisabled), (0, a.iR)());
                } catch (e) {
                    ((0, g.r)(), (_ = !1));
                }
            if (Object.keys(x).length > 0) {
                let { primaryGuildId: e } = x;
                if (void 0 !== e) {
                    let t = await (0, o.c)(e, null !== e);
                    ((_ = _ && null != (r = null == t ? void 0 : t.ok) && r), (null == t ? void 0 : t.ok) ? (0, a.OU)() : (0, g.r)());
                }
            }
            (_ && (0, a.b9)(), b(!1));
        }, []),
        j = r.useCallback(() => {
            (0, a.W3)();
        }, []);
    return (0, i.jsx)(l.Z, {
        submitting: n,
        onSave: _,
        onReset: j,
        disabled: e,
        errorMessage: null != x ? x : void 0
    });
}
