"use strict";
n.d(t, { XO: () => d, hX: () => o, iI: () => u, i_: () => c });
var i = n(311907),
    r = n(71393),
    s = n(576705),
    l = n(652215);
let a = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A,
        i = t.getGuild(e);
    return null != i && n.can(l.xBc.MANAGE_GUILD, i);
};
function c(e) {
    return null != e && a(e);
}
function o(e) {
    return a(e);
}
function u(e) {
    return (0, i.bG)([r.A, s.A], () => a(e, r.A, s.A), [e]);
}
function d(e) {
    return (0, i.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return t?.features.has(l.GuildFeatures.COMMUNITY) || !1;
    }, [e]);
}
