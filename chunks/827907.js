n.d(t, {
    EH: function () {
        return m;
    },
    Mf: function () {
        return d;
    },
    lL: function () {
        return h;
    },
    t4: function () {
        return u;
    }
});
var i = n(442837),
    r = n(592125),
    l = n(430824),
    s = n(700785),
    a = n(889369),
    o = n(981631),
    c = n(388032);
function d(e, t) {
    return (0, i.e7)([a.Z], () => a.Z.editedDefaultChannelIds.has(e) || (null != t && a.Z.editedDefaultChannelIds.has(t)));
}
function u(e, t) {
    return (0, i.e7)([a.Z], () => e === t || (null != t && a.Z.editedDefaultChannelIds.has(t)));
}
function m(e, t) {
    return (0, i.e7)([a.Z, r.Z], () => (null != t && a.Z.editedDefaultChannelIds.has(t) ? c.intl.string(c.t.Lz94y8) : s.Uu(o.Plq.VIEW_CHANNEL, r.Z.getChannel(e)) ? void 0 : c.intl.string(c.t['031cXl'])));
}
function h(e, t) {
    let n = (0, i.e7)([l.Z], () => {
            var n;
            return (null === (n = l.Z.getGuild(e)) || void 0 === n ? void 0 : n.rulesChannelId) === t;
        }),
        s = (0, i.e7)([r.Z], () => {
            var e;
            return null === (e = r.Z.getChannel(t)) || void 0 === e ? void 0 : e.isGuildVocal();
        });
    return n ? c.intl.string(c.t['2XWEKy']) : s ? c.intl.string(c.t.t6iJLS) : void 0;
}
