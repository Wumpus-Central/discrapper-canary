n.d(t, {
    Dv: () => p,
    G2: () => O,
    IG: () => b,
    NG: () => g,
    OV: () => m,
    fW: () => v,
    lB: () => y,
    mA: () => E
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(377171),
    s = n(763494);
function l(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = {
    ROUND: s.baseShapeRound,
    ROUND_LEFT: s.baseShapeRoundLeft,
    ROUND_RIGHT: s.baseShapeRoundRight,
    SQUARE: ''
};
function h(e) {
    switch (e) {
        case 1:
        case 4:
        case 6:
            return 1;
        default:
            return;
    }
}
function m(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
}
function g(e) {
    return e < 1000 ? ''.concat(e) : ''.concat(Math.min(Math.floor(e / 1000), 9), 'k+');
}
let E = (e) => {
        var { count: t, color: n = o.Z.STATUS_DANGER, disableColor: i = !1, shape: l = p.ROUND, className: u, style: _ } = e,
            E = f(e, ['count', 'color', 'disableColor', 'shape', 'className', 'style']);
        return (0, r.jsx)(
            'div',
            d(
                c(
                    {
                        className: a()(u, s.numberBadge, l),
                        style: c(
                            {
                                backgroundColor: i ? void 0 : n,
                                width: m(t),
                                paddingRight: h(t)
                            },
                            _
                        )
                    },
                    E
                ),
                { children: g(t) }
            )
        );
    },
    b = (e) => {
        var { text: t, className: n, color: i = o.Z.STATUS_DANGER, shape: l = p.ROUND, disableColor: u = !1, style: _ } = e,
            h = f(e, ['text', 'className', 'color', 'shape', 'disableColor', 'style']);
        return (0, r.jsx)(
            'div',
            d(
                c(
                    {
                        className: a()(n, s.textBadge, l),
                        style: c({ backgroundColor: u ? void 0 : i }, _)
                    },
                    h
                ),
                { children: t }
            )
        );
    },
    y = (e) => {
        var { text: t, className: n } = e,
            i = f(e, ['text', 'className']);
        return (0, r.jsx)(
            b,
            c(
                {
                    className: a()(s.premiumBadge, n),
                    text: t
                },
                i
            )
        );
    },
    O = (e) => {
        let { icon: t, className: n, color: i = o.Z.STATUS_DANGER, shape: l = p.ROUND, disableColor: u = !1, style: d } = e;
        return (0, r.jsx)('div', {
            className: a()(n, s.iconBadge, l),
            style: c({ backgroundColor: u ? void 0 : i }, d),
            children: (0, r.jsx)(t, {
                className: s.icon,
                color: 'currentColor'
            })
        });
    },
    v = (e) => {
        var { className: t, color: n = o.Z.INTERACTIVE_ACTIVE, shape: i = p.ROUND, disableColor: l = !1, style: u } = e,
            d = f(e, ['className', 'color', 'shape', 'disableColor', 'style']);
        return (0, r.jsx)(
            'div',
            c(
                {
                    className: a()(t, s.circleBadge, i),
                    style: c({ backgroundColor: l ? void 0 : n }, u)
                },
                d
            )
        );
    };
