n.d(t, {
    IF: () => u,
    LJ: () => c,
    MF: () => d,
    c7: () => p
});
var r = n(524437),
    i = n(900089),
    s = n(470734),
    o = n(2150),
    a = n(981631);
n(973005);
var l = n(388032);
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
            name: l.intl.string(l.t.PEzffn),
            desc: l.intl.string(l.t.nDQy0t),
            value: a.sFg.NONE,
            disabled: e,
            tooltipText: e ? l.intl.string(l.t.j9WtHx) : null
        },
        {
            name: l.intl.string(l.t.SsCK8P),
            desc: l.intl.string(l.t['8GCOX1']),
            value: a.sFg.LOW,
            color: t ? void 0 : (0, i.Fw)('GREEN_360')
        },
        {
            name: l.intl.string(l.t.WwNoR0),
            desc: l.intl.formatToPlainString(l.t.VS14gY, { min: a.YeM.ACCOUNT_AGE }),
            value: a.sFg.MEDIUM,
            color: t ? void 0 : (0, i.Fw)('YELLOW_360')
        },
        {
            name: l.intl.string(l.t.I2jMUF),
            desc: l.intl.formatToPlainString(l.t['r+b3Iy'], { min: a.YeM.MEMBER_AGE }),
            value: a.sFg.HIGH,
            color: t ? void 0 : (0, i.Fw)('ORANGE_345')
        },
        {
            name: l.intl.string(l.t.cJY8w8),
            desc: l.intl.string(l.t.PWaKmZ),
            value: a.sFg.VERY_HIGH,
            color: t ? void 0 : (0, i.Fw)('RED_400')
        }
    ];
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, s.U2)('generateContentFilterHighlightedOptions');
    return [
        {
            name: l.intl.string(l.t.iHuPEx),
            desc: t ? l.intl.string(l.t['Z+yUWF']) : l.intl.string(l.t.dzbET0),
            value: a.lxg.ALL_MEMBERS,
            color: (0, i.Fw)('RED_400')
        },
        {
            name: l.intl.string(l.t.ynfFaG),
            desc: t ? l.intl.string(l.t['3fRINz']) : l.intl.string(l.t.qZ1eHh),
            value: a.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? l.intl.string(l.t.j9WtHx) : null,
            color: (0, i.Fw)('YELLOW_360')
        },
        {
            name: l.intl.string(l.t.VbSyAw),
            desc: t ? l.intl.string(l.t.M6GNsL) : l.intl.string(l.t.jesz8f),
            value: a.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? l.intl.string(l.t.j9WtHx) : null,
            color: (0, i.Fw)('PRIMARY_400')
        }
    ];
}
function p() {
    return [
        {
            name: l.intl.string(l.t['4IaoCA']),
            desc: l.intl.string(l.t.TgipjI),
            value: r.Xr.FRIENDS_AND_NON_FRIENDS,
            color: (0, i.Fw)('GREEN_360')
        },
        {
            name: l.intl.string(l.t['6NnX6O']),
            desc: l.intl.string(l.t['+dw1qq']),
            value: r.Xr.NON_FRIENDS,
            color: (0, i.Fw)('YELLOW_360')
        },
        {
            name: l.intl.string(l.t['1tiAFx']),
            desc: l.intl.string(l.t.LKTyeH),
            value: r.Xr.DISABLED,
            color: (0, i.Fw)('RED_400')
        }
    ];
}
