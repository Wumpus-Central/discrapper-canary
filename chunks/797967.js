n.r(t), n.d(t, { default: () => x }), n(388685);
var l = n(54381),
    o = n(473749),
    r = n(120356),
    a = n.n(r),
    i = n(866442),
    s = n(28664),
    c = n(481060),
    d = n(981631),
    u = n(388032),
    f = n(556970),
    p = n(189346);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (e) => {
        var { position: t, color: n, disabled: o } = e,
            r = (function (e, t) {
                if (null == e) return {};
                var n,
                    l,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            l,
                            o = {},
                            r = Object.keys(e);
                        for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < r.length; l++)
                        (n = r[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                }
                return o;
            })(e, ["position", "color", "disabled"]);
        let s = (0, i.Bd)(null != n ? n : d.p6O) > 0.1;
        return (0, l.jsx)(
            "div",
            g(m({}, r), {
                className: a()(
                    "left" === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight,
                    s ? p.lightRing : p.darkRing,
                    { [p.disabled]: o },
                ),
                children: (0, l.jsx)("div", {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, i.Rf)(n) },
                    children: (0, l.jsx)(c.ilE, {
                        size: "custom",
                        colorClass: s ? p.colorPickerDropperLight : p.colorPickerDropperDark,
                        width: 14,
                        height: 14,
                    }),
                }),
            }),
        );
    },
    b = (e) => {
        let {
            isStart: t,
            buttonRef: n,
            color: o,
            showPopout: r,
            position: a,
            onRequestClose: i,
            onShowPopout: d,
            onColorChange: b,
            disabled: x,
        } = e;
        return (0, l.jsx)(c.tEY, {
            children: (0, l.jsx)(c.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, l.jsx)(c.Z$W, {
                        onChange: (e) => b(e, t),
                        value: o,
                    }),
                position: a,
                shouldShow: r,
                onRequestClose: i,
                children: (e) =>
                    (0, l.jsx)("div", {
                        ref: n,
                        children: (0, l.jsx)(
                            c.P3F,
                            g(m({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: d,
                                "data-position": t ? "left" : "right",
                                "aria-label": u.intl.string(t ? f.default.apbXbH : f.default.JaVq1b),
                                children: (0, l.jsx)(s.u, {
                                    text: u.intl.string(t ? f.default.apbXbH : f.default.JaVq1b),
                                    position: "bottom",
                                    children: (0, l.jsx)(h, {
                                        position: t ? "left" : "right",
                                        color: null != o ? o : 0,
                                        disabled: x,
                                    }),
                                }),
                            }),
                        ),
                    }),
            }),
        });
    };
