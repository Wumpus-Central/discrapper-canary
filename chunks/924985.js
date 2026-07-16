"use strict";
n.d(t, { A: () => g });
var i = n(17928),
    r = n(873298),
    a = n(228366),
    s = n(5180),
    l = n(617617),
    o = n(403362),
    d = n(734057),
    c = n(919638),
    u = n(808728),
    _ = n(652215);
let E = {},
    A = 0;
function h() {
    A += 1;
}
function I(e) {
    if (null == E[e]) return !1;
    delete E[e];
}
function f() {
    return l.A.settings.favorites?.favoriteChannels;
}
function p(e) {
    return f()?.[e]?.type === r.Ip.CATEGORY;
}
function T() {
    let e = f();
    if (null == e) return !1;
    let t = !1;
    for (let n in e) {
        let i = e[n];
        i.type === r.Ip.CATEGORY && (i.collapsed ? E[n] || ((E[n] = !0), (t = !0)) : E[n] && (delete E[n], (t = !0)));
    }
    return t;
}
class m extends i.Ay.PersistedStore {
    static displayName = "CategoryCollapseStore";
    static persistKey = "collapsedCategories";
    initialize(e) {
        this.waitFor(d.A, c.A, u.Ay, l.A),
            this.removeChangeListener(h),
            this.addChangeListener(h),
            (E = e ?? {}),
            this.syncWith([l.A], T);
    }
    getState() {
        return E;
    }
    isCollapsed(e) {
        return null != e && "null" !== e && !!E[e] && E[e];
    }
    getCollapsedCategories() {
        return E;
    }
    get version() {
        return A;
    }
}
let g = new m(a.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of (e.userGuildSettings.partial || (E = {}), e.userGuildSettings.entries))
            if (null != t.channel_overrides)
                for (let e of t.channel_overrides) e.collapsed ? (E[e.channel_id] = !0) : delete E[e.channel_id];
        T();
    },
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e,
            n = new Set(t.map((e) => e.guild_id).filter(o.Vq));
        for (let e in E) {
            let t = d.A.getChannel(e);
            null != t && null != t.guild_id && n.has(t.guild_id) && delete E[t.id];
        }
        for (let e of t) for (let t of e.channel_overrides) t.collapsed && (E[t.channel_id] = !0);
    },
    CATEGORY_COLLAPSE: function (e) {
        let { id: t } = e;
        if (p(t) || E[t]) return !1;
        E[t] = !0;
    },
    CATEGORY_EXPAND: function (e) {
        let { id: t } = e;
        return !p(t) && I(t);
    },
    CATEGORY_COLLAPSE_ALL: function (e) {
        let { guildId: t } = e;
        if ((0, s.ai)(t)) return !1;
        u.Ay.getChannels(t)[_.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            "null" !== t.id && (E[t.id] = !0);
        });
    },
    CATEGORY_EXPAND_ALL: function (e) {
        let { guildId: t } = e;
        if ((0, s.ai)(t)) return !1;
        u.Ay.getChannels(t)[_.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            delete E[t.id];
        });
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return I(t);
    },
});
