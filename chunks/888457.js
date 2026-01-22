n.d(t, {
    s: () => b,
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
    f = n(52738),
    p = n(885621),
    _ = n(658122);

function h(e, t, n) {
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

function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}

function g(e, t) {
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

function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function b(e) {
    let {
            color: t = "default",
            label: n,
            checked: a,
            subtext: h,
            leadingAccessory: g,
            disabled: b,
            isFocused: y,
            menuItemProps: O,
            action: A,
            className: v,
            focusedClassName: S,
        } = e,
        { onInteraction: I } = i.useContext(c.x),
        T = i.useRef(null);
    i.useEffect(() => {
        y && (0, u.Y)(T);
    }, [y]);
    let C = i.useCallback(
        (e) => {
            A(e),
                null == I ||
                    I({
                        type: c.Q.CHECKBOX,
                    });
        },
        [A, I],
    );
    return (0, r.jsxs)(
        o.DUT,
        E(
            m(
                {
                    innerRef: T,
                    className: s()(_.item, _.checkboxContainer, _.labelContainer, p.jV[t], v, {
                        [_.disabled]: b,
                        [_.focused]: y,
                        [null != S ? S : ""]: y,
                    }),
                    onClick: b ? void 0 : C,
                },
                O,
            ),
            {
                "aria-checked": a,
                "aria-disabled": b,
                children: [
                    null != g &&
                        (0, r.jsx)(f.B, {
                            accessory: g,
                            isFocused: y,
                        }),
                    (0, r.jsxs)("div", {
                        className: _.label,
                        children: [
                            (0, r.jsx)(d.V, {
                                children: (0, l.J)(n, e),
                            }),
                            null != h &&
                                (0, r.jsx)("div", {
                                    className: _.subtext,
                                    children: h,
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: _.iconContainer,
                        children: (0, r.jsx)(o.P7L, {
                            checked: a,
                            disabled: b,
                            size: 20,
                        }),
                    }),
                ],
            },
        ),
    );
}
