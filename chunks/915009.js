n.d(t, {
    T3: () => d,
    q1: () => f,
    rD: () => _,
    xf: () => u,
});
var r = n(647438),
    i = n(524437),
    a = n(925513),
    o = n(722687),
    s = n(88658),
    l = n(800651),
    c = n(652262);
let u = () => {
        let e = (0, c.F)(),
            t = o.sx.useControlledSetting(null == e ? void 0 : e.id);
        return null == e
            ? null
            : {
                  explicitContentNonFriendDm: (0, l.bE)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentNonFriendDm,
                  }),
                  explicitContentFriendDm: (0, l.bE)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentFriendDm,
                      isFriend: !0,
                  }),
                  explicitContentGuilds: i.Q4.BLUR,
              };
    },
    d = () => {
        let e = (0, c.F)(),
            t = o.up.useControlledSetting(null == e ? void 0 : e.id);
        if (null == e) return null;
        let { goreContentNonFriendDm: n, goreContentFriendDm: r } = null != t ? t : {};
        return {
            goreContentNonFriendDm: (0, l.n6)(n) ? n : (0, a.zR)({ isDm: !0 }),
            goreContentFriendDm: (0, l.n6)(r)
                ? r
                : (0, a.zR)({
                      isDm: !0,
                      isFriend: !0,
                  }),
            goreContentGuilds: i.Q4.BLUR,
        };
    },
    f = () => {
        let e = (0, c.F)(),
            t = o.Ov.useControlledSetting(null == e ? void 0 : e.id),
            n = o.vV.useControlledSetting(null == e ? void 0 : e.id);
        return null != n ? n : !!t || t;
    };
function _() {
    let e = (0, c.F)(),
        t = o.vB.useControlledSetting(null == e ? void 0 : e.id),
        n = r.useMemo(() => (0, s.bL)(t), [t]);
    return n.mutualGuilds && !n.all;
}
