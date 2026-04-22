"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153),
    s = n(403362),
    a = n(734057),
    o = n(919638),
    l = n(808728),
    u = n(652215);
let d = {},
    c = 0;
function _() {
    c += 1;
}
function f(e) {
    if (null == d[e]) return !1;
    delete d[e];
}
class E extends r.Ay.PersistedStore {
    static displayName = "CategoryCollapseStore";
    static persistKey = "collapsedCategories";
    initialize(e) {
        this.waitFor(a.A, o.A, l.Ay), this.removeChangeListener(_), this.addChangeListener(_), (d = e ?? {});
    }
    getState() {
        return d;
    }
    isCollapsed(e) {
        return null != e && "null" !== e && !!d[e] && d[e];
    }
    getCollapsedCategories() {
        return d;
    }
    get version() {
        return c;
    }
}
let h = new E(i.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of (e.userGuildSettings.partial || (d = {}), e.userGuildSettings.entries))
            if (null != t.channel_overrides)
                for (let e of t.channel_overrides) e.collapsed ? (d[e.channel_id] = !0) : delete d[e.channel_id];
    },
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e,
            n = new Set(t.map((e) => e.guild_id).filter(s.Vq));
        for (let e in d) {
            let t = a.A.getChannel(e);
            null != t && null != t.guild_id && n.has(t.guild_id) && delete d[t.id];
        }
        for (let e of t) for (let t of e.channel_overrides) t.collapsed && (d[t.channel_id] = !0);
    },
    CATEGORY_COLLAPSE: function (e) {
        let { id: t } = e;
        if (d[t]) return !1;
        d[t] = !0;
    },
    CATEGORY_EXPAND: function (e) {
        let { id: t } = e;
        return f(t);
    },
    CATEGORY_COLLAPSE_ALL: function (e) {
        let { guildId: t } = e;
        l.Ay.getChannels(t)[u.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            "null" !== t.id && (d[t.id] = !0);
        });
    },
    CATEGORY_EXPAND_ALL: function (e) {
        let { guildId: t } = e;
        l.Ay.getChannels(t)[u.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            delete d[t.id];
        });
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return f(t);
    },
});
