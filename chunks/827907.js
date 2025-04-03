n.d(t, {
    EH: () => m,
    Mf: () => d,
    lL: () => g,
    t4: () => u
});
var r = n(442837),
    i = n(592125),
    s = n(430824),
    a = n(700785),
    l = n(889369),
    o = n(981631),
    c = n(388032);
function d(e, t) {
    return (0, r.e7)([l.Z], () => l.Z.editedDefaultChannelIds.has(e) || (null != t && l.Z.editedDefaultChannelIds.has(t)));
}
function u(e, t) {
    return (0, r.e7)([l.Z], () => e === t || (null != t && l.Z.editedDefaultChannelIds.has(t)));
}
function m(e, t) {
    return (0, r.e7)([l.Z, i.Z], () => (null != t && l.Z.editedDefaultChannelIds.has(t) ? c.NW.string(c.t.Lz94y8) : a.Uu(o.Plq.VIEW_CHANNEL, i.Z.getChannel(e)) ? void 0 : c.NW.string(c.t['031cXl'])));
}
function g(e, t) {
    let n = (0, r.e7)([s.Z], () => {
            var n;
            return (null == (n = s.Z.getGuild(e)) ? void 0 : n.rulesChannelId) === t;
        }),
        a = (0, r.e7)([i.Z], () => {
            var e;
            return null == (e = i.Z.getChannel(t)) ? void 0 : e.isGuildVocal();
        });
    return n ? c.NW.string(c.t['2XWEKy']) : a ? c.NW.string(c.t.t6iJLS) : void 0;
}
