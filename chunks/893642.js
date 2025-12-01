n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    a = n(570140),
    o = n(627050),
    s = n(406763);
function l(e, t, n) {
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
let c = {};
function u(e) {
    let { settings: t } = e;
    c = t;
}
function d() {
    o.d.getCurrentConfig({ location: "GameMentionSettingsStore" }).enabled && (0, s.Q)();
}
function f() {
    c = {};
}
class p extends (r = i.ZP.Store) {
    getMute(e) {
        return c[e];
    }
}
l(p, "displayName", "GameMentionSettingsStore");
let _ = new p(a.Z, {
    REPLACE_GAME_MENTION_SETTINGS: u,
    CONNECTION_OPEN: d,
    LOGOUT: f,
});
