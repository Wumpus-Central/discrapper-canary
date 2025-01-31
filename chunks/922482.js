n.d(t, {
    AC: () => E,
    Cq: () => y,
    R5: () => I,
    TM: () => v
});
var i = n(749210),
    r = n(287734),
    a = n(872810),
    s = n(366297),
    o = n(280837),
    l = n(199902),
    u = n(592125),
    c = n(430824),
    d = n(496675),
    f = n(944486),
    _ = n(881824),
    p = n(107511),
    h = n(146085),
    m = n(96150);
function g(e, t) {
    return !!d.Z.can(h.gl, e) && (!_.Zl(e.id) || t === e.id || (_.vu(e, () => y(e, !0)), !1));
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (r) => {
        let a = u.Z.getChannel(t);
        if (null != a) return v(a, n), r(a);
        await (0, o.O)([e]),
            await i.Z.joinGuild(e, { lurker: !0 }),
            c.Z.addConditionalChangeListener(() => {
                let e = u.Z.getChannel(t);
                return null == e || (v(e), m.Z.initialize(), r(e), !1);
            });
    });
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = f.Z.getVoiceChannelId();
    if ((!t && !g(e, n)) || (p.Z.initialize(), r.default.selectVoiceChannel(e.id), (n = f.Z.getVoiceChannelId()) !== e.id)) return !1;
    let i = l.Z.getAllApplicationStreamsForChannel(e.id);
    return i.length > 0 && (0, a.rn)(i[0], { noFocus: !1 }), !0;
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = f.Z.getVoiceChannelId();
    !(!i && r !== e.id && (0, s._)(e) && _.Gy(e, () => y(e, t, n, !0))) && v(e, t) && I(e, r, n);
}
function I(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    _.R5(e, t, n);
}
