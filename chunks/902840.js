n.d(t, {
    Lp: () => d,
    l9: () => p,
    tW: () => u,
    ts: () => _
});
var r = n(399606),
    i = n(601964),
    a = n(430824),
    o = n(981631),
    s = n(176505);
function l(e) {
    var t;
    if (null == e) return !1;
    let n = a.Z.getGuild(null != (t = null == e ? void 0 : e.guild_id) ? t : ''),
        r = null != n && n.rulesChannelId === e.id,
        s = (0, i.Y2)(n);
    return o.TPd.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !r && !s;
}
function c(e) {
    return null != e && (e === o.ME || e === o.I_8);
}
function u(e) {
    return d(e, !0, !1);
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return !(null == e || !l(e) || (!1 === t && e.hasFlag(s.zZ.SUMMARIES_DISABLED))) && f(a.Z.getGuild(e.guild_id), n);
}
function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return !(null == e || c(e.id)) && !!e.features.has(o.oNc.SUMMARIES_ENABLED_GA) && (!t || e.features.has(o.oNc.SUMMARIES_ENABLED_BY_USER));
}
function _(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return d(e, t);
}
function p(e) {
    return (
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        (0, r.e7)(
            [a.Z],
            () => {
                var t;
                return f(a.Z.getGuild(null != (t = null == e ? void 0 : e.id) ? t : o.lds), !1);
            },
            [e]
        )
    );
}
