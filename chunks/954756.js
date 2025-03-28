n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(809206),
    o = n(852860),
    l = n(164946),
    c = n(350327),
    d = n(330055),
    u = n(25990),
    m = n(647699),
    g = n(155433),
    p = n(388032);
function h() {
    let e = (0, s.e7)([u.Z], () => u.Z.getIsSubmitDisabled()),
        t = (0, s.e7)([u.Z], () => u.Z.getErrors()),
        [n, h] = i.useState(!1),
        f = i.useMemo(() => ((null == t ? void 0 : t.message) != null ? (null == t ? void 0 : t.message) : Object.keys(null != t ? t : {}).length > 0 ? p.NW.string(p.t['84MExs']) : null), [t]),
        N = i.useCallback(async () => {
            var e, t, n, r;
            h(!0);
            let i = u.Z.getAllPending(),
                s = (0, l.ED)(i),
                o = (0, l.g9)(i),
                p = !0;
            if (Object.keys(s).length > 0) {
                let r = await (0, a.Mn)(s);
                if (((p = p && null !== (t = null == r ? void 0 : r.ok) && void 0 !== t && t), null == r ? void 0 : r.ok)) {
                    let e = r.body;
                    void 0 !== i.pendingAvatar &&
                        (0, d.Z)({
                            avatarHash: e.avatar,
                            avatarId: s.avatarId,
                            avatarAssetOrigin: null === (n = i.pendingAvatar) || void 0 === n ? void 0 : n.assetOrigin
                        }),
                        (0, a.si)();
                } else (null == r ? void 0 : null === (e = r.body) || void 0 === e ? void 0 : e.username) != null && (0, g.P)();
            }
            if (Object.keys(o).length > 0) {
                let e = await (0, c.Z)(o);
                (p = p && null !== (r = null == e ? void 0 : e.ok) && void 0 !== r && r), (null == e ? void 0 : e.ok) ? (0, c.pG)() : (0, m.r)();
            }
            p && (0, a.b9)(), h(!1);
        }, []),
        b = i.useCallback(() => {
            (0, a.W3)();
        }, []);
    return (0, r.jsx)(o.Z, {
        submitting: n,
        onSave: N,
        onReset: b,
        disabled: e,
        errorMessage: null != f ? f : void 0
    });
}
