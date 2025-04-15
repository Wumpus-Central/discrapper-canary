n.d(t, { Z: () => d }), n(388685);
var l,
    i = n(442837),
    r = n(570140);
function a(e, t, n) {
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
let u = {
        enable_recently_active: 'Enable recently active channels',
        theme_setting_in_account_sheet: 'Show theme settings in the Account action sheet',
        mobile_profile_effect_debug_controls: 'mobile_profile_effect_debug_controls',
        nav_experiment_server_drawer_enabled: '[NavI] Enable expandable server drawer',
        shop_include_unpublished: '[Shop] show unpublished items in shop',
        show_icymi_debug_scores: 'Show ICYMI debug scores',
        channel_list_scrim: 'Dim the channel list when chat appears'
    },
    s = {};
class o extends (l = i.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: s };
    }
    initialize(e) {
        for (var t in u) {
            var n, l;
            let i = null != (l = null == e || null == (n = e.toggleStates) ? void 0 : n[t]) && l;
            s[t] = i;
        }
    }
    get(e) {
        var t;
        return null != (t = s[e]) && t;
    }
    set(e, t) {
        return (s[e] = t), t;
    }
    all() {
        return s;
    }
    allWithDescriptions() {
        return Object.entries(s).map((e) => {
            let [t, n] = e;
            return [t, n, u[t]];
        });
    }
}
a(o, 'displayName', 'DevToolsDesignTogglesStore'), a(o, 'persistKey', 'DevToolsDesignTogglesStore');
let d = new o(r.Z, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
        s[e.toggle] = e.value;
    }
});
