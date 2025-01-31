n.d(t, { Z: () => u }), n(47120);
var i,
    l = n(442837),
    r = n(570140);
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
let a = {
        enable_recently_active: 'Enable recently active channels',
        theme_setting_in_account_sheet: 'Show theme settings in the Account action sheet',
        mobile_profile_effect_debug_controls: 'mobile_profile_effect_debug_controls',
        nav_experiment_server_drawer_enabled: '[NavI] Enable expandable server drawer',
        shop_include_unpublished: '[Shop] show unpublished items in shop',
        show_icymi_debug_scores: 'Show ICYMI debug scores'
    },
    o = {};
class d extends (i = l.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: o };
    }
    initialize(e) {
        for (var t in a) {
            var n, i;
            let l = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
            o[t] = l;
        }
    }
    get(e) {
        var t;
        return null !== (t = o[e]) && void 0 !== t && t;
    }
    set(e, t) {
        return (o[e] = t), t;
    }
    all() {
        return o;
    }
    allWithDescriptions() {
        return Object.entries(o).map((e) => {
            let [t, n] = e;
            return [t, n, a[t]];
        });
    }
}
s(d, 'displayName', 'DevToolsDesignTogglesStore'), s(d, 'persistKey', 'DevToolsDesignTogglesStore');
let u = new d(r.Z, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
        o[e.toggle] = e.value;
    }
});
