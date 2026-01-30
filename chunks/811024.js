n.d(t, {
    AX: () => c,
    Gp: () => d,
    pE: () => u,
});
var r = n(478437),
    i = n(311907),
    a = n(734057),
    o = n(576705),
    s = n(818348);

function l(e) {
    return [r.r.GUILD_TEXT, r.r.GUILD_VOICE, r.r.GROUP_DM, r.r.DM].includes(e);
}

function c(e) {
    if (null == e) return !1;
    let t = a.A.getChannel(e.parent_id);
    return (null == t || (null == t ? void 0 : t.type) === r.r.GUILD_CATEGORY) && l(e.type);
}

function u(e) {
    return f(e, o.A);
}

function d(e) {
    return (0, i.bG)([a.A, o.A], () => f(a.A.getChannel(e), o.A));
}

function f(e, t) {
    return (
        null != e && void 0 !== e && !!c(e) && (null == e.guild_id || !!t.can(s.xB.USE_EMBEDDED_ACTIVITIES, e)) && !0
    );
}
