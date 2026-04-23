"use strict";
n.d(t, { H: () => i, s: () => s });
let r = (0, n(945810).mj)({
    name: "2025-05-search-results-feedback",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function i(e) {
    let { location: t } = e,
        { enabled: n } = r.useConfig({ location: t });
    return n;
}
function s(e) {
    let { location: t } = e,
        { enabled: n } = r.getConfig({ location: t });
    return n;
}
