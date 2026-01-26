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
            void_label: a,
            checked: g,
            subtext: y,
            subtextLineClamp: O,
            leftIcon: v,
            leadingAccessory: A,
            disabled: I,
            isFocused: S,
            menuItemProps: T,
            action: C,
            className: N,
            focusedClassName: w,
        } = e,
        { onInteraction: R } = i.useContext(c.x),
        P = (0, f.Y)("MenuCheckboxItem"),
        D = i.useRef(null);
    i.useEffect(() => {
        S && (0, u.Y)(D);
    }, [S]);
    let x = i.useCallback(
        (e) => {
            C(e),
                null == R ||
                    R({
                        type: c.Q.CHECKBOX,
                    });
        },
        [C, R],
    );
    return (0, r.jsxs)(
        o.DUT,
        b(
            E(
                {
                    innerRef: D,
                    className: s()(m.item, m.checkboxContainer, m.labelContainer, h.jV[t], N, {
                        [m.disabled]: I,
                        [m.focused]: S,
                        [null != w ? w : ""]: S,
                    }),
                    onClick: I ? void 0 : x,
                },
                T,
            ),
            {
                "aria-checked": g,
                "aria-disabled": I,
                children: [
                    P
                        ? null != A &&
                          (0, r.jsx)(_.B, {
                              accessory: A,
                              isFocused: S,
                          })
                        : (0, d.O)(v)
                          ? v
                          : null != v &&
                            (0, r.jsx)("div", {
                                className: m.iconContainerLeft,
                                children: (0, r.jsx)(v, {
                                    color: "currentColor",
                                    className: m.icon,
                                }),
                            }),
                    (0, r.jsxs)("div", {
                        className: m.label,
                        children: [
                            (0, r.jsx)(p.V, {
                                children: (0, l.J)(null != a ? a : n, {
                                    isFocused: S,
                                    disabled: I,
                                }),
                            }),
                            null != y &&
                                (0, r.jsx)(o.EYj, {
                                    variant: "text-xs/normal",
                                    className: s()(m.subtext, {
                                        [m.subtextLineClamp]: null != O,
                                    }),
                                    lineClamp: O,
                                    children: y,
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: m.iconContainer,
                        children: (0, r.jsx)(o.P7L, {
                            checked: g,
                            disabled: I,
                            size: 20,
                        }),
                    }),
                ],
            },
        ),
    );
}
