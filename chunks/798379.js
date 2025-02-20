n.d(t, { Z: () => u }), n(47120);
var i,
    r = n(442837),
    l = n(570140);
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
let s = new Set();
class a extends (i = r.ZP.PersistedStore) {
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
o(a, 'displayName', 'RecentlyActiveCollapseStore'), o(a, 'persistKey', 'RecentlyActiveCollapseStore');
let u = new a(l.Z, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? s.add(t) : s.delete(t);
    }
});
