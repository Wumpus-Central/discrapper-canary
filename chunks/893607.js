n.d(t, {
    Hw: () => d,
    Ss: () => l,
    cq: () => u
}),
    n(47120);
var i = n(392711),
    r = n(860911),
    a = n(981631),
    s = n(176505);
let o = /^\d+$/;
function l(e) {
    return null != e && !!(e === a.ME || e === a.I_8 || e === a.o_z || o.test(e));
}
function u(e) {
    return !!(null == e || o.test(e) || (0, s.AB)(e));
}
function c(e, t) {
    let { optional: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new r.Zn(
        ':'
            .concat((0, i.escapeRegExp)(e), '(')
            .concat(t, ')')
            .concat(n ? '?' : '')
    );
}
let d = {
    guildId() {
        let { name: e = 'guildId', optional: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [a.ME, a.I_8, a.o_z].map(i.escapeRegExp).join('|');
        return c(e, ''.concat(n, '|\\d+'), { optional: t });
    },
    channelId() {
        let { name: e = 'channelId', optional: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [...s.Vg].map(i.escapeRegExp).join('|');
        return c(e, ''.concat(n, '|\\d+'), { optional: t });
    }
};
