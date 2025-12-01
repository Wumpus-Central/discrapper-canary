n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(796027),
    s = n(164946),
    l = n(350327),
    c = n(330055),
    u = n(647699),
    d = n(18438),
    f = n(778825),
    p = n(388032);
function _() {
    let e = (0, a.e7)([f.Z], () => f.Z.getIsSubmitDisabled()),
        t = (0, a.e7)([f.Z], () => f.Z.getGuild()),
        n = (0, a.e7)([f.Z], () => f.Z.getErrors()),
        [_, m] = i.useState(!1),
        h = i.useMemo(
            () =>
                (null == n ? void 0 : n.message) != null
                    ? null == n
                        ? void 0
                        : n.message
                    : (null == n ? void 0 : n.guild_tag) !== void 0 && n.guild_tag.length > 0
                      ? n.guild_tag[0]
                      : Object.keys(null != n ? n : {}).length > 0
                        ? p.intl.string(p.t.s35OuK)
                        : null,
            [n],
        ),
        g = i.useCallback(async () => {
            var e, n, r;
            m(!0);
            let i = f.Z.getAllPending(),
                a = (0, s.Jo)(i),
                o = (0, s.g9)(i),
                p = !0;
            if (Object.keys(a).length > 0) {
                let r = await (0, d.iq)(null == t ? void 0 : t.id, a);
                if (((p = p && null != (e = null == r ? void 0 : r.ok) && e), null == r ? void 0 : r.ok)) {
                    let e = r.body;
                    void 0 !== i.pendingAvatar &&
                        (0, c.Z)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: a.avatarId,
                            avatarAssetOrigin: null == (n = i.pendingAvatar) ? void 0 : n.assetOrigin,
                        }),
                        (0, d.IO)();
                }
            }
            if (Object.keys(o).length > 0) {
                let e = await (0, l.Z)(o, null == t ? void 0 : t.id);
                (p = p && null != (r = null == e ? void 0 : e.ok) && r),
                    (null == e ? void 0 : e.ok) ? (0, d.pG)() : (0, u.v)();
            }
            p && (0, d.b9)(), m(!1);
        }, [null == t ? void 0 : t.id]),
        E = i.useCallback(() => {
            (0, d.W3)();
        }, []);
    return (0, r.jsx)(o.Z, {
        submitting: _,
        onSave: g,
        onReset: E,
        disabled: e,
        errorMessage: null != h ? h : void 0,
    });
}
