t.d(n, { Z: () => o }), t(388685);
var l,
    i = t(442837),
    r = t(570140);
function a(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[n] = t),
        e
    );
}
let u = new Set();
class s extends (l = i.ZP.PersistedStore) {
    initialize(e) {
        u.clear(), null == e || e.guilds.forEach((e) => u.add(e));
    }
    isCollapsed(e) {
        return u.has(e);
    }
    getState() {
        return { guilds: u };
    }
}
a(s, "displayName", "RecentlyActiveCollapseStore"), a(s, "persistKey", "RecentlyActiveCollapseStore");
let o = new s(r.Z, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: n, collapsed: t } = e;
        t ? u.add(n) : u.delete(n);
    },
});
