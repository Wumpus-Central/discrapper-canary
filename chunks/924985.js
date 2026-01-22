n.d(t, { A: () => S }), n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(403362),
    o = n(734057),
    l = n(919638),
    c = n(808728),
    u = n(652215);
function d(e, t, n) {
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
let f = {},
    p = 0;
function _() {
    p += 1;
}
function h(e) {
    if (null == f[e]) return !1;
    delete f[e];
}
function m(e) {
    let { id: t } = e;
    if (f[t]) return !1;
    f[t] = !0;
}
function g(e) {
    let { id: t } = e;
    return h(t);
}
function E(e) {
    for (let t of (e.userGuildSettings.partial || (f = {}), e.userGuildSettings.entries))
        if (null != t.channel_overrides)
            for (let e of t.channel_overrides) e.collapsed ? (f[e.channel_id] = !0) : delete f[e.channel_id];
}
function b(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id).filter(s.Vq));
    for (let e in f) {
        let t = o.A.getChannel(e);
        null != t && null != t.guild_id && n.has(t.guild_id) && delete f[t.id];
    }
    for (let e of t) for (let t of e.channel_overrides) t.collapsed && (f[t.channel_id] = !0);
}
function y(e) {
    let {
        channel: { id: t },
    } = e;
    return h(t);
}
function O(e) {
    let { guildId: t } = e;
    c.Ay.getChannels(t)[u.rbe.GUILD_CATEGORY].forEach((e) => {
        let { channel: t } = e;
        "null" !== t.id && (f[t.id] = !0);
    });
}
function A(e) {
    let { guildId: t } = e;
    c.Ay.getChannels(t)[u.rbe.GUILD_CATEGORY].forEach((e) => {
        let { channel: t } = e;
        delete f[t.id];
    });
}
class v extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(o.A, l.A, c.Ay), this.removeChangeListener(_), this.addChangeListener(_), (f = null != e ? e : {});
    }
    getState() {
        return f;
    }
    isCollapsed(e) {
        return null != e && "null" !== e && !!f[e] && f[e];
    }
    getCollapsedCategories() {
        return f;
    }
    get version() {
        return p;
    }
}
d(v, "displayName", "CategoryCollapseStore"), d(v, "persistKey", "collapsedCategories");
let S = new v(a.h, {
    CONNECTION_OPEN: E,
    USER_GUILD_SETTINGS_FULL_UPDATE: b,
    CATEGORY_COLLAPSE: m,
    CATEGORY_EXPAND: g,
    CATEGORY_COLLAPSE_ALL: O,
    CATEGORY_EXPAND_ALL: A,
    CHANNEL_DELETE: y,
});
