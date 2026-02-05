"use strict";
n.d(t, { A: () => y });
var r = n(311907),
    i = n(73153),
    a = n(403362),
    s = n(734057),
    o = n(919638),
    l = n(808728),
    u = n(652215);
let c = {},
    d = 0;
function _() {
    d += 1;
}
function f(e) {
    if (null == c[e]) return !1;
    delete c[e];
}
function p(e) {
    let { id: t } = e;
    if (c[t]) return !1;
    c[t] = !0;
}
function h(e) {
    let { id: t } = e;
    return f(t);
}
function m(e) {
    for (let t of (e.userGuildSettings.partial || (c = {}), e.userGuildSettings.entries))
        if (null != t.channel_overrides)
            for (let e of t.channel_overrides) e.collapsed ? (c[e.channel_id] = !0) : delete c[e.channel_id];
}
function g(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id).filter(a.Vq));
    for (let e in c) {
        let t = s.A.getChannel(e);
        null != t && null != t.guild_id && n.has(t.guild_id) && delete c[t.id];
    }
    for (let e of t) for (let t of e.channel_overrides) t.collapsed && (c[t.channel_id] = !0);
}
function E(e) {
    let {
        channel: { id: t },
    } = e;
    return f(t);
}
function A(e) {
    let { guildId: t } = e;
    l.Ay.getChannels(t)[u.rbe.GUILD_CATEGORY].forEach((e) => {
        let { channel: t } = e;
        "null" !== t.id && (c[t.id] = !0);
    });
}
function I(e) {
    let { guildId: t } = e;
    l.Ay.getChannels(t)[u.rbe.GUILD_CATEGORY].forEach((e) => {
        let { channel: t } = e;
        delete c[t.id];
    });
}
class T extends r.Ay.PersistedStore {
    static displayName = "CategoryCollapseStore";
    static persistKey = "collapsedCategories";
    initialize(e) {
        this.waitFor(s.A, o.A, l.Ay), this.removeChangeListener(_), this.addChangeListener(_), (c = e ?? {});
    }
    getState() {
        return c;
    }
    isCollapsed(e) {
        return null != e && "null" !== e && !!c[e] && c[e];
    }
    getCollapsedCategories() {
        return c;
    }
    get version() {
        return d;
    }
}
let y = new T(i.h, {
    CONNECTION_OPEN: m,
    USER_GUILD_SETTINGS_FULL_UPDATE: g,
    CATEGORY_COLLAPSE: p,
    CATEGORY_EXPAND: h,
    CATEGORY_COLLAPSE_ALL: A,
    CATEGORY_EXPAND_ALL: I,
    CHANNEL_DELETE: E,
});
