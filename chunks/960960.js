l.d(t, { A: () => d });
var n = l(17928),
    i = l(73153);
let s = {};
function a(e) {
    let t = s[e];
    return (null == t && ((t = { fetchStatus: "idle" }), (s[e] = t)), t);
}
class r extends n.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(e) {
        return s[e]?.widgets;
    }
    getWidget(e, t) {
        return s[e]?.widgets?.find((e) => e.type === t);
    }
    getFetchStatus(e) {
        return s[e]?.fetchStatus ?? "idle";
    }
}
let d = new r(i.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (e) {
        let { guildId: t } = e;
        a(t).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (e) {
        let { guildId: t, widgets: l } = e,
            n = a(t);
        ((n.widgets = l), (n.fetchStatus = "success"));
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        a(t).fetchStatus = "error";
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: l },
        } = e;
        if (l || null == s[t]) return !1;
        delete s[t];
    },
    LOGOUT: function () {
        s = {};
    },
});
