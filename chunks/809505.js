i.d(n, { QL: () => a, vd: () => E, w3: () => d }), i(873298);
var e = i(374994),
    r = i(620216),
    l = i(652215);
i(750714);
var s = i(375708);
function d(t) {
    return t.map((t) => ({
        title: t.name,
        description: t.desc,
        highlightColor: (function (t) {
            switch (t) {
                case (0, e.dE)("PRIMARY_400"):
                    return r.t.ACCENT;
                case (0, e.dE)("GREEN_360"):
                    return r.t.GREEN;
                case (0, e.dE)("YELLOW_360"):
                    return r.t.YELLOW;
                case (0, e.dE)("ORANGE_345"):
                    return r.t.ORANGE;
                case (0, e.dE)("RED_400"):
                    return r.t.RED;
                default:
                    return r.t.NONE;
            }
        })(t.color),
        value: t.value,
        disabled: t.disabled,
    }));
}
function E() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: s.intl.string(s.t.PEzffq),
            desc: t ? s.intl.string(s.t.j9WtHx) : s.intl.string(s.t.nDQy0p),
            value: l.PvD.NONE,
            disabled: t,
        },
        {
            name: s.intl.string(s.t.SsCK8I),
            desc: s.intl.string(s.t["8GCOX6"]),
            value: l.PvD.LOW,
            color: n ? void 0 : (0, e.dE)("GREEN_360"),
        },
        {
            name: s.intl.string(s.t.WwNoR4),
            desc: s.intl.formatToPlainString(s.t.VS14ga, { min: l.$8o.ACCOUNT_AGE }),
            value: l.PvD.MEDIUM,
            color: n ? void 0 : (0, e.dE)("YELLOW_360"),
        },
        {
            name: s.intl.string(s.t.I2jMUF),
            desc: s.intl.formatToPlainString(s.t["r+b3I4"], { min: l.$8o.MEMBER_AGE }),
            value: l.PvD.HIGH,
            color: n ? void 0 : (0, e.dE)("ORANGE_345"),
        },
        {
            name: s.intl.string(s.t.cJY8w9),
            desc: s.intl.string(s.t.PWaKme),
            value: l.PvD.VERY_HIGH,
            color: n ? void 0 : (0, e.dE)("RED_400"),
        },
    ];
}
function a() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: s.intl.string(s.t.iHuPE6),
            desc: s.intl.string(s.t["Z+yUWF"]),
            value: l.gh6.ALL_MEMBERS,
            color: (0, e.dE)("RED_400"),
        },
        {
            name: s.intl.string(s.t.ynfFaI),
            desc: t ? s.intl.string(s.t.j9WtHx) : s.intl.string(s.t["3fRIN4"]),
            value: l.gh6.MEMBERS_WITHOUT_ROLES,
            disabled: t,
            color: (0, e.dE)("YELLOW_360"),
        },
        {
            name: s.intl.string(s.t.VbSyAx),
            desc: t ? s.intl.string(s.t.j9WtHx) : s.intl.string(s.t.M6GNsJ),
            value: l.gh6.DISABLED,
            disabled: t,
            color: (0, e.dE)("PRIMARY_400"),
        },
    ];
}
