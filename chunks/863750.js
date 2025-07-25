(n.d(t, { Z: () => u }), n(388685));
var r,
    i = n(442837),
    l = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = {
        enable_recently_active: 'Enable recently active channels',
        theme_setting_in_account_sheet: 'Show theme settings in the Account action sheet',
        nav_experiment_server_drawer_enabled: '[NavI] Enable expandable server drawer',
        shop_include_unpublished: '[Shop] show unpublished items in shop',
        show_icymi_debug_scores: 'Show ICYMI debug scores',
        channel_list_scrim: 'Dim the channel list when chat appears'
    },
    a = {};
class c extends (r = i.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: a };
    }
    initialize(e) {
        for (var t in o) {
            var n, r;
            let i = null != (r = null == e || null == (n = e.toggleStates) ? void 0 : n[t]) && r;
            a[t] = i;
        }
    }
    get(e) {
        var t;
        return null != (t = a[e]) && t;
    }
    set(e, t) {
        return ((a[e] = t), t);
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
(s(c, 'displayName', 'DevToolsDesignTogglesStore'), s(c, 'persistKey', 'DevToolsDesignTogglesStore'));
let u = new c(l.Z, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
        a[e.toggle] = e.value;
    }
});
