r.d(n, {
    AC: function () {
        return v;
    },
    Cq: function () {
        return b;
    },
    R5: function () {
        return I;
    },
    TM: function () {
        return y;
    }
});
var i = r(749210),
    a = r(287734),
    o = r(872810),
    s = r(366297),
    l = r(280837),
    u = r(199902),
    c = r(592125),
    d = r(430824),
    f = r(496675),
    p = r(944486),
    h = r(881824),
    _ = r(107511),
    m = r(146085),
    g = r(96150);
function E(e, n) {
    return !!f.Z.can(m.gl, e) && (!h.Zl(e.id) || n === e.id || (h.vu(e, () => b(e, !0)), !1));
}
function v(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (a) => {
        let o = c.Z.getChannel(n);
        if (null != o) return y(o, r), a(o);
        await (0, l.O)([e]),
            await i.Z.joinGuild(e, { lurker: !0 }),
            d.Z.addConditionalChangeListener(() => {
                let e = c.Z.getChannel(n);
                return null == e || (y(e), g.Z.initialize(), a(e), !1);
            });
    });
}
function y(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = p.Z.getVoiceChannelId();
    if (!n && !E(e, r)) return !1;
    if ((_.Z.initialize(), a.default.selectVoiceChannel(e.id), (r = p.Z.getVoiceChannelId()) !== e.id)) return !1;
    let i = u.Z.getAllApplicationStreamsForChannel(e.id);
    return i.length > 0 && (0, o.rn)(i[0], { noFocus: !1 }), !0;
}
function b(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = p.Z.getVoiceChannelId();
    if (!(!i && a !== e.id && (0, s._)(e) && h.Gy(e, () => b(e, n, r, !0)))) y(e, n) && I(e, a, r);
}
function I(e, n) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    h.R5(e, n, r);
}
