n.d(t, { Z: () => p });
var r,
    i = n(442837),
    a = n(570140),
    o = n(823379),
    s = n(389147),
    l = n(225604);
function c(e, t, n) {
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
let u = {};
function d(e) {
    let { experimentName: t, config: n } = e;
    if (t === s.G) {
        u[s.G] = new l.Z(n);
        return;
    }
    (0, o.vE)(t);
}
function f() {
    u = {};
}
class _ extends (r = i.ZP.Store) {
    getOne(e) {
        if (null != u[e]) return u[e];
    }
}
c(_, "displayName", "ActivitiesDiscordConfigStore");
let p = new _(a.Z, {
    ACTIVITIES_DISCORD_CONFIG_FETCH_SUCCESS: d,
    LOGOUT: f,
});
