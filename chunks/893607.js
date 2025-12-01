n.d(t, {
    DH: () => c,
    Hw: () => p,
    Ss: () => u,
    cq: () => d,
}),
    n(35282),
    n(388685);
var r = n(392711),
    i = n(860911),
    a = n(981631),
    o = n(176505);
let s = /^\d+$/,
    l = [a.ME, a.I_8, a.o_z, a.STv];
function c(e) {
    return l.includes(e);
}
function u(e) {
    return null != e && !!(c(e) || s.test(e));
}
function d(e) {
    return !!(null == e || s.test(e) || (0, o.AB)(e));
}
function f(e, t) {
    let { optional: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new i.Zn(
        ":"
            .concat((0, r.escapeRegExp)(e), "(")
            .concat(t, ")")
            .concat(n ? "?" : ""),
    );
}
let p = {
    guildId() {
        let { name: e = "guildId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = l.map(r.escapeRegExp).join("|");
        return f(e, "".concat(n, "|\\d+"), { optional: t });
    },
    channelId() {
        let { name: e = "channelId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [...o.Vg].map(r.escapeRegExp).join("|");
        return f(e, "".concat(n, "|\\d+"), { optional: t });
    },
};
