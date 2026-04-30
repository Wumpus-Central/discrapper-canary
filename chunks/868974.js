"use strict";
n.d(t, { H: () => r, s: () => s });
let i = (0, n(945810).mj)({
    name: "2025-05-search-results-feedback",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function r(e) {
    let { location: t } = e,
        { enabled: n } = i.useConfig({ location: t });
    return n;
}
function s(e) {
    let { location: t } = e,
        { enabled: n } = i.getConfig({ location: t });
    return n;
}
