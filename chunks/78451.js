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
            name: s.intl.string(s.t.PEzffn),
            desc: s.intl.string(s.t.nDQy0t),
            value: o.sFg.NONE,
            disabled: e,
            tooltipText: e ? s.intl.string(s.t.j9WtHx) : null,
        },
        {
            name: s.intl.string(s.t.SsCK8P),
            desc: s.intl.string(s.t["8GCOX1"]),
            value: o.sFg.LOW,
            color: t ? void 0 : (0, i.Fw)("GREEN_360"),
        },
        {
            name: s.intl.string(s.t.WwNoR0),
            desc: s.intl.formatToPlainString(s.t.VS14gY, { min: o.YeM.ACCOUNT_AGE }),
            value: o.sFg.MEDIUM,
            color: t ? void 0 : (0, i.Fw)("YELLOW_360"),
        },
        {
            name: s.intl.string(s.t.I2jMUF),
            desc: s.intl.formatToPlainString(s.t["r+b3Iy"], { min: o.YeM.MEMBER_AGE }),
            value: o.sFg.HIGH,
            color: t ? void 0 : (0, i.Fw)("ORANGE_345"),
        },
        {
            name: s.intl.string(s.t.cJY8w8),
            desc: s.intl.string(s.t.PWaKmZ),
            value: o.sFg.VERY_HIGH,
            color: t ? void 0 : (0, i.Fw)("RED_400"),
        },
    ];
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: s.intl.string(s.t.iHuPEx),
            desc: s.intl.string(s.t["Z+yUWF"]),
            value: o.lxg.ALL_MEMBERS,
            color: (0, i.Fw)("RED_400"),
        },
        {
            name: s.intl.string(s.t.ynfFaG),
            desc: s.intl.string(s.t["3fRINz"]),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? s.intl.string(s.t.j9WtHx) : null,
            color: (0, i.Fw)("YELLOW_360"),
        },
        {
            name: s.intl.string(s.t.VbSyAw),
            desc: s.intl.string(s.t.M6GNsL),
            value: o.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? s.intl.string(s.t.j9WtHx) : null,
            color: (0, i.Fw)("PRIMARY_400"),
        },
    ];
}
function f() {
    return [
        {
            name: s.intl.string(s.t["4IaoCA"]),
            desc: s.intl.string(s.t.TgipjI),
            value: r.Xr.FRIENDS_AND_NON_FRIENDS,
            color: (0, i.Fw)("GREEN_360"),
        },
        {
            name: s.intl.string(s.t["6NnX6O"]),
            desc: s.intl.string(s.t["+dw1qq"]),
            value: r.Xr.NON_FRIENDS,
            color: (0, i.Fw)("YELLOW_360"),
        },
        {
            name: s.intl.string(s.t["1tiAFx"]),
            desc: s.intl.string(s.t.LKTyeH),
            value: r.Xr.DISABLED,
            color: (0, i.Fw)("RED_400"),
        },
    ];
}
