"use strict";
n.d(t, { A: () => m });
var i = n(17928),
    r = n(228366),
    s = n(403362),
    a = n(734057),
    o = n(919638),
    l = n(808728),
    d = n(652215);
let _ = {},
    u = 0;
function c() {
    u += 1;
}
function E(e) {
    if (null == _[e]) return !1;
    delete _[e];
}
class h extends i.Ay.PersistedStore {
    static displayName = "CategoryCollapseStore";
    static persistKey = "collapsedCategories";
    initialize(e) {
        this.waitFor(a.A, o.A, l.Ay), this.removeChangeListener(c), this.addChangeListener(c), (_ = e ?? {});
    }
    getState() {
        return _;
    }
    isCollapsed(e) {
        return null != e && "null" !== e && !!_[e] && _[e];
    }
    getCollapsedCategories() {
        return _;
    }
    get version() {
        return u;
    }
}
let m = new h(r.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of (e.userGuildSettings.partial || (_ = {}), e.userGuildSettings.entries))
            if (null != t.channel_overrides)
                for (let e of t.channel_overrides) e.collapsed ? (_[e.channel_id] = !0) : delete _[e.channel_id];
    },
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e,
            n = new Set(t.map((e) => e.guild_id).filter(s.Vq));
        for (let e in _) {
            let t = a.A.getChannel(e);
            null != t && null != t.guild_id && n.has(t.guild_id) && delete _[t.id];
        }
        for (let e of t) for (let t of e.channel_overrides) t.collapsed && (_[t.channel_id] = !0);
    },
    CATEGORY_COLLAPSE: function (e) {
        let { id: t } = e;
        if (_[t]) return !1;
        _[t] = !0;
    },
    CATEGORY_EXPAND: function (e) {
        let { id: t } = e;
        return E(t);
    },
    CATEGORY_COLLAPSE_ALL: function (e) {
        let { guildId: t } = e;
        l.Ay.getChannels(t)[d.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            "null" !== t.id && (_[t.id] = !0);
        });
    },
    CATEGORY_EXPAND_ALL: function (e) {
        let { guildId: t } = e;
        l.Ay.getChannels(t)[d.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            delete _[t.id];
        });
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return E(t);
    },
});
