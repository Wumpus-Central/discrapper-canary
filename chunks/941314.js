"use strict";
n.r(t),
    n.d(t, {
        getIsRiotSocialSDKMigrationEnabled: () => c,
        useIsRiotSocialSDKMigrationEnabled: () => u,
        useRiotSocialSDKMigrationDefaultBody: () => d,
    });
var i = n(945810);
let r = { 0: { enabled: !1, defaultBody: n(375708).t["2lfjU+"] }, 1: { enabled: !0, defaultBody: null } },
    s = { enabled: !1, defaultBody: null },
    a = (0, i.mj)({ name: "2026-04-riot-social-sdk-migration", kind: "user", defaultConfig: s, variations: r }),
    o = (0, i.mj)({
        name: "2026-05-riot-social-sdk-migration-us--canada",
        kind: "user",
        defaultConfig: s,
        variations: r,
    }),
    l = (0, i.mj)({
        name: "2026-05-riot-social-sdk-migration-all-regions",
        kind: "user",
        defaultConfig: s,
        variations: r,
    });
function u(e) {
    let t = a.useConfig(e),
        n = o.useConfig(e),
        i = l.useConfig(e);
    return t.enabled || n.enabled || i.enabled;
}
function c(e) {
    let t = a.getConfig(e),
        n = o.getConfig(e),
        i = l.getConfig(e);
    return t.enabled || n.enabled || i.enabled;
}
function d(e) {
    let t = a.useConfig(e),
        n = o.useConfig(e),
        i = l.useConfig(e);
    return t.enabled || n.enabled || i.enabled ? null : (t.defaultBody ?? n.defaultBody ?? i.defaultBody);
}
