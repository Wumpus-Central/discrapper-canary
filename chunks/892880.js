let i;
var a = r(653041);
var o = r(392711),
    s = r.n(o),
    l = r(31775),
    u = r.n(l),
    c = r(749210),
    d = r(430824),
    f = r(594174),
    p = r(70956),
    h = r(51144),
    _ = r(388032);
let m = new (u())({ maxAge: 1 * p.Z.Millis.MINUTE });
function g(e, n, r) {
    null != i && clearTimeout(i),
        (i = setTimeout(() => {
            let i = [],
                a = (e) => {
                    i.push(e.id);
                };
            if (null == e) s().forEach(d.Z.getGuilds(), a);
            else if (Array.isArray(e))
                e.forEach((e) => {
                    let n = d.Z.getGuild(e);
                    null != n && a(n);
                });
            else {
                let n = d.Z.getGuild(e);
                null != n && a(n);
            }
            i.length > 0 && c.Z.requestMembers(i, n.toLocaleLowerCase(), r);
        }, 200));
}
function E(e, n) {
    let r = ''.concat(null != e ? e : '', ':').concat(n),
        i = m.get(r);
    if (null != i) return i;
    m.set(r, !0);
}
function v(e) {
    let n = f.default.getCurrentUser(),
        r = h.oY(n);
    return null == r || 0 === r.length ? '' : _.intl.formatToPlainString(_.t.Y6Qfjo, { username: (null == e ? void 0 : e.truncateUsername) ? r.slice(0, 20) : r });
}
n.Z = {
    getGuildNameSuggestion: v,
    requestMembers(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            i = Array.isArray(e),
            a = [],
            o = !1;
        i
            ? e.forEach((e) => {
                  null == E(e, n) && a.push(e);
              })
            : null == E(e, n) && (o = !0),
            a.length > 0 && i ? g(a, n, r) : o && g(e, n, r);
    }
};
