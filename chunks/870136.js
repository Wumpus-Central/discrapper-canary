n.d(t, { Ay: () => c, U0: () => u, c: () => s });
var l = n(311907),
    a = n(696451),
    r = n(287809),
    i = n(316031);
function s(e) {
    let t = (0, l.bG)([r.default], () => r.default.getCurrentUser());
    return c(t?.id, e);
}
function d(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null;
}
function o(e) {
    return [e?.communicationDisabledUntil ?? null, (0, i.Z)(e)];
}
function c(e, t) {
    return o((0, l.bG)([a.Ay], () => d(e, t, a.Ay), [t, e]));
}
function u(e, t) {
    return o(d(e, t, a.Ay));
}
