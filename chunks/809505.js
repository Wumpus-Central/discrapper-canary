n.d(t, { QL: () => d, YS: () => u, vd: () => c, w3: () => a });
var i = n(873298),
    s = n(374994),
    r = n(620216),
    l = n(652215);
n(656402);
var o = n(985018);
function a(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case (0, s.dE)("PRIMARY_400"):
                    return r.t.ACCENT;
                case (0, s.dE)("GREEN_360"):
                    return r.t.GREEN;
                case (0, s.dE)("YELLOW_360"):
                    return r.t.YELLOW;
                case (0, s.dE)("ORANGE_345"):
                    return r.t.ORANGE;
                case (0, s.dE)("RED_400"):
                    return r.t.RED;
                default:
                    return r.t.NONE;
            }
        })(e.color),
        value: e.value,
        disabled: e.disabled,
    }));
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: o.intl.string(o.t.PEzffq),
            desc: e ? o.intl.string(o.t.j9WtHx) : o.intl.string(o.t.nDQy0p),
            value: l.PvD.NONE,
            disabled: e,
        },
        {
            name: o.intl.string(o.t.SsCK8I),
            desc: o.intl.string(o.t["8GCOX6"]),
            value: l.PvD.LOW,
            color: t ? void 0 : (0, s.dE)("GREEN_360"),
        },
        {
            name: o.intl.string(o.t.WwNoR4),
            desc: o.intl.formatToPlainString(o.t.VS14ga, { min: l.$8o.ACCOUNT_AGE }),
            value: l.PvD.MEDIUM,
            color: t ? void 0 : (0, s.dE)("YELLOW_360"),
        },
        {
            name: o.intl.string(o.t.I2jMUF),
            desc: o.intl.formatToPlainString(o.t["r+b3I4"], { min: l.$8o.MEMBER_AGE }),
            value: l.PvD.HIGH,
            color: t ? void 0 : (0, s.dE)("ORANGE_345"),
        },
        {
            name: o.intl.string(o.t.cJY8w9),
            desc: o.intl.string(o.t.PWaKme),
            value: l.PvD.VERY_HIGH,
            color: t ? void 0 : (0, s.dE)("RED_400"),
        },
    ];
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: o.intl.string(o.t.iHuPE6),
            desc: o.intl.string(o.t["Z+yUWF"]),
            value: l.gh6.ALL_MEMBERS,
            color: (0, s.dE)("RED_400"),
        },
        {
            name: o.intl.string(o.t.ynfFaI),
            desc: e ? o.intl.string(o.t.j9WtHx) : o.intl.string(o.t["3fRIN4"]),
            value: l.gh6.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            color: (0, s.dE)("YELLOW_360"),
        },
        {
            name: o.intl.string(o.t.VbSyAx),
            desc: e ? o.intl.string(o.t.j9WtHx) : o.intl.string(o.t.M6GNsJ),
            value: l.gh6.DISABLED,
            disabled: e,
            color: (0, s.dE)("PRIMARY_400"),
        },
    ];
}
function u() {
    return [
        { name: o.intl.string(o.t["4IaoCI"]), desc: o.intl.string(o.t.TgipjE), value: i.he.FRIENDS_AND_NON_FRIENDS },
        { name: o.intl.string(o.t["6NnX6F"]), desc: o.intl.string(o.t["+dw1qu"]), value: i.he.NON_FRIENDS },
        { name: o.intl.string(o.t["1tiAFz"]), desc: o.intl.string(o.t.LKTyeA), value: i.he.DISABLED },
    ];
}
