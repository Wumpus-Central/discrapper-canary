var l = n(855986),
    i = n(73153);
let r = {};
function a(e) {
    let t = r[e];
    return (null == t && ((t = { fetchStatus: "idle" }), (r[e] = t)), t);
}
class s extends l.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(e) {
        return r[e]?.widgets;
    }
    getWidget(e, t) {
        return r[e]?.widgets?.find((e) => e.type === t);
    }
    getFetchStatus(e) {
        return r[e]?.fetchStatus ?? "idle";
    }
}
let u = new s(i.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (e) {
        let { guildId: t } = e;
        a(t).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (e) {
        let { guildId: t, widgets: n } = e,
            l = a(t);
        ((l.widgets = n), (l.fetchStatus = "success"));
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        a(t).fetchStatus = "error";
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if (n || null == r[t]) return !1;
        delete r[t];
    },
    LOGOUT: function () {
        r = {};
    },
});
n.d(t, {}, { A: u });
