l.d(t, { A: () => d });
var i = l(17928),
    n = l(228366);
let a = {};
function s(e) {
    let t = a[e];
    return null == t && ((t = { fetchStatus: "idle" }), (a[e] = t)), t;
}
class r extends i.Ay.Store {
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
let d = new r(n.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (e) {
        let { guildId: t } = e;
        s(t).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (e) {
        let { guildId: t, widgets: l } = e,
            i = s(t);
        (i.widgets = l), (i.fetchStatus = "success");
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        s(t).fetchStatus = "error";
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
