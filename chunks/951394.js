n.d(t, {
    Z0: () => h,
    ZP: () => g,
    zx: () => m
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(247613);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    let { className: t } = e;
    return (0, r.jsx)('div', { className: o()(t, l.separator) });
}
let m = i.forwardRef(function (e, t) {
        var { onClick: n, onContextMenu: i, className: a, selected: c = !1, children: d, disabled: p = !1, dangerous: h } = e,
            m = _(e, ['onClick', 'onContextMenu', 'className', 'selected', 'children', 'disabled', 'dangerous']);
        return (0, r.jsx)(
            s.P3F,
            f(
                u(
                    {
                        innerRef: t,
                        onClick: p ? void 0 : n,
                        onContextMenu: p ? void 0 : i,
                        className: o()(a, {
                            [l.button]: !0,
                            [l.selected]: c,
                            [l.disabled]: p,
                            [l.dangerous]: h
                        })
                    },
                    m
                ),
                { children: d }
            )
        );
    }),
    g = function (e) {
        var { className: t, children: n } = e,
            i = _(e, ['className', 'children']);
        return (0, r.jsx)('div', f(u({ className: o()(t, l.wrapper) }, i), { children: n }));
    };
