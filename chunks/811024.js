"use strict";
n.d(t, { AX: () => l, Gp: () => c, pE: () => u });
var i = n(478437),
    r = n(17928),
    s = n(734057),
    a = n(576705),
    o = n(818348);
function l(e) {
    var t;
    if (null == e) return !1;
    let n = s.A.getChannel(e.parent_id);
    return (
        (null == n || n?.type === i.r.GUILD_CATEGORY) &&
        ((t = e.type), [i.r.GUILD_TEXT, i.r.GUILD_VOICE, i.r.GROUP_DM, i.r.DM].includes(t))
    );
}
function u(e) {
    return d(e, a.A);
}
function c(e) {
    return (0, r.bG)([s.A, a.A], () => d(s.A.getChannel(e), a.A));
}
function d(e, t) {
    return (
        null != e && void 0 !== e && !!l(e) && (null == e.guild_id || !!t.can(o.xB.USE_EMBEDDED_ACTIVITIES, e)) && !0
    );
}
