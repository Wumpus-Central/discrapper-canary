n.d(t, {
    IF: () => u,
    LJ: () => c,
    MF: () => d,
    c7: () => f
});
var r = n(524437),
    i = n(900089),
    s = n(470734),
    o = n(2150),
    l = n(981631);
n(973005);
var a = n(388032);
function c(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case (0, i.Fw)('PRIMARY_400'):
                    return o.q.ACCENT;
                case (0, i.Fw)('GREEN_360'):
                    return o.q.GREEN;
                case (0, i.Fw)('YELLOW_360'):
                    return o.q.YELLOW;
                case (0, i.Fw)('ORANGE_345'):
                    return o.q.ORANGE;
                case (0, i.Fw)('RED_400'):
                    return o.q.RED;
                default:
                    return o.q.NONE;
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
            value: l.sFg.NONE,
            disabled: e,
            tooltipText: e ? a.intl.string(a.t.j9WtHx) : null
        },
        {
            name: a.intl.string(a.t.SsCK8P),
            desc: a.intl.string(a.t['8GCOX1']),
            value: l.sFg.LOW,
            color: t ? void 0 : (0, i.Fw)('GREEN_360')
        },
        {
            name: a.intl.string(a.t.WwNoR0),
            desc: a.intl.formatToPlainString(a.t.VS14gY, { min: l.YeM.ACCOUNT_AGE }),
            value: l.sFg.MEDIUM,
            color: t ? void 0 : (0, i.Fw)('YELLOW_360')
        },
        {
            name: a.intl.string(a.t.I2jMUF),
            desc: a.intl.formatToPlainString(a.t['r+b3Iy'], { min: l.YeM.MEMBER_AGE }),
            value: l.sFg.HIGH,
            color: t ? void 0 : (0, i.Fw)('ORANGE_345')
        },
        {
            name: a.intl.string(a.t.cJY8w8),
            desc: a.intl.string(a.t.PWaKmZ),
            value: l.sFg.VERY_HIGH,
            color: t ? void 0 : (0, i.Fw)('RED_400')
        }
    ];
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, s.U2)('generateContentFilterHighlightedOptions');
    return [
        {
            name: a.intl.string(a.t.iHuPEx),
            desc: t ? a.intl.string(a.t['Z+yUWF']) : a.intl.string(a.t.dzbET0),
            value: l.lxg.ALL_MEMBERS,
            color: (0, i.Fw)('RED_400')
        },
        {
            name: a.intl.string(a.t.ynfFaG),
            desc: t ? a.intl.string(a.t['3fRINz']) : a.intl.string(a.t.qZ1eHh),
            value: l.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? a.intl.string(a.t.j9WtHx) : null,
            color: (0, i.Fw)('YELLOW_360')
        },
        {
            name: a.intl.string(a.t.VbSyAw),
            desc: t ? a.intl.string(a.t.M6GNsL) : a.intl.string(a.t.jesz8f),
            value: l.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? a.intl.string(a.t.j9WtHx) : null,
            color: (0, i.Fw)('PRIMARY_400')
        }
    ];
}
function f() {
    return [
        {
            name: a.intl.string(a.t['4IaoCA']),
            desc: a.intl.string(a.t.TgipjI),
            value: r.Xr.FRIENDS_AND_NON_FRIENDS,
            color: (0, i.Fw)('GREEN_360')
        },
        {
            name: a.intl.string(a.t['6NnX6O']),
            desc: a.intl.string(a.t['+dw1qq']),
            value: r.Xr.NON_FRIENDS,
            color: (0, i.Fw)('YELLOW_360')
        },
        {
            name: a.intl.string(a.t['1tiAFx']),
            desc: a.intl.string(a.t.LKTyeH),
            value: r.Xr.DISABLED,
            color: (0, i.Fw)('RED_400')
        }
    ];
}
