n.d(t, { q: () => p });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(743236),
    l = n(939350),
    c = n(906944);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e) {
    let { color: t = 'default', disabled: n, isFocused: o, showDefaultFocus: u = !1, menuItemProps: f, children: p } = e,
        h = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            if (!o) return;
            let e = h.current;
            if (null == e) return;
            (0, s.F)(h);
            let t = e.querySelector('[tabindex="0"]');
            null == t || t.focus();
        }, [o]),
        (0, r.jsx)(
            'div',
            _(
                d(
                    {
                        ref: h,
                        className: a()(c.item, l._[t], {
                            [c.disabled]: n,
                            [c.focused]: u && o,
                            [c.hideInteraction]: !u
                        }),
                        'aria-disabled': n
                    },
                    f
                ),
                { children: p }
            )
        )
    );
}
