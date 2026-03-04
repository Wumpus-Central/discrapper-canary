"use strict";
a.d(t, { Ay: () => _, U0: () => d, c: () => l });
var n = a(311907),
    r = a(696451),
    i = a(287809),
    s = a(316031);
function l(e) {
    let t = (0, n.bG)([i.default], () => i.default.getCurrentUser());
    return _(t?.id, e);
}
function o(e, t, a) {
    return null != t && null != e ? a.getMember(t, e) : null;
}
function c(e) {
    return [e?.communicationDisabledUntil ?? null, (0, s.Z)(e)];
}
function _(e, t) {
    return c((0, n.bG)([r.Ay], () => o(e, t, r.Ay), [t, e]));
}
function d(e, t) {
    return c(o(e, t, r.Ay));
}
