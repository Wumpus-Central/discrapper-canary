i.d(e, { A: () => c });
var n = i(17928),
    l = i(228366);
let a = {};
function r(t) {
    let e = a[t];
    return null == e && ((e = { fetchStatus: "idle" }), (a[t] = e)), e;
}
class s extends n.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(t) {
        return a[t]?.widgets;
    }
    getWidget(t, e) {
        return a[t]?.widgets?.find((t) => t.type === e);
    }
    getFetchStatus(t) {
        return a[t]?.fetchStatus ?? "idle";
    }
}
let c = new s(l.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (t) {
        let { guildId: e } = t;
        r(e).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (t) {
        let { guildId: e, widgets: i } = t,
            n = r(e);
        (n.widgets = i), (n.fetchStatus = "success");
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        r(e).fetchStatus = "error";
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: i },
        } = t;
        if (i || null == a[e]) return !1;
        delete a[e];
    },
    LOGOUT: function () {
        a = {};
    },
});
