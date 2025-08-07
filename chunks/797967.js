n.r(t), n.d(t, { default: () => _ }), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(866442),
    i = n(481060),
    c = n(981631),
    d = n(388032),
    u = n(93841),
    p = n(675602);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e) => {
        var { position: t, color: n, disabled: o } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                }
                return o;
            })(e, ["position", "color", "disabled"]);
        let d = (0, a.Bd)(null != n ? n : c.p6O) > 0.1;
        return (0, r.jsx)(
            "div",
            f(m({}, l), {
                className: s()(
                    "left" === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight,
                    d ? p.lightRing : p.darkRing,
                    { [p.disabled]: o },
                ),
                children: (0, r.jsx)("div", {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, a.Rf)(n) },
                    children: (0, r.jsx)(i.ilE, {
                        size: "custom",
                        colorClass: d ? p.colorPickerDropperLight : p.colorPickerDropperDark,
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
            showPopout: l,
            position: s,
            onRequestClose: a,
            onShowPopout: c,
            onColorChange: b,
            disabled: _,
        } = e;
        return (0, r.jsx)(i.tEY, {
            children: (0, r.jsx)(i.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, r.jsx)(i.Z$W, {
                        onChange: (e) => b(e, t),
                        value: o,
                    }),
                position: s,
                shouldShow: l,
                onRequestClose: a,
                children: (e) =>
                    (0, r.jsx)("div", {
                        ref: n,
                        children: (0, r.jsx)(
                            i.P3F,
                            f(m({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: c,
                                "data-position": t ? "left" : "right",
                                "aria-label": d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
                                children: (0, r.jsx)(i.ua7, {
                                    text: d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
                                    position: "bottom",
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g,
                                            f(m({}, e), {
                                                position: t ? "left" : "right",
                                                color: null != o ? o : 0,
                                                disabled: _,
                                            }),
                                        ),
                                }),
                            }),
                        ),
                    }),
            }),
        });
    };
function _(e) {
    let {
            defaultColor: t,
            colors: n,
            value: l,
            onChange: u,
            disabled: _ = !1,
            customPickerPosition: h = "bottom",
            secondaryValue: x,
            onChangeGradientColors: j,
            isGradient: v = !1,
            gradientButtonClassName: y,
        } = e,
        O = o.useCallback((e) => 0 !== e && e !== t && !n.some((t) => t === e), [n, t]),
        C = o.useRef(null),
        k = o.useRef(null),
        P = o.useRef(null),
        [w, S] = o.useState(() => (O(l) ? l : null)),
        [I, E] = o.useState({
            start: l,
            end: null != x ? x : c.p6O,
        }),
        [N, B] = o.useState({
            showStart: !1,
            showEnd: !1,
        });
    o.useEffect(() => {
        S(O(l) ? l : null),
            E({
                start: l,
                end: null != x ? x : c.p6O,
            });
    }, [l, O, x]);
    let R = o.useCallback(
            (e) => {
                null == u || u(e), S(null);
            },
            [u, S],
        ),
        D = o.useCallback(
            (e) => {
                null == u || u(e), S(e);
            },
            [u, S],
        ),
        A = o.useCallback(
            (e, t) => {
                E({
                    start: e,
                    end: t,
                }),
                    null == j || j([e, t]);
            },
            [j],
        ),
        T = o.useCallback((e, t) => {
            B((n) => f(m({}, n), { [e]: t }));
        }, []),
        Z = o.useCallback(() => {
            var e, t, n, o, l;
            let i = {
                    background: "linear-gradient(90deg, "
                        .concat((0, a.Rf)(null != (e = I.start) ? e : c.p6O), " 0%, ")
                        .concat((0, a.Rf)(I.end), " 100%)"),
                },
                d = (0, r.jsxs)("div", {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: p.gradientSwatch,
                            style: i,
                        }),
                        (0, r.jsx)(g, {
                            position: "left",
                            color: null != (t = I.start) ? t : c.p6O,
                            disabled: _,
                        }),
                        (0, r.jsx)(g, {
                            position: "right",
                            color: null != (n = I.end) ? n : 0,
                            disabled: _,
                        }),
                    ],
                });
            return _
                ? d
                : (0, r.jsxs)("div", {
                      className: s()(p.gradientButtonContainer, y),
                      children: [
                          (0, r.jsx)("div", {
                              className: p.gradientSwatch,
                              style: i,
                          }),
                          (0, r.jsx)(b, {
                              isStart: !0,
                              buttonRef: k,
                              color: null != (o = I.start) ? o : c.p6O,
                              showPopout: N.showStart,
                              position: h,
                              onRequestClose: () => T("showStart", !1),
                              onShowPopout: () => T("showStart", !0),
                              onColorChange: (e) => A(e, I.end),
                              disabled: _,
                          }),
                          (0, r.jsx)(b, {
                              isStart: !1,
                              buttonRef: P,
                              color: null != (l = I.end) ? l : 0,
                              showPopout: N.showEnd,
                              position: h,
                              onRequestClose: () => T("showEnd", !1),
                              onShowPopout: () => T("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return A(null != (t = I.start) ? t : c.p6O, e);
                              },
                              disabled: _,
                          }),
                      ],
                  });
        }, [h, _, I, N, A, T, y]),
        L = o.useCallback(
            () =>
                (0, r.jsx)(i.Z$W, {
                    onChange: D,
                    value: w,
                }),
            [D, w],
        ),
        U = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(i.jHW, f(m({}, e), { "aria-label": d.intl.string(d.t["FHBa//"]) }));
                return _
                    ? t
                    : (0, r.jsx)(i.yRy, {
                          targetElementRef: C,
                          renderPopout: L,
                          position: h,
                          children: (e) =>
                              (0, r.jsx)(i.ua7, {
                                  targetElementRef: C,
                                  text: d.intl.string(d.t["FHBa//"]),
                                  position: "bottom",
                                  children: (n) => (0, r.jsx)("div", f(m({ ref: C }, n, e), { children: t })),
                              }),
                      });
            },
            [h, _, L],
        ),
        G = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(i.AGO, m({}, e));
                return _
                    ? t
                    : (0, r.jsx)(i.ua7, {
                          text: d.intl.string(d.t.bBvAEB),
                          position: "bottom",
                          children: (e) => (0, r.jsx)("div", f(m({}, e), { children: t })),
                      });
            },
            [_],
        );
    return (0, r.jsx)(
        i.zH8,
        f(m({}, e), {
            renderDefaultButton: G,
            renderCustomButton: U,
            renderGradientCustomButton: Z,
            isGradient: v,
            customColor: w,
            onChange: v ? A : R,
        }),
    );
}
