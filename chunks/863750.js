n.d(t, { Z: () => u }), n(388685);
var i,
    r = n(442837),
    s = n(570140);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = {
        enable_recently_active: "Enable recently active channels",
        theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
        nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
        shop_include_unpublished: "[Shop] show unpublished items in shop",
        show_icymi_debug_scores: "Show ICYMI debug scores",
        channel_list_scrim: "Dim the channel list when chat appears",
    },
    a = {};
class c extends (i = r.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: a };
    }
    initialize(e) {
        for (var t in o) {
            var n, i;
            let r = null != (i = null == e || null == (n = e.toggleStates) ? void 0 : n[t]) && i;
            a[t] = r;
        }
    }
    get(e) {
        var t;
        return null != (t = a[e]) && t;
    }
    set(e, t) {
        return (a[e] = t), t;
    }
    all() {
        return a;
    }
    allWithDescriptions() {
        return Object.entries(a).map((e) => {
            let [t, n] = e;
            return [t, n, o[t]];
        });
    }
}
l(c, "displayName", "DevToolsDesignTogglesStore"), l(c, "persistKey", "DevToolsDesignTogglesStore");
let u = new c(s.Z, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
        a[e.toggle] = e.value;
    },
});
