s.d(t, {
    IF: () => c,
    LJ: () => a,
    MF: () => u,
    c7: () => d
});
var n = s(524437),
    i = s(900089),
    r = s(2150),
    l = s(981631);
s(973005);
var o = s(388032);
function a(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case (0, i.Fw)('PRIMARY_400'):
                    return r.q.ACCENT;
                case (0, i.Fw)('GREEN_360'):
                    return r.q.GREEN;
                case (0, i.Fw)('YELLOW_360'):
                    return r.q.YELLOW;
                case (0, i.Fw)('ORANGE_345'):
                    return r.q.ORANGE;
                case (0, i.Fw)('RED_400'):
                    return r.q.RED;
                default:
                    return r.q.NONE;
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
            value: l.sFg.NONE,
            disabled: e,
            tooltipText: e ? o.intl.string(o.t.j9WtHx) : null
        },
        {
            name: o.intl.string(o.t.SsCK8P),
            desc: o.intl.string(o.t['8GCOX1']),
            value: l.sFg.LOW,
            color: t ? void 0 : (0, i.Fw)('GREEN_360')
        },
        {
            name: o.intl.string(o.t.WwNoR0),
            desc: o.intl.formatToPlainString(o.t.VS14gY, { min: l.YeM.ACCOUNT_AGE }),
            value: l.sFg.MEDIUM,
            color: t ? void 0 : (0, i.Fw)('YELLOW_360')
        },
        {
            name: o.intl.string(o.t.I2jMUF),
            desc: o.intl.formatToPlainString(o.t['r+b3Iy'], { min: l.YeM.MEMBER_AGE }),
            value: l.sFg.HIGH,
            color: t ? void 0 : (0, i.Fw)('ORANGE_345')
        },
        {
            name: o.intl.string(o.t.cJY8w8),
            desc: o.intl.string(o.t.PWaKmZ),
            value: l.sFg.VERY_HIGH,
            color: t ? void 0 : (0, i.Fw)('RED_400')
        }
    ];
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: o.intl.string(o.t.iHuPEx),
            desc: o.intl.string(o.t.dzbET0),
            value: l.lxg.ALL_MEMBERS,
            color: (0, i.Fw)('RED_400')
        },
        {
            name: o.intl.string(o.t.ynfFaG),
            desc: o.intl.string(o.t.qZ1eHh),
            value: l.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? o.intl.string(o.t.j9WtHx) : null,
            color: (0, i.Fw)('YELLOW_360')
        },
        {
            name: o.intl.string(o.t.VbSyAw),
            desc: o.intl.string(o.t.jesz8f),
            value: l.lxg.DISABLED,
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
            value: n.Xr.FRIENDS_AND_NON_FRIENDS,
            color: (0, i.Fw)('GREEN_360')
        },
        {
            name: o.intl.string(o.t['6NnX6O']),
            desc: o.intl.string(o.t['+dw1qq']),
            value: n.Xr.NON_FRIENDS,
            color: (0, i.Fw)('YELLOW_360')
        },
        {
            name: o.intl.string(o.t['1tiAFx']),
            desc: o.intl.string(o.t.LKTyeH),
            value: n.Xr.DISABLED,
            color: (0, i.Fw)('RED_400')
        }
    ];
}
