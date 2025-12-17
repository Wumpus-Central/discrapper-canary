n.d(t, {
    EH: () => g,
    Mf: () => d,
    lL: () => f,
    t4: () => u,
});
var r = n(442837),
    i = n(592125),
    l = n(430824),
    a = n(700785),
    s = n(889369),
    o = n(981631),
    c = n(388032);
function d(e, t) {
    return (0, r.e7)(
        [s.Z],
        () => s.Z.editedDefaultChannelIds.has(e) || (null != t && s.Z.editedDefaultChannelIds.has(t)),
    );
}
function u(e, t) {
    return (0, r.e7)([s.Z], () => e === t || (null != t && s.Z.editedDefaultChannelIds.has(t)));
}
function g(e, t) {
    return (0, r.e7)([s.Z, i.Z], () =>
        null != t && s.Z.editedDefaultChannelIds.has(t)
            ? c.intl.string(c.t.Lz94y1)
            : a.Uu(o.Plq.VIEW_CHANNEL, i.Z.getChannel(e))
              ? void 0
              : c.intl.string(c.t["031cXt"]),
    );
}
function f(e, t) {
    let n = (0, r.e7)([l.Z], () => {
            var n;
            return (null == (n = l.Z.getGuild(e)) ? void 0 : n.rulesChannelId) === t;
        }),
        a = (0, r.e7)([i.Z], () => {
            var e;
            return null == (e = i.Z.getChannel(t)) ? void 0 : e.isGuildVocal();
        });
    return n ? c.intl.string(c.t["2XWEK9"]) : a ? c.intl.string(c.t.t6iJLY) : void 0;
}
