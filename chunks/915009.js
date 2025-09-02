n.d(t, {
    T3: () => f,
    q1: () => _,
    rD: () => p,
    xf: () => d,
});
var r = n(647438),
    i = n(524437),
    a = n(925513),
    o = n(750832),
    s = n(722687),
    l = n(88658),
    c = n(800651),
    u = n(652262);
let d = () => {
        let e = (0, u.F)(),
            t = s.sx.useControlledSetting(null == e ? void 0 : e.id);
        return null == e
            ? null
            : {
                  explicitContentNonFriendDm: (0, c.bE)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentNonFriendDm,
                  }),
                  explicitContentFriendDm: (0, c.bE)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentFriendDm,
                      isFriend: !0,
                  }),
                  explicitContentGuilds: i.Q4.BLUR,
              };
    },
    f = () => {
        let e = (0, u.F)(),
            t = s.up.useControlledSetting(null == e ? void 0 : e.id);
        if (null == e) return null;
        let { goreContentNonFriendDm: n, goreContentFriendDm: r } = null != t ? t : {};
        return {
            goreContentNonFriendDm: (0, c.n6)(n) ? n : (0, a.zR)({ isDm: !0 }),
            goreContentFriendDm: (0, c.n6)(r)
                ? r
                : (0, a.zR)({
                      isDm: !0,
                      isFriend: !0,
                  }),
            goreContentGuilds: i.Q4.BLUR,
        };
    },
    _ = () => {
        let e = (0, u.F)(),
            t = s.Ov.useControlledSetting(null == e ? void 0 : e.id),
            n = s.vV.useControlledSetting(null == e ? void 0 : e.id),
            r = (0, o.nS)("useDefaultGuildsRestricted");
        return null != n ? n : !!t || !!r || t;
    };
function p() {
    let e = (0, u.F)(),
        t = s.vB.useControlledSetting(null == e ? void 0 : e.id),
        n = r.useMemo(() => (0, l.bL)(t), [t]);
    return n.mutualGuilds && !n.all;
}
