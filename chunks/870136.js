"use strict";
n.d(t, { Ay: () => d, U0: () => u, c: () => s });
var a = n(17928),
    r = n(696451),
    i = n(287809),
    l = n(316031);
function s(e) {
    let t = (0, a.bG)([i.default], () => i.default.getCurrentUser());
    return d(t?.id, e);
}
function o(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null;
}
function c(e) {
    return [e?.communicationDisabledUntil ?? null, (0, l.Z)(e)];
}
function d(e, t) {
    return c((0, a.bG)([r.Ay], () => o(e, t, r.Ay), [t, e]));
}
function u(e, t) {
    return c(o(e, t, r.Ay));
}
