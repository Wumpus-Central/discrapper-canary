n.d(t, {
    IF: () => c,
    LJ: () => a,
    MF: () => u,
    c7: () => d
});
var r = n(524437),
    i = n(900089),
    l = n(2150),
    s = n(981631);
n(973005);
var o = n(388032);
function a(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case (0, i.Fw)('PRIMARY_400'):
                    return l.q.ACCENT;
                case (0, i.Fw)('GREEN_360'):
                    return l.q.GREEN;
                case (0, i.Fw)('YELLOW_360'):
                    return l.q.YELLOW;
                case (0, i.Fw)('ORANGE_345'):
                    return l.q.ORANGE;
                case (0, i.Fw)('RED_400'):
                    return l.q.RED;
                default:
                    return l.q.NONE;
            }
        })(e.color),
        value: e.value,
        disabled: e.disabled
    }));
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: o.intl.string(o.t.PEzffn),
            desc: o.intl.string(o.t.nDQy0t),
            value: s.sFg.NONE,
            disabled: e,
            tooltipText: e ? o.intl.string(o.t.j9WtHx) : null
        },
        {
            name: o.intl.string(o.t.SsCK8P),
            desc: o.intl.string(o.t['8GCOX1']),
            value: s.sFg.LOW,
            color: t ? void 0 : (0, i.Fw)('GREEN_360')
        },
        {
            name: o.intl.string(o.t.WwNoR0),
            desc: o.intl.formatToPlainString(o.t.VS14gY, { min: s.YeM.ACCOUNT_AGE }),
            value: s.sFg.MEDIUM,
            color: t ? void 0 : (0, i.Fw)('YELLOW_360')
        },
        {
            name: o.intl.string(o.t.I2jMUF),
            desc: o.intl.formatToPlainString(o.t['r+b3Iy'], { min: s.YeM.MEMBER_AGE }),
            value: s.sFg.HIGH,
            color: t ? void 0 : (0, i.Fw)('ORANGE_345')
        },
        {
            name: o.intl.string(o.t.cJY8w8),
            desc: o.intl.string(o.t.PWaKmZ),
            value: s.sFg.VERY_HIGH,
            color: t ? void 0 : (0, i.Fw)('RED_400')
        }
    ];
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: o.intl.string(o.t.iHuPEx),
            desc: o.intl.string(o.t['Z+yUWF']),
            value: s.lxg.ALL_MEMBERS,
            color: (0, i.Fw)('RED_400')
        },
        {
            name: o.intl.string(o.t.ynfFaG),
            desc: o.intl.string(o.t['3fRINz']),
            value: s.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? o.intl.string(o.t.j9WtHx) : null,
            color: (0, i.Fw)('YELLOW_360')
        },
        {
            name: o.intl.string(o.t.VbSyAw),
            desc: o.intl.string(o.t.M6GNsL),
            value: s.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? o.intl.string(o.t.j9WtHx) : null,
            color: (0, i.Fw)('PRIMARY_400')
        }
    ];
}
function d() {
    return [
        {
            name: o.intl.string(o.t['4IaoCA']),
            desc: o.intl.string(o.t.TgipjI),
            value: r.Xr.FRIENDS_AND_NON_FRIENDS,
            color: (0, i.Fw)('GREEN_360')
        },
        {
            name: o.intl.string(o.t['6NnX6O']),
            desc: o.intl.string(o.t['+dw1qq']),
            value: r.Xr.NON_FRIENDS,
            color: (0, i.Fw)('YELLOW_360')
        },
        {
            name: o.intl.string(o.t['1tiAFx']),
            desc: o.intl.string(o.t.LKTyeH),
            value: r.Xr.DISABLED,
            color: (0, i.Fw)('RED_400')
        }
    ];
}
