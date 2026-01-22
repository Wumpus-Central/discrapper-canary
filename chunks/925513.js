n.d(t, {
    Jr: () => E,
    O6: () => g,
    _i: () => p,
    v6: () => b,
    zR: () => m,
});
var r = n(473749),
    i = n(912423),
    a = n(524437),
    o = n(980945),
    s = n(312870),
    l = n(695346),
    c = n(594174),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = (e) => {
        let { setting: t, isDm: n = !1, isFriend: r = !1 } = e;
        if (null != t && t !== a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let l = c.default.getCurrentUser(),
            u = (0, s.U)("resolveExplicitContentSettingWithDefaults");
        return (0, o.OE)(i.K.SENSITIVE_CONTENT) || u
            ? _({
                  isDm: n,
                  isFriend: r,
              })
            : (null == l ? void 0 : l.nsfwAllowed) === !1
              ? m({
                    isDm: n,
                    isFriend: r,
                })
              : h({
                    isDm: n,
                    isFriend: r,
                });
    },
    _ = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? a.Q4.BLOCK : a.Q4.BLUR;
    },
    h = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? a.Q4.SHOW : t ? a.Q4.BLOCK : a.Q4.SHOW;
    },
    m = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? a.Q4.BLUR : t ? a.Q4.BLOCK : a.Q4.BLUR;
    },
    g = (e) => {
        let t = null != e ? e : l.j7.getSetting();
        return {
            goreContentGuilds: p({ setting: null == t ? void 0 : t.goreContentGuilds }),
            goreContentNonFriendDm: p({
                setting: null == t ? void 0 : t.goreContentNonFriendDm,
                isDm: !0,
            }),
            goreContentFriendDm: p({
                setting: null == t ? void 0 : t.goreContentFriendDm,
                isDm: !0,
                isFriend: !0,
            }),
        };
    },
    E = (e) => {
        let t = g();
        l.j7.updateSetting(f({}, t, e));
    },
    b = () => r.useMemo(() => u.BhN.EXPLICIT_MEDIA_REDACTION, []);
