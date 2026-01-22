n.d(t, {
    Ay: () => u,
    U0: () => d,
    c: () => o,
});
var r = n(311907),
    i = n(696451),
    a = n(287809),
    s = n(316031);
function o(e) {
    let t = (0, r.bG)([a.default], () => a.default.getCurrentUser());
    return u(null == t ? void 0 : t.id, e);
}
function l(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null;
}
function c(e) {
    var t;
    return [null != (t = null == e ? void 0 : e.communicationDisabledUntil) ? t : null, (0, s.Z)(e)];
}
function u(e, t) {
    return c((0, r.bG)([i.Ay], () => l(e, t, i.Ay), [t, e]));
}
function d(e, t) {
    return c(l(e, t, i.Ay));
}
