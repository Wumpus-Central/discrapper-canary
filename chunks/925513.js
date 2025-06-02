n.d(t, {
    O6: () => u,
    _i: () => s
});
var r = n(524437),
    i = n(695346);
n(592125), n(699516);
var a = n(594174);
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
n(470734), n(721360);
let s = (e) => {
        let { setting: t, isDm: n = !1, isFriend: i = !1 } = e;
        if (null != t && t !== r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let o = a.default.getCurrentUser();
        return (null == o ? void 0 : o.nsfwAllowed) === !1
            ? c({
                  isDm: n,
                  isFriend: i
              })
            : l({
                  isDm: n,
                  isFriend: i
              });
    },
    l = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? r.Q4.SHOW : t ? r.Q4.BLOCK : r.Q4.SHOW;
    },
    c = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? r.Q4.BLUR : r.Q4.BLOCK;
    },
    u = () => {
        let e = i.j7.getSetting();
        return {
            goreContentGuilds: s({ setting: null == e ? void 0 : e.goreContentGuilds }),
            goreContentNonFriendDm: s({
                setting: null == e ? void 0 : e.goreContentNonFriendDm,
                isDm: !0
            }),
            goreContentFriendDm: s({
                setting: null == e ? void 0 : e.goreContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    };
