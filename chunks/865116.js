"use strict";
n.d(t, { Ay: () => c, xW: () => s });
var i,
    r = n(17928),
    a = n(228366),
    s =
        (((i = {})[(i.MESSAGING = 0)] = "MESSAGING"),
        (i[(i.OVERLAYS = 1)] = "OVERLAYS"),
        (i[(i.PREMIUM = 2)] = "PREMIUM"),
        (i[(i.REPORTING = 3)] = "REPORTING"),
        (i[(i.APP_COLLECTIONS = 4)] = "APP_COLLECTIONS"),
        (i[(i.SHOP = 5)] = "SHOP"),
        (i[(i.LIBDISCORE = 6)] = "LIBDISCORE"),
        i);
let l = {
        visual_effect_view_overrides: { label: "Blur view overrides for designers to test with", category: 1 },
        obscure_blur_effect_explicit_content_enabled: {
            label: "Force explicit content obscure blur effect on for message media and embeds",
            category: 1,
        },
        obscure_blur_effect_gore_content_enabled: {
            label: "Force gore content obscure blur effect on for message media and embeds",
            category: 1,
        },
        obscure_blur_effect_self_harm_content_enabled: {
            label: "Force self harm content obscure blur effect on for message media and embeds",
            category: 1,
        },
        explicit_media_redaction_ignore_pending_scan: { label: "Ignore pending scan on explicit media", category: 1 },
        analytics_debugger: { label: "Enable analytics debugger view", category: 1 },
        idle_status_indicator: { label: "Enable idle status indicator", category: 1 },
        highlight_mana_text: {
            label: "Mana Text Migration Highlighter. Green: migrated Text/Heading. Dashed red: migrated but a caller style overrides the variant, so it will not move with the experiment. Solid red: unmigrated LegacyText. Yellow: TextStyleSheet read directly (experiment-reachable, not migrated); requires an app restart to take effect.",
            category: 1,
        },
        upload_fail_50: { label: "Uploads: Fail 50% of uploads with 500 status after a 1 second delay", category: 0 },
        send_fail_100: { label: "Send: Fail with 500 status", category: 0 },
        premium_roadblocks: { label: "Enable all new premium roadblocks", category: 2 },
        force_mock_iap: { label: "[iOS] Force mock IAP products", category: 2 },
        iar_testing: { label: "Enable staff only test iar menu options", category: 3 },
        iar_skip_api_report_submit: {
            label: "Enable to skip calling the API to skip submitting actual IAR reports",
            category: 3,
        },
        iar_show_report_sub_type_labels: { label: "Show IAR report sub type labels", category: 3 },
        only_show_preview_app_collections: {
            label: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
            category: 4,
        },
        disable_app_collections_cache: {
            label: "Disable application collections cache so that you can see updates to collections immediately.",
            category: 4,
        },
        shop_disable_cache: { label: "Disable collectibles shop cache", category: 5 },
        shop_include_unpublished: { label: "Show unpublished items in collectibles shop", category: 5 },
        shop_show_debug_overlay: { label: "Show debug log overlay in collectibles shop", category: 5 },
        bypass_google_sku_sync: { label: "[Android] Bypass Google SKU sync in collectibles shop", category: 5 },
        libdiscore_verbose_telemetry_logging: { label: "Enable verbose telemetry logging for libdiscore", category: 6 },
    },
    o = {};
class d extends r.Ay.DeviceSettingsStore {
    static displayName = "DevToolsDevSettingsStore";
    static persistKey = "DevToolsDevSettingsStore";
    getUserAgnosticState() {
        return { toggleStates: o };
    }
    initialize(e) {
        for (var t in l) {
            let n = e?.toggleStates?.[t] ?? !1;
            n && (o[t] = n);
        }
    }
    get(e) {
        return o[e] ?? !1;
    }
    enabled() {
        return o;
    }
    allByCategory(e) {
        return Object.entries(l)
            .filter((t) => {
                let [n, i] = t;
                return i.category === e;
            })
            .map((e) => {
                let [t, n] = e;
                return [t, o[t] ?? !1, n];
            });
    }
}
let c = new d(a.h, {
    DEV_TOOLS_DEV_SETTING_SET: function (e) {
        !1 === e.value ? delete o[e.toggle] : (o[e.toggle] = e.value);
    },
});
