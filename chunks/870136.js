n.d(t, { Ay: () => c, U0: () => u, c: () => s });
var l = n(17928),
    a = n(696451),
    i = n(287809),
    r = n(316031);
function s(e) {
    let t = (0, l.bG)([i.default], () => i.default.getCurrentUser());
    return c(t?.id, e);
}
function o(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null;
}
function d(e) {
    return [e?.communicationDisabledUntil ?? null, (0, r.Z)(e)];
}
function c(e, t) {
    return d((0, l.bG)([a.Ay], () => o(e, t, a.Ay), [t, e]));
}
function u(e, t) {
    return d(o(e, t, a.Ay));
}
