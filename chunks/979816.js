"use strict";
l.d(t, { XO: () => u, hX: () => d, iI: () => c, i_: () => o });
var n = l(17928),
    i = l(71393),
    s = l(576705),
    a = l(652215);
let r = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A,
        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A,
        n = t.getGuild(e);
    return null != n && l.can(a.xBc.MANAGE_GUILD, n);
};
function o(e) {
    return null != e && r(e);
}
function d(e) {
    return r(e);
}
function c(e) {
    return (0, n.bG)([i.A, s.A], () => r(e, i.A, s.A), [e]);
}
function u(e) {
    return (0, n.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return t?.features.has(a.GuildFeatures.COMMUNITY) || !1;
    }, [e]);
}
