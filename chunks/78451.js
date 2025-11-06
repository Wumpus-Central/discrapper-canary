n.d(t, {
    IF: () => u,
    LJ: () => c,
    MF: () => d,
    c7: () => f,
});
var r = n(524437),
    i = n(900089),
    a = n(137510),
    o = n(981631);
n(973005);
var s = n(388032);
function l(e) {
    switch (e) {
        case (0, i.Fw)("PRIMARY_400"):
            return a.q.ACCENT;
        case (0, i.Fw)("GREEN_360"):
            return a.q.GREEN;
        case (0, i.Fw)("YELLOW_360"):
            return a.q.YELLOW;
        case (0, i.Fw)("ORANGE_345"):
            return a.q.ORANGE;
        case (0, i.Fw)("RED_400"):
            return a.q.RED;
        default:
            return a.q.NONE;
    }
}
function c(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: l(e.color),
        value: e.value,
        disabled: e.disabled,
    }));
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: s.intl.string(s.t.PEzffq),
            desc: e ? s.intl.string(s.t.j9WtHx) : s.intl.string(s.t.nDQy0p),
            value: o.sFg.NONE,
            disabled: e,
        },
        {
            name: s.intl.string(s.t.SsCK8I),
            desc: s.intl.string(s.t["8GCOX6"]),
            value: o.sFg.LOW,
            color: t ? void 0 : (0, i.Fw)("GREEN_360"),
        },
        {
            name: s.intl.string(s.t.WwNoR4),
            desc: s.intl.formatToPlainString(s.t.VS14ga, { min: o.YeM.ACCOUNT_AGE }),
            value: o.sFg.MEDIUM,
            color: t ? void 0 : (0, i.Fw)("YELLOW_360"),
        },
        {
            name: s.intl.string(s.t.I2jMUF),
            desc: s.intl.formatToPlainString(s.t["r+b3I4"], { min: o.YeM.MEMBER_AGE }),
            value: o.sFg.HIGH,
            color: t ? void 0 : (0, i.Fw)("ORANGE_345"),
        },
        {
            name: s.intl.string(s.t.cJY8w9),
            desc: s.intl.string(s.t.PWaKme),
            value: o.sFg.VERY_HIGH,
            color: t ? void 0 : (0, i.Fw)("RED_400"),
        },
    ];
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: s.intl.string(s.t.iHuPE6),
            desc: s.intl.string(s.t["Z+yUWF"]),
            value: o.lxg.ALL_MEMBERS,
            color: (0, i.Fw)("RED_400"),
        },
        {
            name: s.intl.string(s.t.ynfFaI),
            desc: e ? s.intl.string(s.t.j9WtHx) : s.intl.string(s.t["3fRIN4"]),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            color: (0, i.Fw)("YELLOW_360"),
        },
        {
            name: s.intl.string(s.t.VbSyAx),
            desc: e ? s.intl.string(s.t.j9WtHx) : s.intl.string(s.t.M6GNsJ),
            value: o.lxg.DISABLED,
            disabled: e,
            color: (0, i.Fw)("PRIMARY_400"),
        },
    ];
}
function f() {
    return [
        {
            name: s.intl.string(s.t["4IaoCI"]),
            desc: s.intl.string(s.t.TgipjE),
            value: r.Xr.FRIENDS_AND_NON_FRIENDS,
        },
        {
            name: s.intl.string(s.t["6NnX6F"]),
            desc: s.intl.string(s.t["+dw1qu"]),
            value: r.Xr.NON_FRIENDS,
        },
        {
            name: s.intl.string(s.t["1tiAFz"]),
            desc: s.intl.string(s.t.LKTyeA),
            value: r.Xr.DISABLED,
        },
    ];
}
