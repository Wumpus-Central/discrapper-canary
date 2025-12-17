n.d(t, { q: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(743236),
    l = n(939350),
    c = n(564546);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function p(e, t) {
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
function _(e) {
    let {
            color: t = "default",
            disabled: n,
            isFocused: a,
            showDefaultFocus: u = !1,
            menuItemProps: f,
            children: _,
        } = e,
        m = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            if (!a) return;
            let e = m.current;
            if (null == e) return;
            (0, s.F)(m);
            let t = e.querySelector('[tabindex="0"]');
            null == t || t.focus();
        }, [a]),
        (0, r.jsx)(
            "div",
            p(
                d(
                    {
                        ref: m,
                        className: o()(c.item, l._e[t], {
                            [c.disabled]: n,
                            [c.focused]: u && a,
                            [c.hideInteraction]: !u,
                        }),
                        "aria-disabled": n,
                    },
                    f,
                ),
                { children: _ },
            ),
        )
    );
}
