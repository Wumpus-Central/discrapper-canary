n.d(t, { H: () => c }), n(388685);
var r = n(370055),
    i = n.n(r),
    a = n(860911),
    o = n(416145),
    s = n(176505);
function l(e, t) {
    let { optional: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new a.Zn(
        ":"
            .concat(i()(e), "(")
            .concat(t, ")")
            .concat(n ? "?" : ""),
    );
}
let c = {
    guildId() {
        let { name: e = "guildId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = o.Ze.map(i()).join("|");
        return l(e, "".concat(n, "|\\d+"), { optional: t });
    },
    channelId() {
        let { name: e = "channelId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [...s.Vg].map(i()).join("|");
        return l(e, "".concat(n, "|\\d+"), { optional: t });
    },
};
