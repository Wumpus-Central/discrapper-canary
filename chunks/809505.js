"use strict";
n.d(t, { QL: () => h, YS: () => c, vd: () => d, w3: () => o });
var s = n(873298),
    i = n(374994),
    r = n(620216),
    l = n(652215);
n(656402);
var a = n(985018);
function o(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case (0, i.dE)("PRIMARY_400"):
                    return r.t.ACCENT;
                case (0, i.dE)("GREEN_360"):
                    return r.t.GREEN;
                case (0, i.dE)("YELLOW_360"):
                    return r.t.YELLOW;
                case (0, i.dE)("ORANGE_345"):
                    return r.t.ORANGE;
                case (0, i.dE)("RED_400"):
                    return r.t.RED;
                default:
                    return r.t.NONE;
            }
        })(e.color),
        value: e.value,
        disabled: e.disabled,
    }));
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: a.intl.string(a.t.PEzffq),
            desc: e ? a.intl.string(a.t.j9WtHx) : a.intl.string(a.t.nDQy0p),
            value: l.PvD.NONE,
            disabled: e,
        },
        {
            name: a.intl.string(a.t.SsCK8I),
            desc: a.intl.string(a.t["8GCOX6"]),
            value: l.PvD.LOW,
            color: t ? void 0 : (0, i.dE)("GREEN_360"),
        },
        {
            name: a.intl.string(a.t.WwNoR4),
            desc: a.intl.formatToPlainString(a.t.VS14ga, { min: l.$8o.ACCOUNT_AGE }),
            value: l.PvD.MEDIUM,
            color: t ? void 0 : (0, i.dE)("YELLOW_360"),
        },
        {
            name: a.intl.string(a.t.I2jMUF),
            desc: a.intl.formatToPlainString(a.t["r+b3I4"], { min: l.$8o.MEMBER_AGE }),
            value: l.PvD.HIGH,
            color: t ? void 0 : (0, i.dE)("ORANGE_345"),
        },
        {
            name: a.intl.string(a.t.cJY8w9),
            desc: a.intl.string(a.t.PWaKme),
            value: l.PvD.VERY_HIGH,
            color: t ? void 0 : (0, i.dE)("RED_400"),
        },
    ];
}
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: a.intl.string(a.t.iHuPE6),
            desc: a.intl.string(a.t["Z+yUWF"]),
            value: l.gh6.ALL_MEMBERS,
            color: (0, i.dE)("RED_400"),
        },
        {
            name: a.intl.string(a.t.ynfFaI),
            desc: e ? a.intl.string(a.t.j9WtHx) : a.intl.string(a.t["3fRIN4"]),
            value: l.gh6.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            color: (0, i.dE)("YELLOW_360"),
        },
        {
            name: a.intl.string(a.t.VbSyAx),
            desc: e ? a.intl.string(a.t.j9WtHx) : a.intl.string(a.t.M6GNsJ),
            value: l.gh6.DISABLED,
            disabled: e,
            color: (0, i.dE)("PRIMARY_400"),
        },
    ];
}
function c() {
    return [
        { name: a.intl.string(a.t["4IaoCI"]), desc: a.intl.string(a.t.TgipjE), value: s.he.FRIENDS_AND_NON_FRIENDS },
        { name: a.intl.string(a.t["6NnX6F"]), desc: a.intl.string(a.t["+dw1qu"]), value: s.he.NON_FRIENDS },
        { name: a.intl.string(a.t["1tiAFz"]), desc: a.intl.string(a.t.LKTyeA), value: s.he.DISABLED },
    ];
}
