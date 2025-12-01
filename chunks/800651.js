n.d(t, {
    Jr: () => d,
    bE: () => f,
    n6: () => c,
    zj: () => _,
});
var r = n(524437),
    i = n(656577),
    a = n(925513),
    o = n(722687);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let c = (e) => null != e && e !== r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
    u = (e) => {
        let t = o.up.getControlledSetting(e),
            { goreContentNonFriendDm: n, goreContentFriendDm: i } = null != t ? t : {};
        return {
            goreContentNonFriendDm: c(n) ? n : (0, a.zR)({ isDm: !0 }),
            goreContentFriendDm: c(i)
                ? i
                : (0, a.zR)({
                      isDm: !0,
                      isFriend: !0,
                  }),
            goreContentGuilds: r.Q4.BLUR,
        };
    },
    d = (e, t) => {
        let n = u(e);
        o.up.updateControlledSetting(e, l({}, n, t));
    },
    f = (e) => {
        let { teenId: t, setting: n, isFriend: r = !1 } = e;
        if (c(n)) return n;
        let a = o.eD.getControlledSetting(t);
        return r ? i.MS[a] : i.FE[a];
    },
    p = (e) => {
        let t = o.sx.getControlledSetting(e);
        return {
            explicitContentNonFriendDm: f({
                teenId: e,
                setting: null == t ? void 0 : t.explicitContentNonFriendDm,
            }),
            explicitContentFriendDm: f({
                teenId: e,
                setting: null == t ? void 0 : t.explicitContentFriendDm,
                isFriend: !0,
            }),
            explicitContentGuilds: r.Q4.BLUR,
        };
    },
    _ = (e, t) => {
        let n = p(e);
        o.sx.updateControlledSetting(e, l({}, n, t));
    };
