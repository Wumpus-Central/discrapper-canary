n.d(t, {
    IF: () => u,
    LJ: () => c,
    MF: () => d,
    c7: () => f
});
var r = n(524437),
    s = n(900089),
    i = n(470734),
    l = n(2150),
    o = n(981631);
n(973005);
var a = n(388032);
function c(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case (0, s.Fw)('PRIMARY_400'):
                    return l.q.ACCENT;
                case (0, s.Fw)('GREEN_360'):
                    return l.q.GREEN;
                case (0, s.Fw)('YELLOW_360'):
                    return l.q.YELLOW;
                case (0, s.Fw)('ORANGE_345'):
                    return l.q.ORANGE;
                case (0, s.Fw)('RED_400'):
                    return l.q.RED;
                default:
                    return l.q.NONE;
            }
        })(e.color),
        value: e.value,
        disabled: e.disabled
    }));
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: a.intl.string(a.t.PEzffn),
            desc: a.intl.string(a.t.nDQy0t),
            value: o.sFg.NONE,
            disabled: e,
            tooltipText: e ? a.intl.string(a.t.j9WtHx) : null
        },
        {
            name: a.intl.string(a.t.SsCK8P),
            desc: a.intl.string(a.t['8GCOX1']),
            value: o.sFg.LOW,
            color: t ? void 0 : (0, s.Fw)('GREEN_360')
        },
        {
            name: a.intl.string(a.t.WwNoR0),
            desc: a.intl.formatToPlainString(a.t.VS14gY, { min: o.YeM.ACCOUNT_AGE }),
            value: o.sFg.MEDIUM,
            color: t ? void 0 : (0, s.Fw)('YELLOW_360')
        },
        {
            name: a.intl.string(a.t.I2jMUF),
            desc: a.intl.formatToPlainString(a.t['r+b3Iy'], { min: o.YeM.MEMBER_AGE }),
            value: o.sFg.HIGH,
            color: t ? void 0 : (0, s.Fw)('ORANGE_345')
        },
        {
            name: a.intl.string(a.t.cJY8w8),
            desc: a.intl.string(a.t.PWaKmZ),
            value: o.sFg.VERY_HIGH,
            color: t ? void 0 : (0, s.Fw)('RED_400')
        }
    ];
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.U2)('generateContentFilterHighlightedOptions');
    return [
        {
            name: a.intl.string(a.t.iHuPEx),
            desc: t ? a.intl.string(a.t['Z+yUWF']) : a.intl.string(a.t.dzbET0),
            value: o.lxg.ALL_MEMBERS,
            color: (0, s.Fw)('RED_400')
        },
        {
            name: a.intl.string(a.t.ynfFaG),
            desc: t ? a.intl.string(a.t['3fRINz']) : a.intl.string(a.t.qZ1eHh),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? a.intl.string(a.t.j9WtHx) : null,
            color: (0, s.Fw)('YELLOW_360')
        },
        {
            name: a.intl.string(a.t.VbSyAw),
            desc: t ? a.intl.string(a.t.M6GNsL) : a.intl.string(a.t.jesz8f),
            value: o.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? a.intl.string(a.t.j9WtHx) : null,
            color: (0, s.Fw)('PRIMARY_400')
        }
    ];
}
function f() {
    return [
        {
            name: a.intl.string(a.t['4IaoCA']),
            desc: a.intl.string(a.t.TgipjI),
            value: r.Xr.FRIENDS_AND_NON_FRIENDS,
            color: (0, s.Fw)('GREEN_360')
        },
        {
            name: a.intl.string(a.t['6NnX6O']),
            desc: a.intl.string(a.t['+dw1qq']),
            value: r.Xr.NON_FRIENDS,
            color: (0, s.Fw)('YELLOW_360')
        },
        {
            name: a.intl.string(a.t['1tiAFx']),
            desc: a.intl.string(a.t.LKTyeH),
            value: r.Xr.DISABLED,
            color: (0, s.Fw)('RED_400')
        }
    ];
}
