s.d(t, {
    IF: function () {
        return l;
    },
    LJ: function () {
        return a;
    },
    MF: function () {
        return u;
    },
    c7: function () {
        return d;
    }
});
var n = s(524437);
s(376345);
var i = s(692547),
    r = s(2150),
    o = s(981631);
s(973005);
var c = s(388032);
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
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: c.intl.string(c.t.PEzffn),
            desc: c.intl.string(c.t.nDQy0t),
            value: o.sFg.NONE,
            disabled: e,
            tooltipText: e ? c.intl.string(c.t.j9WtHx) : null
        },
        {
            name: c.intl.string(c.t.SsCK8P),
            desc: c.intl.string(c.t['8GCOX1']),
            value: o.sFg.LOW,
            color: t ? void 0 : f('GREEN_360')
        },
        {
            name: c.intl.string(c.t.WwNoR0),
            desc: c.intl.formatToPlainString(c.t.VS14gY, { min: o.YeM.ACCOUNT_AGE }),
            value: o.sFg.MEDIUM,
            color: t ? void 0 : f('YELLOW_360')
        },
        {
            name: c.intl.string(c.t.I2jMUF),
            desc: c.intl.formatToPlainString(c.t['r+b3Iy'], { min: o.YeM.MEMBER_AGE }),
            value: o.sFg.HIGH,
            color: t ? void 0 : f('ORANGE_345')
        },
        {
            name: c.intl.string(c.t.cJY8w8),
            desc: c.intl.string(c.t.PWaKmZ),
            value: o.sFg.VERY_HIGH,
            color: t ? void 0 : f('RED_400')
        }
    ];
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: c.intl.string(c.t.iHuPEx),
            desc: c.intl.string(c.t.dzbET0),
            value: o.lxg.ALL_MEMBERS,
            color: f('RED_400')
        },
        {
            name: c.intl.string(c.t.ynfFaG),
            desc: c.intl.string(c.t.qZ1eHh),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? c.intl.string(c.t.j9WtHx) : null,
            color: f('YELLOW_360')
        },
        {
            name: c.intl.string(c.t.VbSyAw),
            desc: c.intl.string(c.t.jesz8f),
            value: o.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? c.intl.string(c.t.j9WtHx) : null,
            color: f('PRIMARY_400')
        }
    ];
}
function d() {
    return [
        {
            name: c.intl.string(c.t['4IaoCA']),
            desc: c.intl.string(c.t.TgipjI),
            value: n.Xr.FRIENDS_AND_NON_FRIENDS,
            color: f('GREEN_360')
        },
        {
            name: c.intl.string(c.t['6NnX6O']),
            desc: c.intl.string(c.t['+dw1qq']),
            value: n.Xr.NON_FRIENDS,
            color: f('YELLOW_360')
        },
        {
            name: c.intl.string(c.t['1tiAFx']),
            desc: c.intl.string(c.t.LKTyeH),
            value: n.Xr.DISABLED,
            color: f('RED_400')
        }
    ];
}
function f(e) {
    return i.Z.unsafe_rawColors[e].css;
}
