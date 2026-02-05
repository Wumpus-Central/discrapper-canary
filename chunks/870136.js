"use strict";
n.d(t, { Ay: () => c, U0: () => d, c: () => o });
var r = n(311907),
    i = n(696451),
    a = n(287809),
    s = n(316031);
function o(e) {
    let t = (0, r.bG)([a.default], () => a.default.getCurrentUser());
    return c(t?.id, e);
}
function l(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null;
}
function u(e) {
    return [e?.communicationDisabledUntil ?? null, (0, s.Z)(e)];
}
function c(e, t) {
    return u((0, r.bG)([i.Ay], () => l(e, t, i.Ay), [t, e]));
}
function d(e, t) {
    return u(l(e, t, i.Ay));
}
