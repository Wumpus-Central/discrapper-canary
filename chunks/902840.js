n.d(t, {
    Jc: () => c,
    Lp: () => u,
    tW: () => l,
    ts: () => d
}),
    n(399606);
var i = n(430824),
    r = n(981631),
    a = n(176505);
function s(e) {
    var t;
    if (null == e) return !1;
    let n = i.Z.getGuild(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : ''),
        a = null != n && n.rulesChannelId === e.id;
    return r.TPd.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !a;
}
function o(e) {
    return null != e && (e === r.ME || e === r.I_8);
}
function l(e) {
    return u(e, !0, !1);
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return !(null == e || !s(e) || (!1 === t && e.hasFlag(a.zZ.SUMMARIES_DISABLED))) && c(i.Z.getGuild(e.guild_id), n);
}
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return !(null == e || o(e.id)) && !!e.hasFeature(r.oNc.SUMMARIES_ENABLED_GA) && (!t || e.hasFeature(r.oNc.SUMMARIES_ENABLED_BY_USER));
}
function d(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return u(e, t);
}
