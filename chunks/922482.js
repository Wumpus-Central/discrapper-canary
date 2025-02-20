n.d(t, {
    AC: () => E,
    Cq: () => b,
    R5: () => y,
    TM: () => v
});
var r = n(749210),
    i = n(287734),
    o = n(872810),
    a = n(366297),
    s = n(280837),
    l = n(199902),
    c = n(592125),
    u = n(430824),
    d = n(496675),
    f = n(944486),
    p = n(881824),
    _ = n(107511),
    h = n(146085),
    m = n(96150);
function g(e, t) {
    return !!d.Z.can(h.gl, e) && (!p.Zl(e.id) || t === e.id || (p.vu(e, () => b(e, !0)), !1));
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (i) => {
        let o = c.Z.getChannel(t);
        if (null != o) return v(o, n), i(o);
        await (0, s.O)([e]),
            await r.Z.joinGuild(e, { lurker: !0 }),
            u.Z.addConditionalChangeListener(() => {
                let e = c.Z.getChannel(t);
                return null == e || (v(e), m.Z.initialize(), i(e), !1);
            });
    });
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = f.Z.getVoiceChannelId();
    if ((!t && !g(e, n)) || (_.Z.initialize(), i.default.selectVoiceChannel(e.id), (n = f.Z.getVoiceChannelId()) !== e.id)) return !1;
    let r = l.Z.getAllApplicationStreamsForChannel(e.id);
    return r.length > 0 && (0, o.rn)(r[0], { noFocus: !1 }), !0;
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = f.Z.getVoiceChannelId();
    !(!r && i !== e.id && (0, a._)(e) && p.Gy(e, () => b(e, t, n, !0))) && v(e, t) && y(e, i, n);
}
function y(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    p.R5(e, t, n);
}
