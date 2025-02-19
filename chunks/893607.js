n.d(t, {
    Hw: () => d,
    Ss: () => l,
    cq: () => c
}),
    n(301563),
    n(47120);
var r = n(392711),
    i = n(860911),
    o = n(981631),
    a = n(176505);
let s = /^\d+$/;
function l(e) {
    return null != e && !!(e === o.ME || e === o.I_8 || e === o.o_z || s.test(e));
}
function c(e) {
    return !!(null == e || s.test(e) || (0, a.AB)(e));
}
function u(e, t) {
    let { optional: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new i.Zn(
        ':'
            .concat((0, r.escapeRegExp)(e), '(')
            .concat(t, ')')
            .concat(n ? '?' : '')
    );
}
let d = {
    guildId() {
        let { name: e = 'guildId', optional: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [o.ME, o.I_8, o.o_z].map(r.escapeRegExp).join('|');
        return u(e, ''.concat(n, '|\\d+'), { optional: t });
    },
    channelId() {
        let { name: e = 'channelId', optional: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [...a.Vg].map(r.escapeRegExp).join('|');
        return u(e, ''.concat(n, '|\\d+'), { optional: t });
    }
};
