t.d(n, { Z: () => d }), t(388685);
var l,
    i = t(442837),
    r = t(570140);
function a(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[n] = t),
        e
    );
}
let u = {
        enable_recently_active: "Enable recently active channels",
        theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
        nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
        shop_include_unpublished: "[Shop] show unpublished items in shop",
        show_icymi_debug_scores: "Show ICYMI debug scores",
        channel_list_scrim: "Dim the channel list when chat appears",
    },
    s = {};
class o extends (l = i.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: s };
    }
    initialize(e) {
        for (var n in u) {
            var t, l;
            let i = null != (l = null == e || null == (t = e.toggleStates) ? void 0 : t[n]) && l;
            s[n] = i;
        }
    }
    get(e) {
        var n;
        return null != (n = s[e]) && n;
    }
    set(e, n) {
        return (s[e] = n), n;
    }
    all() {
        return s;
    }
    allWithDescriptions() {
        return Object.entries(s).map((e) => {
            let [n, t] = e;
            return [n, t, u[n]];
        });
    }
}
a(o, "displayName", "DevToolsDesignTogglesStore"), a(o, "persistKey", "DevToolsDesignTogglesStore");
let d = new o(r.Z, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
        s[e.toggle] = e.value;
    },
});
