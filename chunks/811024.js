"use strict";
n.d(t, { AX: () => l, Gp: () => d, pE: () => u });
var r = n(478437),
    i = n(311907),
    s = n(734057),
    a = n(576705),
    o = n(818348);
function l(e) {
    var t;
    if (null == e) return !1;
    let n = s.A.getChannel(e.parent_id);
    return (
        (null == n || n?.type === r.r.GUILD_CATEGORY) &&
        ((t = e.type), [r.r.GUILD_TEXT, r.r.GUILD_VOICE, r.r.GROUP_DM, r.r.DM].includes(t))
    );
}
function u(e) {
    return c(e, a.A);
}
function d(e) {
    return (0, i.bG)([s.A, a.A], () => c(s.A.getChannel(e), a.A));
}
function c(e, t) {
    return (
        null != e && void 0 !== e && !!l(e) && (null == e.guild_id || !!t.can(o.xB.USE_EMBEDDED_ACTIVITIES, e)) && !0
    );
}
