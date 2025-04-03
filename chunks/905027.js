n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(852860),
    l = n(164946),
    o = n(350327),
    c = n(330055),
    d = n(647699),
    u = n(18438),
    m = n(778825),
    g = n(388032);
function p() {
    let e = (0, s.e7)([m.Z], () => m.Z.getIsSubmitDisabled()),
        t = (0, s.e7)([m.Z], () => m.Z.getGuild()),
        n = (0, s.e7)([m.Z], () => m.Z.getErrors()),
        [p, h] = i.useState(!1),
        f = i.useMemo(() => ((null == n ? void 0 : n.message) != null ? (null == n ? void 0 : n.message) : Object.keys(null != n ? n : {}).length > 0 ? g.NW.string(g.t.s35OuL) : null), [n]),
        b = i.useCallback(async () => {
            var e, n, r;
            h(!0);
            let i = m.Z.getAllPending(),
                s = (0, l.Jo)(i),
                a = (0, l.g9)(i),
                g = !0;
            if (Object.keys(s).length > 0) {
                let r = await (0, u.iq)(null == t ? void 0 : t.id, s);
                if (((g = g && null != (e = null == r ? void 0 : r.ok) && e), null == r ? void 0 : r.ok)) {
                    let e = r.body;
                    void 0 !== i.pendingAvatar &&
                        (0, c.Z)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: s.avatarId,
                            avatarAssetOrigin: null == (n = i.pendingAvatar) ? void 0 : n.assetOrigin
                        }),
                        (0, u.IO)();
                }
            }
            if (Object.keys(a).length > 0) {
                let e = await (0, o.Z)(a, null == t ? void 0 : t.id);
                (g = g && null != (r = null == e ? void 0 : e.ok) && r), (null == e ? void 0 : e.ok) ? (0, u.pG)() : (0, d.v)();
            }
            g && (0, u.b9)(), h(!1);
        }, [null == t ? void 0 : t.id]),
        N = i.useCallback(() => {
            (0, u.W3)();
        }, []);
    return (0, r.jsx)(a.Z, {
        submitting: p,
        onSave: b,
        onReset: N,
        disabled: e,
        errorMessage: null != f ? f : void 0
    });
}
