n.d(t, {
    EH: () => m,
    Mf: () => u,
    lL: () => g,
    t4: () => d
});
var r = n(442837),
    i = n(592125),
    l = n(430824),
    s = n(700785),
    a = n(889369),
    o = n(981631),
    c = n(388032);
function u(e, t) {
    return (0, r.e7)([a.Z], () => a.Z.editedDefaultChannelIds.has(e) || (null != t && a.Z.editedDefaultChannelIds.has(t)));
}
function d(e, t) {
    return (0, r.e7)([a.Z], () => e === t || (null != t && a.Z.editedDefaultChannelIds.has(t)));
}
function m(e, t) {
    return (0, r.e7)([a.Z, i.Z], () => (null != t && a.Z.editedDefaultChannelIds.has(t) ? c.intl.string(c.t.Lz94y8) : s.Uu(o.Plq.VIEW_CHANNEL, i.Z.getChannel(e)) ? void 0 : c.intl.string(c.t['031cXl'])));
}
function g(e, t) {
    let n = (0, r.e7)([l.Z], () => {
            var n;
            return (null == (n = l.Z.getGuild(e)) ? void 0 : n.rulesChannelId) === t;
        }),
        s = (0, r.e7)([i.Z], () => {
            var e;
            return null == (e = i.Z.getChannel(t)) ? void 0 : e.isGuildVocal();
        });
    return n ? c.intl.string(c.t['2XWEKy']) : s ? c.intl.string(c.t.t6iJLS) : void 0;
}
