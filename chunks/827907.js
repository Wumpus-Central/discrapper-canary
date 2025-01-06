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
    a = n(700785),
    s = n(889369),
    o = n(981631),
    c = n(388032);
function d(e, t) {
    return (0, i.e7)([s.Z], () => s.Z.editedDefaultChannelIds.has(e) || (null != t && s.Z.editedDefaultChannelIds.has(t)));
}
function u(e, t) {
    return (0, i.e7)([s.Z], () => e === t || (null != t && s.Z.editedDefaultChannelIds.has(t)));
}
function m(e, t) {
    return (0, i.e7)([s.Z, r.Z], () => (null != t && s.Z.editedDefaultChannelIds.has(t) ? c.intl.string(c.t.Lz94y8) : a.Uu(o.Plq.VIEW_CHANNEL, r.Z.getChannel(e)) ? void 0 : c.intl.string(c.t['031cXl'])));
}
function h(e, t) {
    let n = (0, i.e7)([l.Z], () => {
            var n;
            return (null === (n = l.Z.getGuild(e)) || void 0 === n ? void 0 : n.rulesChannelId) === t;
        }),
        a = (0, i.e7)([r.Z], () => {
            var e;
            return null === (e = r.Z.getChannel(t)) || void 0 === e ? void 0 : e.isGuildVocal();
        });
    return n ? c.intl.string(c.t['2XWEKy']) : a ? c.intl.string(c.t.t6iJLS) : void 0;
}
