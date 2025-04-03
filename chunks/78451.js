s.d(t, {
    IF: () => c,
    LJ: () => a,
    MF: () => u,
    c7: () => d
});
var r = s(524437),
    n = s(900089),
    i = s(2150),
    o = s(981631);
s(973005);
var l = s(388032);
function a(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case (0, n.Fw)('PRIMARY_400'):
                    return i.q.ACCENT;
                case (0, n.Fw)('GREEN_360'):
                    return i.q.GREEN;
                case (0, n.Fw)('YELLOW_360'):
                    return i.q.YELLOW;
                case (0, n.Fw)('ORANGE_345'):
                    return i.q.ORANGE;
                case (0, n.Fw)('RED_400'):
                    return i.q.RED;
                default:
                    return i.q.NONE;
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
            name: l.NW.string(l.t.PEzffn),
            desc: l.NW.string(l.t.nDQy0t),
            value: o.sFg.NONE,
            disabled: e,
            tooltipText: e ? l.NW.string(l.t.j9WtHx) : null
        },
        {
            name: l.NW.string(l.t.SsCK8P),
            desc: l.NW.string(l.t['8GCOX1']),
            value: o.sFg.LOW,
            color: t ? void 0 : (0, n.Fw)('GREEN_360')
        },
        {
            name: l.NW.string(l.t.WwNoR0),
            desc: l.NW.formatToPlainString(l.t.VS14gY, { min: o.YeM.ACCOUNT_AGE }),
            value: o.sFg.MEDIUM,
            color: t ? void 0 : (0, n.Fw)('YELLOW_360')
        },
        {
            name: l.NW.string(l.t.I2jMUF),
            desc: l.NW.formatToPlainString(l.t['r+b3Iy'], { min: o.YeM.MEMBER_AGE }),
            value: o.sFg.HIGH,
            color: t ? void 0 : (0, n.Fw)('ORANGE_345')
        },
        {
            name: l.NW.string(l.t.cJY8w8),
            desc: l.NW.string(l.t.PWaKmZ),
            value: o.sFg.VERY_HIGH,
            color: t ? void 0 : (0, n.Fw)('RED_400')
        }
    ];
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: l.NW.string(l.t.iHuPEx),
            desc: l.NW.string(l.t.dzbET0),
            value: o.lxg.ALL_MEMBERS,
            color: (0, n.Fw)('RED_400')
        },
        {
            name: l.NW.string(l.t.ynfFaG),
            desc: l.NW.string(l.t.qZ1eHh),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? l.NW.string(l.t.j9WtHx) : null,
            color: (0, n.Fw)('YELLOW_360')
        },
        {
            name: l.NW.string(l.t.VbSyAw),
            desc: l.NW.string(l.t.jesz8f),
            value: o.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? l.NW.string(l.t.j9WtHx) : null,
            color: (0, n.Fw)('PRIMARY_400')
        }
    ];
}
function d() {
    return [
        {
            name: l.NW.string(l.t['4IaoCA']),
            desc: l.NW.string(l.t.TgipjI),
            value: r.Xr.FRIENDS_AND_NON_FRIENDS,
            color: (0, n.Fw)('GREEN_360')
        },
        {
            name: l.NW.string(l.t['6NnX6O']),
            desc: l.NW.string(l.t['+dw1qq']),
            value: r.Xr.NON_FRIENDS,
            color: (0, n.Fw)('YELLOW_360')
        },
        {
            name: l.NW.string(l.t['1tiAFx']),
            desc: l.NW.string(l.t.LKTyeH),
            value: r.Xr.DISABLED,
            color: (0, n.Fw)('RED_400')
        }
    ];
}
