n.d(t, {
    AG: () => R,
    Z$: () => D,
    jH: () => P,
    zH: () => x,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(924826),
    c = n(866442),
    u = n(793030),
    d = n(507274),
    f = n(481060),
    _ = n(408886),
    p = n(44315),
    h = n(981631),
    m = n(388032),
    g = n(164688);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
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
function O(e, t) {
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
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = i.lazy(() => Promise.all([n.e("3115"), n.e("28102")]).then(n.bind(n, 534828))),
    T = 7,
    A = () => Promise.resolve();
function C(e) {
    return null == e ? null : "string" == typeof e ? ((0, c.FX)(e) ? (0, c._i)(e) : null) : e;
}
function N(e) {
    let {
            color: t,
            isDefault: n = !1,
            isCustom: i = !1,
            isSelected: a = !1,
            disabled: l = !1,
            style: d = {},
            onClick: _,
            isGradient: m = !1,
            "aria-label": E,
            gradientStart: y,
            gradientEnd: v,
            gradientDegrees: I = 180,
        } = e,
        S = (0, s.JA)("color-".concat(t)),
        T = {};
    if (m && null != y && null != v) {
        let e = (0, c.Rf)(y),
            t = (0, c.Rf)(v);
        T = { background: "linear-gradient(".concat(I, "deg, ").concat(e, ", ").concat(t, ")") };
    } else T = { backgroundColor: null != t ? (0, c.Rf)(t) : d.backgroundColor };
    let A = m ? y : t,
        C = !1;
    function N() {
        let e = 16,
            t = 16;
        if (((i || n) && ((e = "38%"), (t = "auto")), a))
            return (0, r.jsx)(f.dz2, {
                size: "custom",
                width: e,
                height: t,
                color: (0, p.Lq)(C ? h.Ilk.WHITE_500 : h.Ilk.BLACK_500),
            });
    }
    return (
        i && !a ? (C = !0) : (i || a) && (C = (0, c.Bd)(null != A ? A : h.p6O) > 0.2),
        (0, r.jsx)(u.tEY, {
            offset: -2,
            children: (0, r.jsxs)(
                "button",
                O(
                    b(
                        {
                            type: "button",
                            className: o()(g.colorPickerSwatch, {
                                [g.disabled]: l,
                                [g.default]: n,
                                [g.custom]: i,
                                [g.noColor]: null == t && !m,
                                [g.gradientPreset]: m,
                            }),
                            disabled: l,
                            onClick: () =>
                                null == _
                                    ? void 0
                                    : _(
                                          m
                                              ? {
                                                    start: y,
                                                    end: v,
                                                }
                                              : t,
                                      ),
                            style: b({}, d, T),
                            "aria-label": null != E ? E : m ? "Gradient ".concat(y, "-").concat(v) : T.backgroundColor,
                        },
                        S,
                    ),
                    {
                        children: [
                            i
                                ? (0, r.jsx)(f.vdY, {
                                      size: "custom",
                                      className: g.colorPickerDropper,
                                      width: 14,
                                      height: 14,
                                      color: (0, p.Lq)(C ? h.Ilk.WHITE_500 : h.Ilk.BLACK_500),
                                  })
                                : null,
                            N(),
                        ],
                    },
                ),
            ),
        })
    );
}
class R extends i.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: i, allowBlackCustomColor: a } = this.props;
        return (0, r.jsx)(N, {
            isDefault: !0,
            color: e,
            isSelected: e === n || (0 === n && !a),
            onClick: t,
            disabled: i,
        });
    }
}
class P extends i.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, "aria-label": i, presets: a } = this.props;
        return (0, r.jsx)(N, {
            isCustom: !0,
            color: e,
            isSelected: t === e && !a.includes(e),
            disabled: n,
            "aria-label": i,
        });
    }
}
function w(e) {
    let {
            value: t,
            eagerUpdate: n = !1,
            onChange: a,
            onClose: s,
            suggestedColors: l,
            middle: p,
            footer: h,
            showEyeDropper: E,
            wrapperComponentType: y,
            className: v,
        } = e,
        I = (0, _.Z)(),
        A = C(t),
        N = null != A ? A : 0,
        R = (0, c.Rf)(N),
        P = (0, c.O)(N),
        [w, D] = i.useState({
            current: N,
            pending: {
                hex: R,
                hsl: P,
            },
            input: R,
        });
    i.useEffect(() => {
        if (null == A || A === w.current) return;
        let e = (0, c.Rf)(A),
            t = (0, c.O)(A);
        D({
            current: A,
            pending: {
                hex: e,
                hsl: t,
            },
            input: e,
        });
    }, [A, w]),
        i.useEffect(() => s, [s]);
    let x = (e) => {
            let t = "#" === e[0] ? e : "#".concat(e);
            if (!(0, c.FX)(t)) return void D((e) => O(b({}, e), { input: t }));
            let n = (0, c._i)(t),
                r = (0, c.O)(n);
            D({
                current: n,
                pending: {
                    hex: t,
                    hsl: r,
                },
                input: t,
            }),
                a(n);
        },
        L = async () => {
            if (null != I)
                try {
                    let { sRGBHex: e } = await I.open();
                    x(e);
                } catch (e) {}
        },
        M = i.useCallback(
            (e) => {
                D((t) =>
                    O(b({}, t), {
                        pending: e,
                        input: e.hex,
                    }),
                ),
                    n && a((0, c._i)(e.hex));
            },
            [n, a],
        ),
        j = (e) => {
            a((0, c._i)(e));
        },
        k = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.Suspense, {
                    fallback: null,
                    children: (0, r.jsx)(S, {
                        onChange: M,
                        onChangeComplete: (e) => {
                            let { hex: t } = e;
                            return j(t);
                        },
                        color: w.pending.hsl,
                    }),
                }),
                p,
                (0, r.jsx)(f.oil, {
                    value: w.input.slice(1),
                    onChange: x,
                    maxLength: T - 1,
                    leading: "#",
                    trailing:
                        E && null != I
                            ? {
                                  icon: f.ilE,
                                  onClick: L,
                                  "aria-label": m.intl.string(m.t["0dU9Ny"]),
                              }
                            : void 0,
                }),
                null != l &&
                    l.length > 0 &&
                    (0, r.jsx)("div", {
                        className: g.suggestedColors,
                        children: l.map((e, t) =>
                            (0, r.jsx)(
                                u.P3F,
                                {
                                    "aria-label": "",
                                    style: { backgroundColor: e },
                                    className: g.suggestedColor,
                                    onClick: () => x(e),
                                },
                                "".concat(e, "-").concat(t),
                            ),
                        ),
                    }),
                h,
            ],
        }),
        U = null != y ? y : d.V;
    return (0, r.jsx)(U, {
        "aria-label": m.intl.string(m.t.WTqQ5e),
        className: o()(g.customColorPicker, v),
        children: k,
    });
}
let D = i.memo(w);
function x(e) {
    let {
            className: t,
            defaultColor: n,
            customColor: i,
            colors: a,
            value: c,
            secondaryValue: u,
            disabled: d,
            onChange: f,
            renderDefaultButton: _,
            renderCustomButton: p,
            colorContainerClassName: h,
            isGradient: m,
            renderGradientCustomButton: E,
            gradientDegrees: y,
            allowBlackCustomColor: I,
        } = e,
        S = (e) =>
            (0, r.jsx)("div", {
                className: g.colorPickerRow,
                children: m
                    ? e.map((e) =>
                          (0, r.jsx)(
                              N,
                              {
                                  gradientStart: e.start,
                                  gradientEnd: e.end,
                                  color: 0,
                                  isSelected: c === e.start && u === e.end,
                                  onClick: () => f(e.start, e.end),
                                  disabled: d,
                                  isGradient: !0,
                                  "aria-label": e.name,
                                  gradientDegrees: y,
                              },
                              "".concat(e.start, "-").concat(e.end),
                          ),
                      )
                    : e.map((e) =>
                          (0, r.jsx)(
                              N,
                              {
                                  color: e,
                                  isSelected: e === c,
                                  onClick: f,
                                  disabled: d,
                                  isGradient: !1,
                              },
                              e,
                          ),
                      ),
            }),
        T = a.slice(0, a.length / 2),
        C = a.slice(a.length / 2, a.length),
        R = (0, l.ZP)({
            id: "color-picker",
            isEnabled: !0,
            scrollToStart: A,
            scrollToEnd: A,
        });
    return (0, r.jsx)(s.bG, {
        navigator: R,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: s } = e,
                    l = v(e, ["ref"]);
                return (0, r.jsxs)(
                    "div",
                    O(
                        b(
                            {
                                className: o()(g.container, t, { [g.gradient]: m }),
                                ref: s,
                            },
                            l,
                        ),
                        {
                            children: [
                                !m &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: o()(g.defaultContainer, h),
                                                children: _({
                                                    value: c,
                                                    color: n,
                                                    onChange: f,
                                                    disabled: d,
                                                    allowBlackCustomColor: I,
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: o()(g.customContainer, h),
                                                children: p({
                                                    value: c,
                                                    customColor: i,
                                                    disabled: d,
                                                    presets: a,
                                                }),
                                            }),
                                        ],
                                    }),
                                m &&
                                    null != E &&
                                    (0, r.jsx)("div", {
                                        children: E({
                                            value: c,
                                            startColor: n,
                                            endColor: n,
                                            disabled: d,
                                        }),
                                    }),
                                (0, r.jsxs)("div", {
                                    children: [S(T), S(C)],
                                }),
                            ],
                        },
                    ),
                );
            },
        }),
    });
}
