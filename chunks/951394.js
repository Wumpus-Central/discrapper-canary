n.d(t, {
    Z0: () => _,
    ZP: () => m,
    zx: () => h
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(789030);
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
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function _(e) {
    let { className: t } = e;
    return (0, r.jsx)('div', { className: o()(t, s.separator) });
}
function h(e) {
    var { onClick: t, onContextMenu: n, className: i, selected: l = !1, children: u, disabled: p = !1, dangerous: _ } = e,
        h = f(e, ['onClick', 'onContextMenu', 'className', 'selected', 'children', 'disabled', 'dangerous']);
    return (0, r.jsx)(
        a.P3F,
        d(
            c(
                {
                    onClick: p ? void 0 : t,
                    onContextMenu: p ? void 0 : n,
                    className: o()(i, {
                        [s.button]: !0,
                        [s.selected]: l,
                        [s.disabled]: p,
                        [s.dangerous]: _
                    })
                },
                h
            ),
            { children: u }
        )
    );
}
let m = function (e) {
    var { className: t, children: n } = e,
        i = f(e, ['className', 'children']);
    return (0, r.jsx)('div', d(c({ className: o()(t, s.wrapper) }, i), { children: n }));
};
