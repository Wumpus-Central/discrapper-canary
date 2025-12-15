n.d(t, {
    LN: () => O,
    T3: () => E,
    aR: () => I,
    q1: () => b,
    rD: () => y,
    xf: () => g,
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
    _ = n(652262),
    m = n(631885),
    h = n(484710);
let g = () => {
        let e = (0, _.F)(),
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
    E = () => {
        let e = (0, _.F)(),
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
    b = () => {
        let e = (0, _.F)(),
            t = l.Ov.useControlledSetting(null == e ? void 0 : e.id),
            n = l.vV.useControlledSetting(null == e ? void 0 : e.id);
        return null != n ? n : !!t || t;
    };
function y() {
    let e = (0, _.F)(),
        t = l.vB.useControlledSetting(null == e ? void 0 : e.id),
        n = r.useMemo(() => (0, u.bL)(t), [t]);
    return n.mutualGuilds && !n.all;
}
function O() {
    let e = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        t = (0, m.AZ)();
    return (null == e ? void 0 : e.nsfwAllowed) === !1 && t;
}
function v(e) {
    let t = (0, _.M)();
    return (0, i.e7)([f.Z], () => f.Z.hasConsented(t, e));
}
function S(e) {
    let t = (0, _.M)();
    return r.useCallback(
        async (n) => {
            if (null == t) return;
            let r = n ? [e] : [],
                i = n ? [] : [e];
            try {
                await d.ZP.updateTeenConsents(t, r, i);
            } catch (e) {
                s.Z.showFailedToast(h.wQ.GENERIC_ERROR);
            }
        },
        [t, e],
    );
}
function I(e) {
    return {
        hasConsented: v(e),
        updateConsent: S(e),
    };
}
