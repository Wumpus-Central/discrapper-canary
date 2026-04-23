"use strict";
n.d(t, { Ay: () => _, xW: () => a });
var i,
    r = n(17928),
    s = n(228366),
    a =
        (((i = {})[(i.MESSAGING = 0)] = "MESSAGING"),
        (i[(i.OVERLAYS = 1)] = "OVERLAYS"),
        (i[(i.PREMIUM = 2)] = "PREMIUM"),
        (i[(i.REPORTING = 3)] = "REPORTING"),
        (i[(i.APP_COLLECTIONS = 4)] = "APP_COLLECTIONS"),
        (i[(i.SHOP = 5)] = "SHOP"),
        (i[(i.LIBDISCORE = 6)] = "LIBDISCORE"),
        i);
let o = {
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
        upload_fail_50: { label: "Uploads: Fail 50% of uploads with 500 status after a 1 second delay", category: 0 },
        send_fail_100: { label: "Send: Fail with 500 status", category: 0 },
        premium_roadblocks: { label: "Enable all new premium roadblocks", category: 2 },
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
    l = {};
class d extends r.Ay.DeviceSettingsStore {
    static displayName = "DevToolsDevSettingsStore";
    static persistKey = "DevToolsDevSettingsStore";
    getUserAgnosticState() {
        return { toggleStates: l };
    }
    initialize(e) {
        for (var t in o) {
            let n = e?.toggleStates?.[t] ?? !1;
            n && (l[t] = n);
        }
    }
    get(e) {
        return l[e] ?? !1;
    }
    enabled() {
        return l;
    }
    allByCategory(e) {
        return Object.entries(o)
            .filter((t) => {
                let [n, i] = t;
                return i.category === e;
            })
            .map((e) => {
                let [t, n] = e;
                return [t, l[t] ?? !1, n];
            });
    }
}
let _ = new d(s.h, {
    DEV_TOOLS_DEV_SETTING_SET: function (e) {
        !1 === e.value ? delete l[e.toggle] : (l[e.toggle] = e.value);
    },
});
