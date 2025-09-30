n.d(t, {
    LN: () => E,
    T3: () => h,
    q1: () => m,
    rD: () => g,
    xf: () => p,
});
var r = n(647438),
    i = n(442837),
    a = n(524437),
    o = n(925513),
    s = n(722687),
    l = n(594174),
    c = n(88658),
    u = n(800651),
    d = n(277537),
    f = n(652262),
    _ = n(631885);
let p = () => {
        let e = (0, f.F)(),
            t = s.sx.useControlledSetting(null == e ? void 0 : e.id);
        return null == e
            ? null
            : {
                  explicitContentNonFriendDm: (0, u.bE)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentNonFriendDm,
                  }),
                  explicitContentFriendDm: (0, u.bE)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentFriendDm,
                      isFriend: !0,
                  }),
                  explicitContentGuilds: a.Q4.BLUR,
              };
    },
    h = () => {
        let e = (0, f.F)(),
            t = s.up.useControlledSetting(null == e ? void 0 : e.id);
        if (null == e) return null;
        let { goreContentNonFriendDm: n, goreContentFriendDm: r } = null != t ? t : {};
        return {
            goreContentNonFriendDm: (0, u.n6)(n) ? n : (0, o.zR)({ isDm: !0 }),
            goreContentFriendDm: (0, u.n6)(r)
                ? r
                : (0, o.zR)({
                      isDm: !0,
                      isFriend: !0,
                  }),
            goreContentGuilds: a.Q4.BLUR,
        };
    },
    m = () => {
        let e = (0, f.F)(),
            t = s.Ov.useControlledSetting(null == e ? void 0 : e.id),
            n = s.vV.useControlledSetting(null == e ? void 0 : e.id);
        return null != n ? n : !!t || t;
    };
function g() {
    let e = (0, f.F)(),
        t = s.vB.useControlledSetting(null == e ? void 0 : e.id),
        n = r.useMemo(() => (0, c.bL)(t), [t]);
    return n.mutualGuilds && !n.all;
}
function E() {
    let e = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        t = (0, _.AZ)(),
        n = (0, d.PO)("settings-controls");
    return (null == e ? void 0 : e.nsfwAllowed) === !1 && t && n;
}
