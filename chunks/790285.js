n.d(t, {
    TG: () => l,
    wB: () => s,
    yt: () => a
});
var r = n(149765),
    i = n(345162),
    o = n(981631);
function a(e) {
    return (0, i.Fs)(e, o.Plq.VIEW_CHANNEL);
}
function s(e, t) {
    return null != t && (!!r.e$(t.deny, o.Plq.VIEW_CHANNEL) || (e.isGuildVocal() && r.e$(t.deny, o.Plq.CONNECT)));
}
function l(e, t) {
    return !(null == t || s(e, t)) && !!r.e$(t.allow, o.Plq.VIEW_CHANNEL) && (!e.isGuildVocal() || r.e$(t.allow, o.Plq.CONNECT));
}
