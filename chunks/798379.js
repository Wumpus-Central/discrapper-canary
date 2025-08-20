n.d(t, { Z: () => u }), n(388685);
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = new Set();
function l(e) {
    let { guildId: t, collapsed: n } = e;
    n ? s.add(t) : s.delete(t);
}
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        s.clear(), null == e || e.guilds.forEach((e) => s.add(e));
    }
    isCollapsed(e) {
        return s.has(e);
    }
    getState() {
        return { guilds: s };
    }
}
o(c, "displayName", "RecentlyActiveCollapseStore"), o(c, "persistKey", "RecentlyActiveCollapseStore");
let u = new c(a.Z, { SET_RECENTLY_ACTIVE_COLLAPSED: l });
