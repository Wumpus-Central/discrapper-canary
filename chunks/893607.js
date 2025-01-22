r.d(n, {
    Hw: function () {
        return p;
    },
    Ss: function () {
        return c;
    },
    cq: function () {
        return d;
    }
});
var i = r(47120);
var a = r(392711);
var o = r(860911),
    s = r(981631),
    l = r(176505);
let u = /^\d+$/;
function c(e) {
    return null != e && (!!(e === s.ME || e === s.I_8 || e === s.o_z || u.test(e)) || !1);
}
function d(e) {
    return !!(null == e || u.test(e) || (0, l.AB)(e)) || !1;
}
function f(e, n) {
    let { optional: r = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new o.Zn(
        ':'
            .concat((0, a.escapeRegExp)(e), '(')
            .concat(n, ')')
            .concat(r ? '?' : '')
    );
}
let p = {
    guildId() {
        let { name: e = 'guildId', optional: n = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = [s.ME, s.I_8, s.o_z].map(a.escapeRegExp).join('|');
        return f(e, ''.concat(r, '|\\d+'), { optional: n });
    },
    channelId() {
        let { name: e = 'channelId', optional: n = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = [...l.Vg].map(a.escapeRegExp).join('|');
        return f(e, ''.concat(r, '|\\d+'), { optional: n });
    }
};
