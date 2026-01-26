n.d(t, {
    s: () => O,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(86968),
    c = n(900283),
    u = n(563014),
    d = n(745396),
    f = n(298063),
    p = n(112378),
    _ = n(52738),
    h = n(885621),
    m = n(658122);

function g(e, t, n) {
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

function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}

function y(e, t) {
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

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function O(e) {
    let {
            color: t = "default",
            label: n,
            checked: a,
            subtext: g,
            leftIcon: y,
            leadingAccessory: O,
            disabled: v,
            isFocused: A,
            menuItemProps: I,
            action: S,
            className: T,
            focusedClassName: C,
        } = e,
        { onInteraction: N } = i.useContext(c.x),
        w = (0, f.Y)("MenuCheckboxItem"),
        R = i.useRef(null);
    i.useEffect(() => {
        A && (0, u.Y)(R);
    }, [A]);
    let P = i.useCallback(
        (e) => {
            S(e),
                null == N ||
                    N({
                        type: c.Q.CHECKBOX,
                    });
        },
        [S, N],
    );
    return (0, r.jsxs)(
        o.DUT,
        b(
            E(
                {
                    innerRef: R,
                    className: s()(m.item, m.checkboxContainer, m.labelContainer, h.jV[t], T, {
                        [m.disabled]: v,
                        [m.focused]: A,
                        [null != C ? C : ""]: A,
                    }),
                    onClick: v ? void 0 : P,
                },
                I,
            ),
            {
                "aria-checked": a,
                "aria-disabled": v,
                children: [
                    w
                        ? null != O &&
                          (0, r.jsx)(_.B, {
                              accessory: O,
                              isFocused: A,
                          })
                        : (0, d.O)(y)
                          ? y
                          : null != y &&
                            (0, r.jsx)("div", {
                                className: m.iconContainerLeft,
                                children: (0, r.jsx)(y, {
                                    color: "currentColor",
                                    className: m.icon,
                                }),
                            }),
                    (0, r.jsxs)("div", {
                        className: m.label,
                        children: [
                            (0, r.jsx)(p.V, {
                                children: (0, l.J)(n, e),
                            }),
                            null != g &&
                                (0, r.jsx)(o.EYj, {
                                    variant: "text-xs/normal",
                                    className: m.subtext,
                                    children: g,
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: m.iconContainer,
                        children: (0, r.jsx)(o.P7L, {
                            checked: a,
                            disabled: v,
                            size: 20,
                        }),
                    }),
                ],
            },
        ),
    );
}
