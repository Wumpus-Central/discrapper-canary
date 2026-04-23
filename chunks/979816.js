"use strict";
n.d(t, { XO: () => d, hX: () => c, iI: () => u, i_: () => o });
var i = n(311907),
    r = n(71393),
    l = n(576705),
    s = n(652215);
let a = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.A,
        i = t.getGuild(e);
    return null != i && n.can(s.xBc.MANAGE_GUILD, i);
};
function o(e) {
    return null != e && a(e);
}
function c(e) {
    return a(e);
}
function u(e) {
    return (0, i.bG)([r.A, l.A], () => a(e, r.A, l.A), [e]);
}
function d(e) {
    return (0, i.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return t?.features.has(s.GuildFeatures.COMMUNITY) || !1;
    }, [e]);
}
