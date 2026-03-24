"use strict";
a.d(t, { XO: () => d, hX: () => _, iI: () => c, i_: () => o });
var n = a(311907),
    i = a(71393),
    r = a(576705),
    s = a(652215);
let l = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A,
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A,
        n = t.getGuild(e);
    return null != n && a.can(s.xBc.MANAGE_GUILD, n);
};
function o(e) {
    return null != e && l(e);
}
function _(e) {
    return l(e);
}
function c(e) {
    return (0, n.bG)([i.A, r.A], () => l(e, i.A, r.A), [e]);
}
function d(e) {
    return (0, n.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return t?.features.has(s.GuildFeatures.COMMUNITY) || !1;
    }, [e]);
}
