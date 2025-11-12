n.d(t, {
    Jr: () => g,
    O6: () => m,
    _i: () => f,
    v6: () => E,
    zR: () => h,
});
var r = n(647438),
    i = n(524437),
    a = n(128064),
    o = n(312870),
    s = n(695346),
    l = n(594174),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = (e) => {
        let { setting: t, isDm: n = !1, isFriend: r = !1 } = e;
        if (null != t && t !== i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let s = l.default.getCurrentUser(),
            c = (0, o.U)("resolveExplicitContentSettingWithDefaults");
        return (0, a.c_)("resolveExplicitContentSettingWithDefaults") || c
            ? _({
                  isDm: n,
                  isFriend: r,
              })
            : (null == s ? void 0 : s.nsfwAllowed) === !1
              ? h({
                    isDm: n,
                    isFriend: r,
                })
              : p({
                    isDm: n,
                    isFriend: r,
                });
    },
    _ = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? i.Q4.BLOCK : i.Q4.BLUR;
    },
    p = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? i.Q4.SHOW : t ? i.Q4.BLOCK : i.Q4.SHOW;
    },
    h = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? i.Q4.BLUR : t ? i.Q4.BLOCK : i.Q4.BLUR;
    },
    m = (e) => {
        let t = null != e ? e : s.j7.getSetting();
        return {
            goreContentGuilds: f({ setting: null == t ? void 0 : t.goreContentGuilds }),
            goreContentNonFriendDm: f({
                setting: null == t ? void 0 : t.goreContentNonFriendDm,
                isDm: !0,
            }),
            goreContentFriendDm: f({
                setting: null == t ? void 0 : t.goreContentFriendDm,
                isDm: !0,
                isFriend: !0,
            }),
        };
    },
    g = (e) => {
        let t = m();
        s.j7.updateSetting(d({}, t, e));
    },
    E = () => r.useMemo(() => c.BhN.EXPLICIT_MEDIA_REDACTION, []);
