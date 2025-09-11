n.d(t, {
    AG: () => P,
    Z$: () => x,
    jH: () => w,
    zH: () => L,
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
    d = n(1561),
    f = n(507274),
    _ = n(481060),
    p = n(408886),
    h = n(44315),
    m = n(981631),
    g = n(388032),
    E = n(701224);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = i.lazy(() => Promise.all([n.e("3115"), n.e("28102")]).then(n.bind(n, 534828))),
    A = 7,
    C = () => Promise.resolve();
function N(e) {
    return null == e ? null : "string" == typeof e ? ((0, c.FX)(e) ? (0, c._i)(e) : null) : e;
}
function R(e) {
    let {
            color: t,
            isDefault: n = !1,
            isCustom: i = !1,
            isSelected: a = !1,
            disabled: l = !1,
            style: d = {},
            onClick: f,
            isGradient: p = !1,
            "aria-label": g,
            gradientStart: b,
            gradientEnd: O,
            gradientDegrees: I = 180,
        } = e,
        T = (0, s.JA)("color-".concat(t)),
        S = {};
    if (p && null != b && null != O) {
        let e = (0, c.Rf)(b),
            t = (0, c.Rf)(O);
        S = { background: "linear-gradient(".concat(I, "deg, ").concat(e, ", ").concat(t, ")") };
    } else S = { backgroundColor: null != t ? (0, c.Rf)(t) : d.backgroundColor };
    let A = p ? b : t,
        C = !1;
    function N() {
        let e = 16,
            t = 16;
        if (((i || n) && ((e = "38%"), (t = "auto")), a))
            return (0, r.jsx)(_.dz2, {
                size: "custom",
                width: e,
                height: t,
                color: (0, h.Lq)(C ? m.Ilk.WHITE_500 : m.Ilk.BLACK_500),
            });
    }
    return (
        i && !a ? (C = !0) : (i || a) && (C = (0, c.Bd)(null != A ? A : m.p6O) > 0.2),
        (0, r.jsx)(u.tEY, {
            offset: -2,
            children: (0, r.jsxs)(
                "button",
                v(
                    y(
                        {
                            type: "button",
                            className: o()(E.colorPickerSwatch, {
                                [E.disabled]: l,
                                [E.default]: n,
                                [E.custom]: i,
                                [E.noColor]: null == t && !p,
                                [E.gradientPreset]: p,
                            }),
                            disabled: l,
                            onClick: () =>
                                null == f
                                    ? void 0
                                    : f(
                                          p
                                              ? {
                                                    start: b,
                                                    end: O,
                                                }
                                              : t,
                                      ),
                            style: y({}, d, S),
                            "aria-label": null != g ? g : p ? "Gradient ".concat(b, "-").concat(O) : S.backgroundColor,
                        },
                        T,
                    ),
                    {
                        children: [
                            i
                                ? (0, r.jsx)(_.vdY, {
                                      size: "custom",
                                      className: E.colorPickerDropper,
                                      width: 14,
                                      height: 14,
                                      color: (0, h.Lq)(C ? m.Ilk.WHITE_500 : m.Ilk.BLACK_500),
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
class P extends i.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: i, allowBlackCustomColor: a } = this.props;
        return (0, r.jsx)(R, {
            isDefault: !0,
            color: e,
            isSelected: e === n || (0 === n && !a),
            onClick: t,
            disabled: i,
        });
    }
}
class w extends i.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, "aria-label": i, presets: a } = this.props;
        return (0, r.jsx)(R, {
            isCustom: !0,
            color: e,
            isSelected: t === e && !a.includes(e),
            disabled: n,
            "aria-label": i,
        });
    }
}
function D(e) {
    let {
            value: t,
            eagerUpdate: n = !1,
            onChange: a,
            onClose: s,
            suggestedColors: l,
            middle: u,
            footer: h,
            showEyeDropper: m,
            wrapperComponentType: b,
            className: O,
        } = e,
        I = (0, p.Z)(),
        T = N(t),
        C = null != T ? T : 0,
        R = (0, c.Rf)(C),
        P = (0, c.O)(C),
        [w, D] = i.useState({
            current: C,
            pending: {
                hex: R,
                hsl: P,
            },
            input: R,
        });
    i.useEffect(() => {
        if (null == T || T === w.current) return;
        let e = (0, c.Rf)(T),
            t = (0, c.O)(T);
        D({
            current: T,
            pending: {
                hex: e,
                hsl: t,
            },
            input: e,
        });
    }, [T, w]),
        i.useEffect(() => s, [s]);
    let x = (e) => {
            let t = "#" === e[0] ? e : "#".concat(e);
            if (!(0, c.FX)(t)) return void D((e) => v(y({}, e), { input: t }));
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
        j = i.useCallback(
            (e) => {
                D((t) =>
                    v(y({}, t), {
                        pending: e,
                        input: e.hex,
                    }),
                ),
                    n && a((0, c._i)(e.hex));
            },
            [n, a],
        ),
        k = (e) => {
            a((0, c._i)(e));
        },
        M = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.Suspense, {
                    fallback: null,
                    children: (0, r.jsx)(S, {
                        onChange: j,
                        onChangeComplete: (e) => {
                            let { hex: t } = e;
                            return k(t);
                        },
                        color: w.pending.hsl,
                    }),
                }),
                u,
                (0, r.jsx)(_.oil, {
                    value: w.input.slice(1),
                    onChange: x,
                    maxLength: A - 1,
                    leading: "#",
                    trailing:
                        m && null != I
                            ? {
                                  icon: _.ilE,
                                  onClick: L,
                                  "aria-label": g.intl.string(g.t["0dU9Nz"]),
                              }
                            : void 0,
                }),
                null != l &&
                    l.length > 0 &&
                    (0, r.jsx)("div", {
                        className: E.suggestedColors,
                        children: l.map((e, t) =>
                            (0, r.jsx)(
                                d.P,
                                {
                                    "aria-label": "",
                                    style: { backgroundColor: e },
                                    className: E.suggestedColor,
                                    onClick: () => x(e),
                                },
                                "".concat(e, "-").concat(t),
                            ),
                        ),
                    }),
                h,
            ],
        }),
        U = null != b ? b : f.V;
    return (0, r.jsx)(U, {
        "aria-label": g.intl.string(g.t.WTqQ5e),
        className: o()(E.customColorPicker, O),
        children: M,
    });
}
let x = i.memo(D);
function L(e) {
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
            renderGradientCustomButton: g,
            gradientDegrees: b,
            allowBlackCustomColor: O,
        } = e,
        T = (e) =>
            (0, r.jsx)("div", {
                className: E.colorPickerRow,
                children: m
                    ? e.map((e) =>
                          (0, r.jsx)(
                              R,
                              {
                                  gradientStart: e.start,
                                  gradientEnd: e.end,
                                  color: 0,
                                  isSelected: c === e.start && u === e.end,
                                  onClick: () => f(e.start, e.end),
                                  disabled: d,
                                  isGradient: !0,
                                  "aria-label": e.name,
                                  gradientDegrees: b,
                              },
                              "".concat(e.start, "-").concat(e.end),
                          ),
                      )
                    : e.map((e) =>
                          (0, r.jsx)(
                              R,
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
        S = a.slice(0, a.length / 2),
        A = a.slice(a.length / 2, a.length),
        N = (0, l.ZP)({
            id: "color-picker",
            isEnabled: !0,
            scrollToStart: C,
            scrollToEnd: C,
        });
    return (0, r.jsx)(s.bG, {
        navigator: N,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: s } = e,
                    l = I(e, ["ref"]);
                return (0, r.jsxs)(
                    "div",
                    v(
                        y(
                            {
                                className: o()(E.container, t, { [E.gradient]: m }),
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
                                                className: o()(E.defaultContainer, h),
                                                children: _({
                                                    value: c,
                                                    color: n,
                                                    onChange: f,
                                                    disabled: d,
                                                    allowBlackCustomColor: O,
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: o()(E.customContainer, h),
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
                                    null != g &&
                                    (0, r.jsx)("div", {
                                        children: g({
                                            value: c,
                                            startColor: n,
                                            endColor: n,
                                            disabled: d,
                                        }),
                                    }),
                                (0, r.jsxs)("div", {
                                    children: [T(S), T(A)],
                                }),
                            ],
                        },
                    ),
                );
            },
        }),
    });
}
