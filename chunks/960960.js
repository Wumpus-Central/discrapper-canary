l.d(t, { A: () => d });
var n = l(17928),
    i = l(228366);
let a = {};
function r(e) {
    let t = a[e];
    return (null == t && ((t = { fetchStatus: "idle" }), (a[e] = t)), t);
}
class s extends n.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(e) {
        return a[e]?.widgets;
    }
    getWidget(e, t) {
        return a[e]?.widgets?.find((e) => e.type === t);
    }
    getFetchStatus(e) {
        return a[e]?.fetchStatus ?? "idle";
    }
}
let d = new s(i.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (e) {
        let { guildId: t } = e;
        r(t).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (e) {
        let { guildId: t, widgets: l } = e,
            n = r(t);
        ((n.widgets = l), (n.fetchStatus = "success"));
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        r(t).fetchStatus = "error";
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: l },
        } = e;
        if (l || null == a[t]) return !1;
        delete a[t];
    },
    LOGOUT: function () {
        a = {};
    },
});
