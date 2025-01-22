n(47120);
var i,
    r = n(442837),
    l = n(570140);
function o(e, t, n) {
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
let s = {
        enable_recently_active: 'Enable recently active channels',
        theme_setting_in_account_sheet: 'Show theme settings in the Account action sheet',
        mobile_profile_effect_debug_controls: 'mobile_profile_effect_debug_controls',
        nav_experiment_server_drawer_enabled: '[NavI] Enable expandable server drawer',
        shop_include_unpublished: '[Shop] show unpublished items in shop',
        show_icymi_debug_scores: 'Show ICYMI debug scores'
    },
    a = {};
class u extends (i = r.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: a };
    }
    initialize(e) {
        for (var t in s) {
            var n, i;
            let r = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
            a[t] = r;
        }
    }
    get(e) {
        var t;
        return null !== (t = a[e]) && void 0 !== t && t;
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
            return [t, n, s[t]];
        });
    }
}
o(u, 'displayName', 'DevToolsDesignTogglesStore'),
    o(u, 'persistKey', 'DevToolsDesignTogglesStore'),
    (t.Z = new u(l.Z, {
        DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
            a[e.toggle] = e.value;
        }
    }));
