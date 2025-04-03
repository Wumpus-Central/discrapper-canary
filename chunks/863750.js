n.d(t, { Z: () => h }), n(47120);
var i,
    s = n(442837),
    l = n(570140);
function r(e, t, n) {
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
let a = {
        enable_recently_active: 'Enable recently active channels',
        theme_setting_in_account_sheet: 'Show theme settings in the Account action sheet',
        mobile_profile_effect_debug_controls: 'mobile_profile_effect_debug_controls',
        nav_experiment_server_drawer_enabled: '[NavI] Enable expandable server drawer',
        shop_include_unpublished: '[Shop] show unpublished items in shop',
        show_icymi_debug_scores: 'Show ICYMI debug scores',
        channel_list_scrim: 'Dim the channel list when chat appears'
    },
    d = {};
class o extends (i = s.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: d };
    }
    initialize(e) {
        for (var t in a) {
            var n, i;
            let s = null != (i = null == e || null == (n = e.toggleStates) ? void 0 : n[t]) && i;
            d[t] = s;
        }
    }
    get(e) {
        var t;
        return null != (t = d[e]) && t;
    }
    set(e, t) {
        return (d[e] = t), t;
    }
    all() {
        return d;
    }
    allWithDescriptions() {
        return Object.entries(d).map((e) => {
            let [t, n] = e;
            return [t, n, a[t]];
        });
    }
}
r(o, 'displayName', 'DevToolsDesignTogglesStore'), r(o, 'persistKey', 'DevToolsDesignTogglesStore');
let h = new o(l.Z, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
        d[e.toggle] = e.value;
    }
});
