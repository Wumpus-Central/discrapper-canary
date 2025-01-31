n.d(t, { Z: () => d }), n(47120);
var i,
    l = n(442837),
    r = n(570140);
function s(e, t, n) {
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
class o extends (i = l.ZP.PersistedStore) {
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
s(o, 'displayName', 'RecentlyActiveCollapseStore'), s(o, 'persistKey', 'RecentlyActiveCollapseStore');
let d = new o(r.Z, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? a.add(t) : a.delete(t);
    }
});
