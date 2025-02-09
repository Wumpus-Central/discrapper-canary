e.d(n, {
    IF: () => c,
    LJ: () => s,
    MF: () => d,
    c7: () => u
});
var i = e(524437),
    r = e(900089),
    a = e(2150),
    l = e(981631);
e(973005);
var o = e(388032);
function s(t) {
    return t.map((t) => ({
        title: t.name,
        description: t.desc,
        highlightColor: (function (t) {
            switch (t) {
                case (0, r.Fw)('PRIMARY_400'):
                    return a.q.ACCENT;
                case (0, r.Fw)('GREEN_360'):
                    return a.q.GREEN;
                case (0, r.Fw)('YELLOW_360'):
                    return a.q.YELLOW;
                case (0, r.Fw)('ORANGE_345'):
                    return a.q.ORANGE;
                case (0, r.Fw)('RED_400'):
                    return a.q.RED;
                default:
                    return a.q.NONE;
            }
        })(t.color),
        value: t.value,
        disabled: t.disabled
    }));
}
function c() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: o.intl.string(o.t.PEzffn),
            desc: o.intl.string(o.t.nDQy0t),
            value: l.sFg.NONE,
            disabled: t,
            tooltipText: t ? o.intl.string(o.t.j9WtHx) : null
        },
        {
            name: o.intl.string(o.t.SsCK8P),
            desc: o.intl.string(o.t['8GCOX1']),
            value: l.sFg.LOW,
            color: n ? void 0 : (0, r.Fw)('GREEN_360')
        },
        {
            name: o.intl.string(o.t.WwNoR0),
            desc: o.intl.formatToPlainString(o.t.VS14gY, { min: l.YeM.ACCOUNT_AGE }),
            value: l.sFg.MEDIUM,
            color: n ? void 0 : (0, r.Fw)('YELLOW_360')
        },
        {
            name: o.intl.string(o.t.I2jMUF),
            desc: o.intl.formatToPlainString(o.t['r+b3Iy'], { min: l.YeM.MEMBER_AGE }),
            value: l.sFg.HIGH,
            color: n ? void 0 : (0, r.Fw)('ORANGE_345')
        },
        {
            name: o.intl.string(o.t.cJY8w8),
            desc: o.intl.string(o.t.PWaKmZ),
            value: l.sFg.VERY_HIGH,
            color: n ? void 0 : (0, r.Fw)('RED_400')
        }
    ];
}
function d() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: o.intl.string(o.t.iHuPEx),
            desc: o.intl.string(o.t.dzbET0),
            value: l.lxg.ALL_MEMBERS,
            color: (0, r.Fw)('RED_400')
        },
        {
            name: o.intl.string(o.t.ynfFaG),
            desc: o.intl.string(o.t.qZ1eHh),
            value: l.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: t,
            tooltipText: t ? o.intl.string(o.t.j9WtHx) : null,
            color: (0, r.Fw)('YELLOW_360')
        },
        {
            name: o.intl.string(o.t.VbSyAw),
            desc: o.intl.string(o.t.jesz8f),
            value: l.lxg.DISABLED,
            disabled: t,
            tooltipText: t ? o.intl.string(o.t.j9WtHx) : null,
            color: (0, r.Fw)('PRIMARY_400')
        }
    ];
}
function u() {
    return [
        {
            name: o.intl.string(o.t['4IaoCA']),
            desc: o.intl.string(o.t.TgipjI),
            value: i.Xr.FRIENDS_AND_NON_FRIENDS,
            color: (0, r.Fw)('GREEN_360')
        },
        {
            name: o.intl.string(o.t['6NnX6O']),
            desc: o.intl.string(o.t['+dw1qq']),
            value: i.Xr.NON_FRIENDS,
            color: (0, r.Fw)('YELLOW_360')
        },
        {
            name: o.intl.string(o.t['1tiAFx']),
            desc: o.intl.string(o.t.LKTyeH),
            value: i.Xr.DISABLED,
            color: (0, r.Fw)('RED_400')
        }
    ];
}
