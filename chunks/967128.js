(n.d(t, {
    Kq: () => m,
    Ot: () => g,
    ZP: () => b,
    jz: () => E
}),
    n(953529));
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(534091),
    l = n(981631),
    c = n(191052);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function m(e) {
    let { locked: t = !1, channelType: n } = e,
        i = n === l.d4z.GUILD_VOICE || n === l.d4z.GUILD_STAGE_VOICE ? o.kBi : t ? o.W4G : o.VL1;
    return (0, r.jsx)('div', {
        className: a()(c.emptyChannelIcon, c.emptyChannelIconComponent),
        children: (0, r.jsx)(i, {
            color: o.TVs.colors.WHITE,
            size: 'custom',
            width: 42,
            height: 42
        })
    });
}
function g(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)(o.X6q, {
        'aria-hidden': 'true',
        className: a()(n, c.header),
        variant: 'heading-xxl/extrabold',
        children: t
    });
}
function E(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)(o.Text, {
        variant: 'text-md/normal',
        color: 'none',
        className: a()(c.description, n),
        children: t
    });
}
let b = function (e) {
    var { className: t, channelId: n, children: i } = e,
        o = p(e, ['className', 'channelId', 'children']);
    return (0, r.jsx)(
        'div',
        _(
            d(
                {
                    className: a()(t, c.container),
                    id: (0, s.p)(n, n)
                },
                o
            ),
            { children: i }
        )
    );
};
