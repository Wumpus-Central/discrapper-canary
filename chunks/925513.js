n.d(t, {
    Jr: () => m,
    O6: () => h,
    _i: () => d,
    v6: () => g
});
var r = n(73800),
    i = n(524437),
    a = n(695346),
    o = n(594174),
    s = n(704454),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = (e) => {
        let { setting: t, isDm: n = !1, isFriend: r = !1 } = e;
        if (null != t && t !== i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let a = o.default.getCurrentUser();
        return (0, s.bc)('resolveSettingWithDefaults')
            ? f({
                  isDm: n,
                  isFriend: r
              })
            : (0, s.g2)('resolveSettingWithDefaults')
              ? i.Q4.BLUR
              : (null == a ? void 0 : a.nsfwAllowed) === !1
                ? p({
                      isDm: n,
                      isFriend: r
                  })
                : _({
                      isDm: n,
                      isFriend: r
                  });
    },
    f = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? i.Q4.BLOCK : i.Q4.BLUR;
    },
    _ = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? i.Q4.SHOW : t ? i.Q4.BLOCK : i.Q4.SHOW;
    },
    p = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? i.Q4.BLUR : t ? i.Q4.BLOCK : i.Q4.BLUR;
    },
    h = (e) => {
        let t = null != e ? e : a.j7.getSetting();
        return {
            goreContentGuilds: d({ setting: null == t ? void 0 : t.goreContentGuilds }),
            goreContentNonFriendDm: d({
                setting: null == t ? void 0 : t.goreContentNonFriendDm,
                isDm: !0
            }),
            goreContentFriendDm: d({
                setting: null == t ? void 0 : t.goreContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    },
    m = (e) => {
        let t = h();
        a.j7.updateSetting(u({}, t, e));
    },
    g = () => r.useMemo(() => l.BhN.EXPLICIT_MEDIA_REDACTION, []);
