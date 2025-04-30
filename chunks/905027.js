n.d(t, { Z: () => g }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(852860),
    a = n(164946),
    o = n(350327),
    c = n(330055),
    d = n(647699),
    u = n(18438),
    m = n(778825),
    p = n(388032);
function g() {
    let e = (0, s.e7)([m.Z], () => m.Z.getIsSubmitDisabled()),
        t = (0, s.e7)([m.Z], () => m.Z.getGuild()),
        n = (0, s.e7)([m.Z], () => m.Z.getErrors()),
        [g, h] = r.useState(!1),
        f = r.useMemo(() => ((null == n ? void 0 : n.message) != null ? (null == n ? void 0 : n.message) : Object.keys(null != n ? n : {}).length > 0 ? p.intl.string(p.t.s35OuL) : null), [n]),
        b = r.useCallback(async () => {
            var e, n, i;
            h(!0);
            let r = m.Z.getAllPending(),
                s = (0, a.Jo)(r),
                l = (0, a.g9)(r),
                p = !0;
            if (Object.keys(s).length > 0) {
                let i = await (0, u.iq)(null == t ? void 0 : t.id, s);
                if (((p = p && null != (e = null == i ? void 0 : i.ok) && e), null == i ? void 0 : i.ok)) {
                    let e = i.body;
                    void 0 !== r.pendingAvatar &&
                        (0, c.Z)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: s.avatarId,
                            avatarAssetOrigin: null == (n = r.pendingAvatar) ? void 0 : n.assetOrigin
                        }),
                        (0, u.IO)();
                }
            }
            if (Object.keys(l).length > 0) {
                let e = await (0, o.Z)(l, null == t ? void 0 : t.id);
                (p = p && null != (i = null == e ? void 0 : e.ok) && i), (null == e ? void 0 : e.ok) ? (0, u.pG)() : (0, d.v)();
            }
            p && (0, u.b9)(), h(!1);
        }, [null == t ? void 0 : t.id]),
        _ = r.useCallback(() => {
            (0, u.W3)();
        }, []);
    return (0, i.jsx)(l.Z, {
        submitting: g,
        onSave: b,
        onReset: _,
        disabled: e,
        errorMessage: null != f ? f : void 0
    });
}
