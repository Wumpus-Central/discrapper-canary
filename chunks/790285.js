n.d(t, {
    TG: () => l,
    wB: () => s,
    yt: () => o
});
var r = n(149765),
    i = n(345162),
    a = n(981631);
function o(e) {
    return (0, i.Fs)(e, a.Plq.VIEW_CHANNEL);
}
function s(e, t) {
    return null != t && (!!r.e$(t.deny, a.Plq.VIEW_CHANNEL) || (e.isGuildVocal() && r.e$(t.deny, a.Plq.CONNECT)));
}
function l(e, t) {
    return !(null == t || s(e, t)) && !!r.e$(t.allow, a.Plq.VIEW_CHANNEL) && (!e.isGuildVocal() || r.e$(t.allow, a.Plq.CONNECT));
}
