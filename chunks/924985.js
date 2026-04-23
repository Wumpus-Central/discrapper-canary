"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153),
    s = n(403362),
    a = n(734057),
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
class p extends r.Ay.PersistedStore {
    static displayName = "CategoryCollapseStore";
    static persistKey = "collapsedCategories";
    initialize(e) {
        this.waitFor(a.A, o.A, l.Ay), this.removeChangeListener(_), this.addChangeListener(_), (c = e ?? {});
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
let h = new p(i.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of (e.userGuildSettings.partial || (c = {}), e.userGuildSettings.entries))
            if (null != t.channel_overrides)
                for (let e of t.channel_overrides) e.collapsed ? (c[e.channel_id] = !0) : delete c[e.channel_id];
    },
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e,
            n = new Set(t.map((e) => e.guild_id).filter(s.Vq));
        for (let e in c) {
            let t = a.A.getChannel(e);
            null != t && null != t.guild_id && n.has(t.guild_id) && delete c[t.id];
        }
        for (let e of t) for (let t of e.channel_overrides) t.collapsed && (c[t.channel_id] = !0);
    },
    CATEGORY_COLLAPSE: function (e) {
        let { id: t } = e;
        if (c[t]) return !1;
        c[t] = !0;
    },
    CATEGORY_EXPAND: function (e) {
        let { id: t } = e;
        return f(t);
    },
    CATEGORY_COLLAPSE_ALL: function (e) {
        let { guildId: t } = e;
        l.Ay.getChannels(t)[u.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            "null" !== t.id && (c[t.id] = !0);
        });
    },
    CATEGORY_EXPAND_ALL: function (e) {
        let { guildId: t } = e;
        l.Ay.getChannels(t)[u.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            delete c[t.id];
        });
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return f(t);
    },
});
