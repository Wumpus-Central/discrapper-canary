n.d(t, { Z: () => o }), n(388685);
var l,
    i = n(442837),
    r = n(570140);
function a(e, t, n) {
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
a(s, 'displayName', 'RecentlyActiveCollapseStore'), a(s, 'persistKey', 'RecentlyActiveCollapseStore');
let o = new s(r.Z, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? u.add(t) : u.delete(t);
    }
});
