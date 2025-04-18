n.d(t, {
    MT: () => a,
    TG: () => s,
    wB: () => o
});
var r = n(149765),
    i = n(981631);
function a(e) {
    return r.e$(e.permissions, i.Plq.VIEW_CHANNEL);
}
function o(e, t) {
    return null != t && (!!r.e$(t.deny, i.Plq.VIEW_CHANNEL) || (e.isGuildVocal() && r.e$(t.deny, i.Plq.CONNECT)));
}
function s(e, t) {
    return !(null == t || o(e, t)) && !!r.e$(t.allow, i.Plq.VIEW_CHANNEL) && (!e.isGuildVocal() || r.e$(t.allow, i.Plq.CONNECT));
}
