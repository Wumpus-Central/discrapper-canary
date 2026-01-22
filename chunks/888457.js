n.d(t, {
    s: () => E,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(86968),
    c = n(900283),
    u = n(563014),
    d = n(112378),
    f = n(885621),
    p = n(658122);

function _(e, t, n) {
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

function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e, t) {
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

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function E(e) {
    let {
            color: t = "default",
            label: n,
            checked: a,
            subtext: _,
            disabled: m,
            isFocused: E,
            menuItemProps: b,
            action: y,
            className: O,
            focusedClassName: A,
        } = e,
        { onInteraction: v } = i.useContext(c.x),
        S = i.useRef(null);
    i.useEffect(() => {
        E && (0, u.Y)(S);
    }, [E]);
    let I = i.useCallback(
        (e) => {
            y(e),
                null == v ||
                    v({
                        type: c.Q.CHECKBOX,
                    });
        },
        [y, v],
    );
    return (0, r.jsxs)(
        o.DUT,
        g(
            h(
                {
                    innerRef: S,
                    className: s()(p.item, p.checkboxContainer, p.labelContainer, f.jV[t], O, {
                        [p.disabled]: m,
                        [p.focused]: E,
                        [null != A ? A : ""]: E,
                    }),
                    onClick: m ? void 0 : I,
                },
                b,
            ),
            {
                "aria-checked": a,
                "aria-disabled": m,
                children: [
                    (0, r.jsxs)("div", {
                        className: p.label,
                        children: [
                            (0, r.jsx)(d.V, {
                                children: (0, l.J)(n, e),
                            }),
                            null != _ &&
                                (0, r.jsx)("div", {
                                    className: p.subtext,
                                    children: _,
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: p.iconContainer,
                        children: (0, r.jsx)(o.P7L, {
                            checked: a,
                            disabled: m,
                            size: 20,
                        }),
                    }),
                ],
            },
        ),
    );
}
