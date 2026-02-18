"use strict";
n.d(t, { u: () => i });
let r = (0, n(250105).Ay)({
    name: "2026-02-boosting-marketing-page-video",
    kind: "user",
    defaultConfig: { placement: "none" },
    variations: { 0: { placement: "none" }, 1: { placement: "top" }, 2: { placement: "bottom" } },
});
function i(e) {
    return r.useConfig({ location: e }).placement;
}
