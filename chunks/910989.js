n.d(t, {
    $q: () => O,
    Ik: () => S,
    Yk: () => g,
    fp: () => E,
    jw: () => b,
}),
    n(583741);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(866442),
    u = n(692547),
    d = n(155127),
    f = n(657707),
    p = n(231338),
    _ = n(254478);
function m(e, t, n) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
var g = (function (e) {
        return (e.DEFAULT = "default"), (e.INVERTED = "inverted"), (e.GHOST = "ghost"), (e.ROW = "row"), e;
    })(g || {}),
    E = (function (e) {
        return (e.TOP = "top"), (e.CENTER = "center"), e;
    })(E || {});
let b = {
        BOX: _.box,
        ROUND: _.round,
        SMALL_BOX: _.smallBox,
    },
    y = {
        top: _.alignTop,
        center: _.alignCenter,
    },
    O = (e) => {
        let {
                disabled: t = !1,
                readOnly: n = !1,
                displayOnly: a = !1,
                value: s = !1,
                size: l = 24,
                type: c = "default",
                align: u = "center",
                onChange: f = p.dG,
                onClick: m,
                className: h,
                innerClassName: g,
                children: E,
                reverse: O = !1,
                shape: v = b.BOX,
                checkboxColor: I,
            } = e,
            T = i.useCallback(
                (e) => {
                    null == f || f(e, e.currentTarget.checked);
                },
                [f],
            ),
            A =
                null != E
                    ? (0, r.jsx)("div", {
                          className: o()(
                              _.label,
                              t ? _.labelDisabled : _.labelClickable,
                              O ? _.labelReversed : _.labelForward,
                          ),
                          style: { lineHeight: "".concat(l, "px") },
                          children: E,
                      })
                    : null,
            C = a ? "span" : "label",
            N = t ? _.inputDisabled : n ? _.inputReadonly : _.inputDefault;
        return (0, r.jsxs)(C, {
            "data-toggleable-component": "checkbox",
            className: o()(t ? _.checkboxWrapperDisabled : _.checkboxWrapper, y[u], h, {
                [_.row]: "row" === c,
                [_.checked]: s,
            }),
            children: [
                O ? A : null,
                !a &&
                    (0, r.jsx)(d.tE, {
                        children: (0, r.jsx)("input", {
                            className: o()(g, N),
                            type: "checkbox",
                            onClick: m,
                            onChange: t || n ? p.dG : T,
                            checked: s,
                            style: {
                                width: l,
                                height: l,
                            },
                        }),
                    }),
                (0, r.jsx)(S, {
                    value: s,
                    size: l,
                    shape: v,
                    checkboxColor: I,
                    disabled: t,
                }),
                O ? null : A,
            ],
        });
    };
function v(e) {
    var t;
    let { value: n, type: r, color: i } = e,
        a = null != (t = e.style) ? t : {};
    if (!1 === n) return a;
    if (((a = h({}, a)), null != i))
        switch (r) {
            case "default":
                a.borderColor = i;
                break;
            case "ghost":
                if (i.startsWith("var(--")) {
                    let e = "".concat(i.slice(0, -1), "-hsl)");
                    (a.borderColor = "rgba(".concat(e, ", 0.15)")), (a.backgroundColor = "rgba(".concat(e, ", 0.15)"));
                } else
                    l()((0, c.FX)(i), "Checkbox: ".concat(i, " is not a valid hex color")),
                        (a.borderColor = (0, c.wK)(i, 0.15)),
                        (a.backgroundColor = (0, c.wK)(i, 0.15));
                break;
            case "row":
            case "inverted":
                (a.backgroundColor = i), (a.borderColor = i);
        }
    return a;
}
function S(e) {
    let { indicatorClassName: t, value: n, size: a, shape: s, checkboxColor: l, disabled: c } = e,
        d = v(e),
        p = i.useMemo(() => (n ? u.Z.colors.WHITE.css : u.Z.unsafe_rawColors.TRANSPARENT.css), [n]);
    return (0, r.jsx)("div", {
        className: o()(_.checkbox, s, t, {
            [_.checked]: n,
            [_.checkboxDisabled]: c,
        }),
        style: h(
            {
                width: a,
                height: a,
                borderColor: l,
            },
            d,
        ),
        children: (0, r.jsx)(f.kSu, {
            size: "sm",
            color: p,
            "aria-hidden": !0,
        }),
    });
}
