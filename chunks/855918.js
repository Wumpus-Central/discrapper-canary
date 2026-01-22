n.d(t, {
    AN: () => o,
    Uj: () => l,
    iR: () => s,
});
var r = n(136722),
    i = n(34457),
    a = n(652215);
function s(e) {
    return (0, i._m)(e, a.xBc.VIEW_CHANNEL);
}
function o(e, t) {
    return null != t && (!!r.zy(t.deny, a.xBc.VIEW_CHANNEL) || (e.isGuildVocal() && r.zy(t.deny, a.xBc.CONNECT)));
}
function l(e, t) {
    return (
        !(null == t || o(e, t)) &&
        !!r.zy(t.allow, a.xBc.VIEW_CHANNEL) &&
        (!e.isGuildVocal() || r.zy(t.allow, a.xBc.CONNECT))
    );
}
