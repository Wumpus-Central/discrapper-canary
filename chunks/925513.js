n.d(t, {
    Jr: () => f,
    O6: () => d,
    _i: () => l
});
var r = n(524437),
    i = n(695346),
    a = n(594174);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
let l = (e) => {
        let { setting: t, isDm: n = !1, isFriend: i = !1 } = e;
        if (null != t && t !== r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let o = a.default.getCurrentUser();
        return (null == o ? void 0 : o.nsfwAllowed) === !1
            ? u({
                  isDm: n,
                  isFriend: i
              })
            : c({
                  isDm: n,
                  isFriend: i
              });
    },
    c = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? r.Q4.SHOW : t ? r.Q4.BLOCK : r.Q4.SHOW;
    },
    u = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? r.Q4.BLUR : t ? r.Q4.BLOCK : r.Q4.BLUR;
    },
    d = (e) => {
        let t = null != e ? e : i.j7.getSetting();
        return {
            goreContentGuilds: l({ setting: null == t ? void 0 : t.goreContentGuilds }),
            goreContentNonFriendDm: l({
                setting: null == t ? void 0 : t.goreContentNonFriendDm,
                isDm: !0
            }),
            goreContentFriendDm: l({
                setting: null == t ? void 0 : t.goreContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    },
    f = (e) => {
        let t = d();
        i.j7.updateSetting(s({}, t, e));
    };
