n.d(t, {
    IF: function () {
        return d;
    },
    LJ: function () {
        return u;
    },
    MF: function () {
        return f;
    },
    X7: function () {
        return g;
    },
    c7: function () {
        return p;
    }
});
var s = n(524437);
n(376345);
var i = n(692547),
    r = n(2150),
    o = n(187819),
    c = n(981631),
    l = n(973005),
    a = n(388032);
function u(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case x('PRIMARY_400'):
                    return r.q.ACCENT;
                case x('GREEN_360'):
                    return r.q.GREEN;
                case x('YELLOW_360'):
                    return r.q.YELLOW;
                case x('ORANGE_345'):
                    return r.q.ORANGE;
                case x('RED_400'):
                    return r.q.RED;
                default:
                    return r.q.NONE;
            }
        })(e.color),
        value: e.value,
        disabled: e.disabled
    }));
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: a.intl.string(a.t.PEzffn),
            desc: a.intl.string(a.t.nDQy0t),
            value: c.sFg.NONE,
            disabled: e,
            tooltipText: e ? a.intl.string(a.t.j9WtHx) : null
        },
        {
            name: a.intl.string(a.t.SsCK8P),
            desc: a.intl.string(a.t['8GCOX1']),
            value: c.sFg.LOW,
            color: t ? void 0 : x('GREEN_360')
        },
        {
            name: a.intl.string(a.t.WwNoR0),
            desc: a.intl.formatToPlainString(a.t.VS14gY, { min: c.YeM.ACCOUNT_AGE }),
            value: c.sFg.MEDIUM,
            color: t ? void 0 : x('YELLOW_360')
        },
        {
            name: a.intl.string(a.t.I2jMUF),
            desc: a.intl.formatToPlainString(a.t['r+b3Iy'], { min: c.YeM.MEMBER_AGE }),
            value: c.sFg.HIGH,
            color: t ? void 0 : x('ORANGE_345')
        },
        {
            name: a.intl.string(a.t.cJY8w8),
            desc: a.intl.string(a.t.PWaKmZ),
            value: c.sFg.VERY_HIGH,
            color: t ? void 0 : x('RED_400')
        }
    ];
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: a.intl.string(a.t.iHuPEx),
            desc: a.intl.string(a.t.dzbET0),
            value: c.lxg.ALL_MEMBERS,
            color: x('RED_400')
        },
        {
            name: a.intl.string(a.t.ynfFaG),
            desc: a.intl.string(a.t.qZ1eHh),
            value: c.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? a.intl.string(a.t.j9WtHx) : null,
            color: x('YELLOW_360')
        },
        {
            name: a.intl.string(a.t.VbSyAw),
            desc: a.intl.string(a.t.jesz8f),
            value: c.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? a.intl.string(a.t.j9WtHx) : null,
            color: x('PRIMARY_400')
        }
    ];
}
function p() {
    let e = (0, o.sp)({ location: 'generate-dm-spam-options' });
    return [
        {
            name: e ? a.intl.string(a.t['4IaoCA']) : a.intl.string(a.t['DY6/Fx']),
            desc: e ? a.intl.string(a.t.TgipjI) : a.intl.string(a.t.p5t0h4),
            value: s.Xr.FRIENDS_AND_NON_FRIENDS,
            color: x('GREEN_360')
        },
        {
            name: e ? a.intl.string(a.t['6NnX6O']) : a.intl.string(a.t.IUO82t),
            desc: e ? a.intl.string(a.t['+dw1qq']) : a.intl.string(a.t['Fo/jub']),
            value: s.Xr.NON_FRIENDS,
            color: x('YELLOW_360')
        },
        {
            name: e ? a.intl.string(a.t['1tiAFx']) : a.intl.string(a.t.XV5TIi),
            desc: e ? a.intl.string(a.t.LKTyeH) : a.intl.string(a.t.Ykdtoq),
            value: s.Xr.DISABLED,
            color: x('RED_400')
        }
    ];
}
function g() {
    return [
        {
            name: a.intl.string(a.t.PhNlh4),
            desc: a.intl.string(a.t['Fw+Lvr']),
            value: l.TI.FRIENDS_AND_NON_FRIENDS,
            color: x('GREEN_360')
        },
        {
            name: a.intl.string(a.t['8ioJ4e']),
            desc: a.intl.string(a.t.z4l4Cg),
            value: l.TI.NON_FRIENDS,
            color: x('YELLOW_360')
        },
        {
            name: a.intl.string(a.t.FLfuhI),
            desc: a.intl.string(a.t.MoZlaG),
            value: l.TI.DISABLED,
            color: x('RED_400')
        }
    ];
}
function x(e) {
    return i.Z.unsafe_rawColors[e].css;
}
