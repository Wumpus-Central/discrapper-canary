let i;
n.d(t, { Z: () => g }), n(653041);
var r = n(392711),
    a = n.n(r),
    s = n(31775),
    o = n.n(s),
    l = n(749210),
    u = n(430824),
    c = n(594174),
    d = n(70956),
    f = n(51144),
    _ = n(388032);
let p = new (o())({ maxAge: 1 * d.Z.Millis.MINUTE });
function h(e, t, n) {
    null != i && clearTimeout(i),
        (i = setTimeout(() => {
            let i = [],
                r = (e) => {
                    i.push(e.id);
                };
            if (null == e) a().forEach(u.Z.getGuilds(), r);
            else if (Array.isArray(e))
                e.forEach((e) => {
                    let t = u.Z.getGuild(e);
                    null != t && r(t);
                });
            else {
                let t = u.Z.getGuild(e);
                null != t && r(t);
            }
            i.length > 0 && l.Z.requestMembers(i, t.toLocaleLowerCase(), n);
        }, 200));
}
function m(e, t) {
    let n = ''.concat(null != e ? e : '', ':').concat(t),
        i = p.get(n);
    if (null != i) return i;
    p.set(n, !0);
}
let g = {
    getGuildNameSuggestion: function (e) {
        let t = c.default.getCurrentUser(),
            n = f.oY(t);
        return null == n || 0 === n.length ? '' : _.intl.formatToPlainString(_.t.Y6Qfjo, { username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n });
    },
    requestMembers(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            i = Array.isArray(e),
            r = [],
            a = !1;
        i
            ? e.forEach((e) => {
                  null == m(e, t) && r.push(e);
              })
            : null == m(e, t) && (a = !0),
            r.length > 0 && i ? h(r, t, n) : a && h(e, t, n);
    }
};
