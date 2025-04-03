n.d(t, { Z: () => o }), n(47120);
var i,
    s = n(442837),
    l = n(570140);
function r(e, t, n) {
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
let a = new Set();
class d extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        a.clear(), null == e || e.guilds.forEach((e) => a.add(e));
    }
    isCollapsed(e) {
        return a.has(e);
    }
    getState() {
        return { guilds: a };
    }
}
r(d, 'displayName', 'RecentlyActiveCollapseStore'), r(d, 'persistKey', 'RecentlyActiveCollapseStore');
let o = new d(l.Z, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? a.add(t) : a.delete(t);
    }
});
