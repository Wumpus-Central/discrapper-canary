s.d(t, {
    IF: () => c,
    LJ: () => a,
    MF: () => u,
    c7: () => d
});
var n = s(524437);
s(376345);
var i = s(692547),
    r = s(2150),
    o = s(981631);
s(973005);
var l = s(388032);
function a(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case f('PRIMARY_400'):
                    return r.q.ACCENT;
                case f('GREEN_360'):
                    return r.q.GREEN;
                case f('YELLOW_360'):
                    return r.q.YELLOW;
                case f('ORANGE_345'):
                    return r.q.ORANGE;
                case f('RED_400'):
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
            name: l.intl.string(l.t.PEzffn),
            desc: l.intl.string(l.t.nDQy0t),
            value: o.sFg.NONE,
            disabled: e,
            tooltipText: e ? l.intl.string(l.t.j9WtHx) : null
        },
        {
            name: l.intl.string(l.t.SsCK8P),
            desc: l.intl.string(l.t['8GCOX1']),
            value: o.sFg.LOW,
            color: t ? void 0 : f('GREEN_360')
        },
        {
            name: l.intl.string(l.t.WwNoR0),
            desc: l.intl.formatToPlainString(l.t.VS14gY, { min: o.YeM.ACCOUNT_AGE }),
            value: o.sFg.MEDIUM,
            color: t ? void 0 : f('YELLOW_360')
        },
        {
            name: l.intl.string(l.t.I2jMUF),
            desc: l.intl.formatToPlainString(l.t['r+b3Iy'], { min: o.YeM.MEMBER_AGE }),
            value: o.sFg.HIGH,
            color: t ? void 0 : f('ORANGE_345')
        },
        {
            name: l.intl.string(l.t.cJY8w8),
            desc: l.intl.string(l.t.PWaKmZ),
            value: o.sFg.VERY_HIGH,
            color: t ? void 0 : f('RED_400')
        }
    ];
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: l.intl.string(l.t.iHuPEx),
            desc: l.intl.string(l.t.dzbET0),
            value: o.lxg.ALL_MEMBERS,
            color: f('RED_400')
        },
        {
            name: l.intl.string(l.t.ynfFaG),
            desc: l.intl.string(l.t.qZ1eHh),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? l.intl.string(l.t.j9WtHx) : null,
            color: f('YELLOW_360')
        },
        {
            name: l.intl.string(l.t.VbSyAw),
            desc: l.intl.string(l.t.jesz8f),
            value: o.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? l.intl.string(l.t.j9WtHx) : null,
            color: f('PRIMARY_400')
        }
    ];
}
function d() {
    return [
        {
            name: l.intl.string(l.t['4IaoCA']),
            desc: l.intl.string(l.t.TgipjI),
            value: n.Xr.FRIENDS_AND_NON_FRIENDS,
            color: f('GREEN_360')
        },
        {
            name: l.intl.string(l.t['6NnX6O']),
            desc: l.intl.string(l.t['+dw1qq']),
            value: n.Xr.NON_FRIENDS,
            color: f('YELLOW_360')
        },
        {
            name: l.intl.string(l.t['1tiAFx']),
            desc: l.intl.string(l.t.LKTyeH),
            value: n.Xr.DISABLED,
            color: f('RED_400')
        }
    ];
}
function f(e) {
    return i.Z.unsafe_rawColors[e].css;
}
