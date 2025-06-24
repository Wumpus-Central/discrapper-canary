n.d(t, { Z: () => c }), n(388685);
var r,
    i = n(442837),
    s = n(570140);
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
let l = new Set();
class a extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        l.clear(), null == e || e.guilds.forEach((e) => l.add(e));
    }
    isCollapsed(e) {
        return l.has(e);
    }
    getState() {
        return { guilds: l };
    }
}
o(a, 'displayName', 'RecentlyActiveCollapseStore'), o(a, 'persistKey', 'RecentlyActiveCollapseStore');
let c = new a(s.Z, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? l.add(t) : l.delete(t);
    }
});
