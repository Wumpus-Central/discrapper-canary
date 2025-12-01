n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(796027),
    s = n(809206),
    l = n(321114),
    c = n(164946),
    u = n(350327),
    d = n(330055),
    f = n(25990),
    p = n(695346),
    _ = n(647699),
    m = n(155433),
    h = n(388032);
function g() {
    let e = (0, a.e7)([f.Z], () => f.Z.getIsSubmitDisabled()),
        t = (0, a.e7)([f.Z], () => f.Z.getErrors()),
        [n, g] = i.useState(!1),
        E = i.useMemo(
            () =>
                (null == t ? void 0 : t.message) != null
                    ? null == t
                        ? void 0
                        : t.message
                    : Object.keys(null != t ? t : {}).length > 0
                      ? h.intl.string(h.t["84MExs"])
                      : null,
            [t],
        ),
        b = i.useCallback(async () => {
            var e, t, n, r, i;
            g(!0);
            let a = f.Z.getAllPending(),
                o = (0, c.ED)(a),
                h = (0, c.g9)(a),
                E = (0, c.jE)(a),
                b = !0;
            if (Object.keys(o).length > 0) {
                let r = await (0, s.Mn)(o);
                if (((b = b && null != (t = null == r ? void 0 : r.ok) && t), null == r ? void 0 : r.ok)) {
                    let e = r.body;
                    void 0 !== a.pendingAvatar &&
                        (0, d.Z)({
                            avatarHash: e.avatar,
                            avatarId: o.avatarId,
                            avatarAssetOrigin: null == (n = a.pendingAvatar) ? void 0 : n.assetOrigin,
                        }),
                        (0, s.si)();
                } else (null == r || null == (e = r.body) ? void 0 : e.username) != null && (0, m.P)();
            }
            if (Object.keys(h).length > 0) {
                let e = await (0, u.Z)(h);
                (b = b && null != (r = null == e ? void 0 : e.ok) && r),
                    (null == e ? void 0 : e.ok) ? (0, u.pG)() : (0, _.r)();
            }
            if (void 0 !== a.pendingLegacyUsernameDisabled)
                try {
                    await p.R_.updateSetting(a.pendingLegacyUsernameDisabled), (0, s.iR)();
                } catch (e) {
                    (0, _.r)(), (b = !1);
                }
            if (Object.keys(E).length > 0) {
                let { primaryGuildId: e } = E;
                if (void 0 !== e) {
                    let t = await (0, l.c)(e, null !== e);
                    (b = b && null != (i = null == t ? void 0 : t.ok) && i),
                        (null == t ? void 0 : t.ok) ? (0, s.OU)() : (0, _.r)();
                }
            }
            b && (0, s.b9)(), g(!1);
        }, []),
        y = i.useCallback(() => {
            (0, s.W3)();
        }, []);
    return (0, r.jsx)(o.Z, {
        submitting: n,
        onSave: b,
        onReset: y,
        disabled: e,
        errorMessage: null != E ? E : void 0,
    });
}
