n.d(i, { XO: () => a, hX: () => o, iI: () => A, i_: () => S });
var e = n(311907),
    r = n(71393),
    E = n(576705),
    s = n(652215);
let l = function (t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.A,
        e = i.getGuild(t);
    return null != e && n.can(s.xBc.MANAGE_GUILD, e);
};
function S(t) {
    return null != t && l(t);
}
function o(t) {
    return l(t);
}
function A(t) {
    return (0, e.bG)([r.A, E.A], () => l(t, r.A, E.A), [t]);
}
function a(t) {
    return (0, e.bG)([r.A], () => {
        let i = r.A.getGuild(t);
        return i?.features.has(s.GuildFeatures.COMMUNITY) || !1;
    }, [t]);
}
