"use strict";
n.d(t, { Ay: () => c, U0: () => u, c: () => r });
var i = n(311907),
    s = n(696451),
    l = n(287809),
    a = n(316031);
function r(e) {
    let t = (0, i.bG)([l.default], () => l.default.getCurrentUser());
    return c(t?.id, e);
}
function o(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null;
}
function d(e) {
    return [e?.communicationDisabledUntil ?? null, (0, a.Z)(e)];
}
function c(e, t) {
    return d((0, i.bG)([s.Ay], () => o(e, t, s.Ay), [t, e]));
}
function u(e, t) {
    return d(o(e, t, s.Ay));
}
