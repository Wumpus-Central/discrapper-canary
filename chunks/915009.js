n.d(t, {
    LN: () => v,
    T3: () => b,
    aR: () => T,
    q1: () => y,
    rD: () => O,
    xf: () => E,
});
var r = n(473749),
    i = n(442837),
    a = n(524437),
    o = n(925513),
    s = n(681678),
    l = n(722687),
    c = n(594174),
    u = n(88658),
    d = n(260722),
    f = n(473007),
    p = n(800651),
    _ = n(277537),
    m = n(652262),
    h = n(631885),
    g = n(484710);
let E = () => {
        let e = (0, m.F)(),
            t = l.sx.useControlledSetting(null == e ? void 0 : e.id);
        return null == e
            ? null
            : {
                  explicitContentNonFriendDm: (0, p.bE)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentNonFriendDm,
                  }),
                  explicitContentFriendDm: (0, p.bE)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentFriendDm,
                      isFriend: !0,
                  }),
                  explicitContentGuilds: a.Q4.BLUR,
              };
    },
    b = () => {
        let e = (0, m.F)(),
            t = l.up.useControlledSetting(null == e ? void 0 : e.id);
        if (null == e) return null;
        let { goreContentNonFriendDm: n, goreContentFriendDm: r } = null != t ? t : {};
        return {
            goreContentNonFriendDm: (0, p.n6)(n) ? n : (0, o.zR)({ isDm: !0 }),
            goreContentFriendDm: (0, p.n6)(r)
                ? r
                : (0, o.zR)({
                      isDm: !0,
                      isFriend: !0,
                  }),
            goreContentGuilds: a.Q4.BLUR,
        };
    },
    y = () => {
        let e = (0, m.F)(),
            t = l.Ov.useControlledSetting(null == e ? void 0 : e.id),
            n = l.vV.useControlledSetting(null == e ? void 0 : e.id);
        return null != n ? n : !!t || t;
    };
function O() {
    let e = (0, m.F)(),
        t = l.vB.useControlledSetting(null == e ? void 0 : e.id),
        n = r.useMemo(() => (0, u.bL)(t), [t]);
    return n.mutualGuilds && !n.all;
}
function v() {
    let e = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        t = (0, h.AZ)(),
        n = (0, _.PO)("settings-controls");
    return (null == e ? void 0 : e.nsfwAllowed) === !1 && t && n;
}
function S(e) {
    let t = (0, m.M)();
    return (0, i.e7)([f.Z], () => f.Z.hasConsented(t, e));
}
function I(e) {
    let t = (0, m.M)();
    return r.useCallback(
        async (n) => {
            if (null == t) return;
            let r = n ? [e] : [],
                i = n ? [] : [e];
            try {
                await d.ZP.updateTeenConsents(t, r, i);
            } catch (e) {
                s.Z.showFailedToast(g.wQ.GENERIC_ERROR);
            }
        },
        [t, e],
    );
}
function T(e) {
    return {
        hasConsented: S(e),
        updateConsent: I(e),
    };
}
