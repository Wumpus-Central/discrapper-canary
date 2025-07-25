(n.d(t, { Z: () => c }), n(388685));
var r,
    i = n(442837),
    l = n(570140);
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
let o = new Set();
class a extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (o.clear(), null == e || e.guilds.forEach((e) => o.add(e)));
    }
    isCollapsed(e) {
        return o.has(e);
    }
    getState() {
        return { guilds: o };
    }
}
(s(a, 'displayName', 'RecentlyActiveCollapseStore'), s(a, 'persistKey', 'RecentlyActiveCollapseStore'));
let c = new a(l.Z, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? o.add(t) : o.delete(t);
    }
});
