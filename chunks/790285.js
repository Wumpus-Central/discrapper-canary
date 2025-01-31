n.d(t, {
    MT: () => a,
    TG: () => o,
    wB: () => s
});
var i = n(149765),
    r = n(981631);
function a(e) {
    return i.e$(e.permissions, r.Plq.VIEW_CHANNEL);
}
function s(e, t) {
    return null != t && (!!i.e$(t.deny, r.Plq.VIEW_CHANNEL) || (e.isGuildVocal() && i.e$(t.deny, r.Plq.CONNECT)));
}
function o(e, t) {
    return !(null == t || s(e, t)) && !!i.e$(t.allow, r.Plq.VIEW_CHANNEL) && (!e.isGuildVocal() || i.e$(t.allow, r.Plq.CONNECT));
}
