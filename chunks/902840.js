r.d(n, {
    Jc: function () {
        return d;
    },
    Lp: function () {
        return c;
    },
    tW: function () {
        return u;
    },
    ts: function () {
        return f;
    }
}),
    r(399606);
var i = r(430824),
    a = r(981631),
    o = r(176505);
function s(e) {
    var n;
    if (null == e) return !1;
    let r = i.Z.getGuild(null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : ''),
        o = null != r && r.rulesChannelId === e.id;
    return a.TPd.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !o;
}
function l(e) {
    return null != e && (e === a.ME || e === a.I_8);
}
function u(e) {
    return c(e, !0, !1);
}
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return !(null == e || !s(e) || (!1 === n && e.hasFlag(o.zZ.SUMMARIES_DISABLED))) && d(i.Z.getGuild(e.guild_id), r);
}
function d(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return !(null == e || l(e.id)) && !!e.hasFeature(a.oNc.SUMMARIES_ENABLED_GA) && (!n || e.hasFeature(a.oNc.SUMMARIES_ENABLED_BY_USER));
}
function f(e) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return c(e, n);
}
