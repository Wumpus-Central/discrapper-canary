n.d(t, {
    Ay: () => f,
    xW: () => o,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
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
var o = (function (e) {
    return (
        (e[(e.MESSAGING = 0)] = "MESSAGING"),
        (e[(e.OVERLAYS = 1)] = "OVERLAYS"),
        (e[(e.PREMIUM = 2)] = "PREMIUM"),
        (e[(e.REPORTING = 3)] = "REPORTING"),
        (e[(e.APP_COLLECTIONS = 4)] = "APP_COLLECTIONS"),
        (e[(e.SHOP = 5)] = "SHOP"),
        (e[(e.LIBDISCORE = 6)] = "LIBDISCORE"),
        e
    );
})({});
let l = {
        visual_effect_view_overrides: {
            label: "Blur view overrides for designers to test with",
            category: 1,
        },
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
        explicit_media_redaction_ignore_pending_scan: {
            label: "Ignore pending scan on explicit media",
            category: 1,
        },
        analytics_debugger: {
            label: "Enable analytics debugger view",
            category: 1,
        },
        idle_status_indicator: {
            label: "Enable idle status indicator",
            category: 1,
        },
        upload_fail_50: {
            label: "Uploads: Fail 50% of uploads with 500 status after a 1 second delay",
            category: 0,
        },
        send_fail_100: {
            label: "Send: Fail with 500 status",
            category: 0,
        },
        premium_roadblocks: {
            label: "Enable all new premium roadblocks",
            category: 2,
        },
        iar_testing: {
            label: "Enable staff only test iar menu options",
            category: 3,
        },
        iar_skip_api_report_submit: {
            label: "Enable to skip calling the API to skip submitting actual IAR reports",
            category: 3,
        },
        iar_show_report_sub_type_labels: {
            label: "Show IAR report sub type labels",
            category: 3,
        },
        only_show_preview_app_collections: {
            label: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
            category: 4,
        },
        disable_app_collections_cache: {
            label: "Disable application collections cache so that you can see updates to collections immediately.",
            category: 4,
        },
        shop_show_debug_overlay: {
            label: "Show debug log overlay in collectibles shop",
            category: 5,
        },
        bypass_google_sku_sync: {
            label: "Bypass Google SKU sync in collectibles shop",
            category: 5,
        },
        libdiscore_verbose_telemetry_logging: {
            label: "Enable verbose telemetry logging for libdiscore",
            category: 6,
        },
    },
    c = {};

function u(e) {
    !1 === e.value ? delete c[e.toggle] : (c[e.toggle] = e.value);
}
class d extends (r = i.Ay.DeviceSettingsStore) {
    getUserAgnosticState() {
        return {
            toggleStates: c,
        };
    }
    initialize(e) {
        for (var t in l) {
            var n, r;
            let i = null != (n = null == e || null == (r = e.toggleStates) ? void 0 : r[t]) && n;
            i && (c[t] = i);
        }
    }
    get(e) {
        var t;
        return null != (t = c[e]) && t;
    }
    enabled() {
        return c;
    }
    allByCategory(e) {
        return Object.entries(l)
            .filter((t) => {
                let [n, r] = t;
                return r.category === e;
            })
            .map((e) => {
                var t;
                let [n, r] = e;
                return [n, null != (t = c[n]) && t, r];
            });
    }
}
s(d, "displayName", "DevToolsDevSettingsStore"), s(d, "persistKey", "DevToolsDevSettingsStore");
let f = new d(a.h, {
    DEV_TOOLS_DEV_SETTING_SET: u,
});
