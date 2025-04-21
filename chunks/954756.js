n.d(t, { Z: () => h }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(809206),
    a = n(852860),
    o = n(164946),
    c = n(350327),
    d = n(330055),
    u = n(25990),
    m = n(647699),
    g = n(155433),
    p = n(388032);
function h() {
    let e = (0, s.e7)([u.Z], () => u.Z.getIsSubmitDisabled()),
        t = (0, s.e7)([u.Z], () => u.Z.getErrors()),
        [n, h] = r.useState(!1),
        f = r.useMemo(() => ((null == t ? void 0 : t.message) != null ? (null == t ? void 0 : t.message) : Object.keys(null != t ? t : {}).length > 0 ? p.intl.string(p.t['84MExs']) : null), [t]),
        b = r.useCallback(async () => {
            var e, t, n, i;
            h(!0);
            let r = u.Z.getAllPending(),
                s = (0, o.ED)(r),
                a = (0, o.g9)(r),
                p = !0;
            if (Object.keys(s).length > 0) {
                let i = await (0, l.Mn)(s);
                if (((p = p && null != (t = null == i ? void 0 : i.ok) && t), null == i ? void 0 : i.ok)) {
                    let e = i.body;
                    void 0 !== r.pendingAvatar &&
                        (0, d.Z)({
                            avatarHash: e.avatar,
                            avatarId: s.avatarId,
                            avatarAssetOrigin: null == (n = r.pendingAvatar) ? void 0 : n.assetOrigin
                        }),
                        (0, l.si)();
                } else (null == i || null == (e = i.body) ? void 0 : e.username) != null && (0, g.P)();
            }
            if (Object.keys(a).length > 0) {
                let e = await (0, c.Z)(a);
                (p = p && null != (i = null == e ? void 0 : e.ok) && i), (null == e ? void 0 : e.ok) ? (0, c.pG)() : (0, m.r)();
            }
            p && (0, l.b9)(), h(!1);
        }, []),
        _ = r.useCallback(() => {
            (0, l.W3)();
        }, []);
    return (0, i.jsx)(a.Z, {
        submitting: n,
        onSave: b,
        onReset: _,
        disabled: e,
        errorMessage: null != f ? f : void 0
    });
}
