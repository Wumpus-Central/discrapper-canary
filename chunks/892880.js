let r;
n.d(t, { Z: () => m }), n(539854), n(388685);
var i = n(31775),
    a = n.n(i),
    o = n(749210),
    s = n(430824),
    l = n(594174),
    c = n(70956),
    u = n(51144),
    d = n(388032);
let f = new (a())({ maxAge: +c.Z.Millis.MINUTE });
function p(e, t, n) {
    null != r && clearTimeout(r),
        (r = setTimeout(() => {
            let r = [],
                i = (e) => {
                    r.push(e.id);
                };
            if (null == e) r.push(...s.Z.getGuildIds());
            else if (Array.isArray(e))
                e.forEach((e) => {
                    let t = s.Z.getGuild(e);
                    null != t && i(t);
                });
            else {
                let t = s.Z.getGuild(e);
                null != t && i(t);
            }
            r.length > 0 && o.Z.requestMembers(r, t.toLocaleLowerCase(), n);
        }, 200));
}
function _(e, t) {
    let n = "".concat(null != e ? e : "", ":").concat(t),
        r = f.get(n);
    if (null != r) return r;
    f.set(n, !0);
}
let m = {
    getGuildNameSuggestion: function (e) {
        let t = l.default.getCurrentUser(),
            n = u.oY(t);
        return null == n || 0 === n.length
            ? ""
            : d.intl.formatToPlainString(d.t.Y6Qfju, {
                  username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n,
              });
    },
    requestMembers(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Array.isArray(e),
            i = [],
            a = !1;
        r
            ? e.forEach((e) => {
                  null == _(e, t) && i.push(e);
              })
            : null == _(e, t) && (a = !0),
            i.length > 0 && r ? p(i, t, n) : a && p(e, t, n);
    },
};