function x(e) {
    let {
            defaultColor: t,
            colors: n,
            value: r,
            onChange: f,
            disabled: x = !1,
            customPickerPosition: S = "bottom",
            secondaryValue: j,
            onChangeGradientColors: C,
            isGradient: v = !1,
            gradientButtonClassName: P,
            allowBlackCustomColor: N = !1,
        } = e,
        O = o.useCallback((e) => (0 !== e || N) && e !== t && !n.some((t) => t === e) && (N || 0 !== e), [n, t, N]),
        k = o.useRef(null),
        T = o.useRef(null),
        y = o.useRef(null),
        [_, E] = o.useState(() => (O(r) ? r : null)),
        [D, R] = o.useState({
            start: r,
            end: null != j ? j : d.p6O,
        }),
        [A, I] = o.useState({
            showStart: !1,
            showEnd: !1,
        });
    o.useEffect(() => {
        E(O(r) ? r : null),
            R({
                start: r,
                end: null != j ? j : d.p6O,
            });
    }, [r, O, j]);
    let L = o.useCallback(
            (e) => {
                null == f || f(e), E(null);
            },
            [f, E],
        ),
        w = o.useCallback(
            (e) => {
                null == f || f(e), E(e);
            },
            [f, E],
        ),
        B = o.useCallback(
            (e, t) => {
                R({
                    start: e,
                    end: t,
                }),
                    null == C || C([e, t]);
            },
            [C],
        ),
        Z = o.useCallback((e, t) => {
            I((n) => g(m({}, n), { [e]: t }));
        }, []),
        M = o.useCallback(() => {
            var e, t, n, o, r;
            let s = {
                    background: "linear-gradient(90deg, "
                        .concat((0, i.Rf)(null != (e = D.start) ? e : d.p6O), " 0%, ")
                        .concat((0, i.Rf)(D.end), " 100%)"),
                },
                c = (0, l.jsxs)("div", {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, l.jsx)("div", {
                            className: p.gradientSwatch,
                            style: s,
                        }),
                        (0, l.jsx)(h, {
                            position: "left",
                            color: null != (t = D.start) ? t : d.p6O,
                            disabled: x,
                        }),
                        (0, l.jsx)(h, {
                            position: "right",
                            color: null != (n = D.end) ? n : 0,
                            disabled: x,
                        }),
                    ],
                });
            return x
                ? c
                : (0, l.jsxs)("div", {
                      className: a()(p.gradientButtonContainer, P),
                      children: [
                          (0, l.jsx)("div", {
                              className: p.gradientSwatch,
                              style: s,
                          }),
                          (0, l.jsx)(b, {
                              isStart: !0,
                              buttonRef: T,
                              color: null != (o = D.start) ? o : d.p6O,
                              showPopout: A.showStart,
                              position: S,
                              onRequestClose: () => Z("showStart", !1),
                              onShowPopout: () => Z("showStart", !0),
                              onColorChange: (e) => B(e, D.end),
                              disabled: x,
                          }),
                          (0, l.jsx)(b, {
                              isStart: !1,
                              buttonRef: y,
                              color: null != (r = D.end) ? r : 0,
                              showPopout: A.showEnd,
                              position: S,
                              onRequestClose: () => Z("showEnd", !1),
                              onShowPopout: () => Z("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return B(null != (t = D.start) ? t : d.p6O, e);
                              },
                              disabled: x,
                          }),
                      ],
                  });
        }, [S, x, D, A, B, Z, P]),
        G = o.useCallback(
            () =>
                (0, l.jsx)(c.Z$W, {
                    onChange: w,
                    value: r,
                }),
            [w, r],
        ),
        H = o.useCallback(
            (e) => {
                var n;
                let o = r !== t && (0 !== r || N),
                    a = (0, l.jsx)(
                        c.jHW,
                        g(m({}, e), {
                            customColor: null != (n = e.customColor) ? n : o ? r : null,
                            "aria-label": u.intl.string(u.t["FHBa/1"]),
                        }),
                    );
                return x
                    ? a
                    : (0, l.jsx)(c.yRy, {
                          targetElementRef: k,
                          renderPopout: G,
                          position: S,
                          children: (e) =>
                              (0, l.jsx)(s.u, {
                                  targetElementRef: k,
                                  text: u.intl.string(u.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, l.jsx)(
                                      "div",
                                      g(m({}, e), {
                                          ref: k,
                                          children: a,
                                      }),
                                  ),
                              }),
                      });
            },
            [S, x, G, r, t, N],
        ),
        Y = o.useCallback(
            (e) => {
                let t = (0, l.jsx)(c.AGO, m({}, e));
                return x
                    ? t
                    : (0, l.jsx)(s.u, {
                          text: u.intl.string(u.t.bBvAEH),
                          position: "bottom",
                          children: (0, l.jsx)("div", { children: t }),
                      });
            },
            [x],
        );
    return (0, l.jsx)(
        c.zH8,
        g(m({}, e), {
            renderDefaultButton: Y,
            renderCustomButton: H,
            renderGradientCustomButton: M,
            isGradient: v,
            customColor: _,
            onChange: v ? B : L,
        }),
    );
}
