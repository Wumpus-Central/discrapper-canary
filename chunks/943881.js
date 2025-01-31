n.d(t, { Z: () => d });
var i,
    r = n(442837),
    a = n(570140),
    s = n(411198);
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
let l = {};
function u(e) {
    let { invite: t } = e,
        n = t.guild;
    if (null == n) return !1;
    l[n.id] = (0, s.Qs)(n);
}
class c extends (i = r.ZP.Store) {
    getGuild(e) {
        return l[e];
    }
}
o(c, 'displayName', 'AuthInviteStore');
let d = new c(a.Z, { AUTH_INVITE_UPDATE: u });
