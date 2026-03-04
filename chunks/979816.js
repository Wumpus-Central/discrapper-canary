"use strict";
a.d(t, { XO: () => d, hX: () => c, iI: () => _, i_: () => o });
var n = a(311907),
    r = a(71393),
    i = a(576705),
    s = a(652215);
let l = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        n = t.getGuild(e);
    return null != n && a.can(s.xBc.MANAGE_GUILD, n);
};
function o(e) {
    return null != e && l(e);
}
function c(e) {
    return l(e);
}
function _(e) {
    return (0, n.bG)([r.A, i.A], () => l(e, r.A, i.A), [e]);
}
function d(e) {
    return (0, n.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return t?.features.has(s.GuildFeatures.COMMUNITY) || !1;
    }, [e]);
}
