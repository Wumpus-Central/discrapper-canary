"use strict";
n.d(t, { XO: () => u, hX: () => c, iI: () => d, i_: () => o });
var r = n(311907),
    a = n(71393),
    s = n(576705),
    i = n(652215);
let l = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A,
        r = t.getGuild(e);
    return null != r && n.can(i.xBc.MANAGE_GUILD, r);
};
function o(e) {
    return null != e && l(e);
}
function c(e) {
    return l(e);
}
function d(e) {
    return (0, r.bG)([a.A, s.A], () => l(e, a.A, s.A), [e]);
}
function u(e) {
    return (0, r.bG)([a.A], () => {
        let t = a.A.getGuild(e);
        return t?.features.has(i.GuildFeatures.COMMUNITY) || !1;
    }, [e]);
}
