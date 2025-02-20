n.d(t, {
    IF: () => l,
    LJ: () => a,
    MF: () => u,
    c7: () => d
});
var s = n(524437),
    r = n(900089),
    i = n(2150),
    o = n(981631);
n(973005);
var c = n(388032);
function a(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case (0, r.Fw)('PRIMARY_400'):
                    return i.q.ACCENT;
                case (0, r.Fw)('GREEN_360'):
                    return i.q.GREEN;
                case (0, r.Fw)('YELLOW_360'):
                    return i.q.YELLOW;
                case (0, r.Fw)('ORANGE_345'):
                    return i.q.ORANGE;
                case (0, r.Fw)('RED_400'):
                    return i.q.RED;
                default:
                    return i.q.NONE;
            }
        })(e.color),
        value: e.value,
        disabled: e.disabled
    }));
}
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: c.NW.string(c.t.PEzffn),
            desc: c.NW.string(c.t.nDQy0t),
            value: o.sFg.NONE,
            disabled: e,
            tooltipText: e ? c.NW.string(c.t.j9WtHx) : null
        },
        {
            name: c.NW.string(c.t.SsCK8P),
            desc: c.NW.string(c.t['8GCOX1']),
            value: o.sFg.LOW,
            color: t ? void 0 : (0, r.Fw)('GREEN_360')
        },
        {
            name: c.NW.string(c.t.WwNoR0),
            desc: c.NW.formatToPlainString(c.t.VS14gY, { min: o.YeM.ACCOUNT_AGE }),
            value: o.sFg.MEDIUM,
            color: t ? void 0 : (0, r.Fw)('YELLOW_360')
        },
        {
            name: c.NW.string(c.t.I2jMUF),
            desc: c.NW.formatToPlainString(c.t['r+b3Iy'], { min: o.YeM.MEMBER_AGE }),
            value: o.sFg.HIGH,
            color: t ? void 0 : (0, r.Fw)('ORANGE_345')
        },
        {
            name: c.NW.string(c.t.cJY8w8),
            desc: c.NW.string(c.t.PWaKmZ),
            value: o.sFg.VERY_HIGH,
            color: t ? void 0 : (0, r.Fw)('RED_400')
        }
    ];
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: c.NW.string(c.t.iHuPEx),
            desc: c.NW.string(c.t.dzbET0),
            value: o.lxg.ALL_MEMBERS,
            color: (0, r.Fw)('RED_400')
        },
        {
            name: c.NW.string(c.t.ynfFaG),
            desc: c.NW.string(c.t.qZ1eHh),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? c.NW.string(c.t.j9WtHx) : null,
            color: (0, r.Fw)('YELLOW_360')
        },
        {
            name: c.NW.string(c.t.VbSyAw),
            desc: c.NW.string(c.t.jesz8f),
            value: o.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? c.NW.string(c.t.j9WtHx) : null,
            color: (0, r.Fw)('PRIMARY_400')
        }
    ];
}
function d() {
    return [
        {
            name: c.NW.string(c.t['4IaoCA']),
            desc: c.NW.string(c.t.TgipjI),
            value: s.Xr.FRIENDS_AND_NON_FRIENDS,
            color: (0, r.Fw)('GREEN_360')
        },
        {
            name: c.NW.string(c.t['6NnX6O']),
            desc: c.NW.string(c.t['+dw1qq']),
            value: s.Xr.NON_FRIENDS,
            color: (0, r.Fw)('YELLOW_360')
        },
        {
            name: c.NW.string(c.t['1tiAFx']),
            desc: c.NW.string(c.t.LKTyeH),
            value: s.Xr.DISABLED,
            color: (0, r.Fw)('RED_400')
        }
    ];
}
