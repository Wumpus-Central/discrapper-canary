r.r(t), r.d(t, { default: () => j }), r(388685);
var o = r(951288),
    n = r(647438),
    l = r(120356),
    i = r.n(l),
    a = r(866442),
    s = r(481060),
    c = r(981631),
    u = r(388032),
    d = r(989308),
    p = r(616132);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            o.forEach(function (t) {
                var o;
                (o = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, o);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let g = (e) => {
        var { position: t, color: r, disabled: n } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var r,
                    o,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            o,
                            n = {},
                            l = Object.keys(e);
                        for (o = 0; o < l.length; o++) (r = l[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                        return n;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < l.length; o++)
                        (r = l[o]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
                }
                return n;
            })(e, ["position", "color", "disabled"]);
        let u = (0, a.Bd)(null != r ? r : c.p6O) > 0.1;
        return (0, o.jsx)(
            "div",
            h(b({}, l), {
                className: i()(
                    "left" === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight,
                    u ? p.lightRing : p.darkRing,
                    { [p.disabled]: n },
                ),
                children: (0, o.jsx)("div", {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, a.Rf)(r) },
                    children: (0, o.jsx)(s.ilE, {
                        size: "custom",
                        colorClass: u ? p.colorPickerDropperLight : p.colorPickerDropperDark,
                        width: 14,
                        height: 14,
                    }),
                }),
            }),
        );
    },
    f = (e) => {
        let {
            isStart: t,
            buttonRef: r,
            color: n,
            showPopout: l,
            position: i,
            onRequestClose: a,
            onShowPopout: c,
            onColorChange: f,
            disabled: j,
        } = e;
        return (0, o.jsx)(s.tEY, {
            children: (0, o.jsx)(s.yRy, {
                targetElementRef: r,
                renderPopout: () =>
                    (0, o.jsx)(s.Z$W, {
                        onChange: (e) => f(e, t),
                        value: n,
                    }),
                position: i,
                shouldShow: l,
                onRequestClose: a,
                children: (e) =>
                    (0, o.jsx)("div", {
                        ref: r,
                        children: (0, o.jsx)(
                            s.P3F,
                            h(b({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: c,
                                "data-position": t ? "left" : "right",
                                "aria-label": u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                children: (0, o.jsx)(s.ua7, {
                                    text: u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                    position: "bottom",
                                    children: (e) =>
                                        (0, o.jsx)(
                                            g,
                                            h(b({}, e), {
                                                position: t ? "left" : "right",
                                                color: null != n ? n : 0,
                                                disabled: j,
                                            }),
                                        ),
                                }),
                            }),
                        ),
                    }),
            }),
        });
    };
function j(e) {
    let {
            defaultColor: t,
            colors: r,
            value: l,
            onChange: d,
            disabled: j = !1,
            customPickerPosition: k = "bottom",
            secondaryValue: O,
            onChangeGradientColors: P,
            isGradient: x = !1,
            gradientButtonClassName: C,
            allowBlackCustomColor: y = !1,
        } = e,
        w = n.useCallback((e) => (0 !== e || y) && e !== t && !r.some((t) => t === e) && (y || 0 !== e), [r, t, y]),
        m = n.useRef(null),
        v = n.useRef(null),
        R = n.useRef(null),
        [S, _] = n.useState(() => (w(l) ? l : null)),
        [D, E] = n.useState({
            start: l,
            end: null != O ? O : c.p6O,
        }),
        [B, N] = n.useState({
            showStart: !1,
            showEnd: !1,
        });
    n.useEffect(() => {
        _(w(l) ? l : null),
            E({
                start: l,
                end: null != O ? O : c.p6O,
            });
    }, [l, w, O]);
    let L = n.useCallback(
            (e) => {
                null == d || d(e), _(null);
            },
            [d, _],
        ),
        q = n.useCallback(
            (e) => {
                null == d || d(e), _(e);
            },
            [d, _],
        ),
        G = n.useCallback(
            (e, t) => {
                E({
                    start: e,
                    end: t,
                }),
                    null == P || P([e, t]);
            },
            [P],
        ),
        H = n.useCallback((e, t) => {
            N((r) => h(b({}, r), { [e]: t }));
        }, []),
        I = n.useCallback(() => {
            var e, t, r, n, l;
            let s = {
                    background: "linear-gradient(90deg, "
                        .concat((0, a.Rf)(null != (e = D.start) ? e : c.p6O), " 0%, ")
                        .concat((0, a.Rf)(D.end), " 100%)"),
                },
                u = (0, o.jsxs)("div", {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, o.jsx)("div", {
                            className: p.gradientSwatch,
                            style: s,
                        }),
                        (0, o.jsx)(g, {
                            position: "left",
                            color: null != (t = D.start) ? t : c.p6O,
                            disabled: j,
                        }),
                        (0, o.jsx)(g, {
                            position: "right",
                            color: null != (r = D.end) ? r : 0,
                            disabled: j,
                        }),
                    ],
                });
            return j
                ? u
                : (0, o.jsxs)("div", {
                      className: i()(p.gradientButtonContainer, C),
                      children: [
                          (0, o.jsx)("div", {
                              className: p.gradientSwatch,
                              style: s,
                          }),
                          (0, o.jsx)(f, {
                              isStart: !0,
                              buttonRef: v,
                              color: null != (n = D.start) ? n : c.p6O,
                              showPopout: B.showStart,
                              position: k,
                              onRequestClose: () => H("showStart", !1),
                              onShowPopout: () => H("showStart", !0),
                              onColorChange: (e) => G(e, D.end),
                              disabled: j,
                          }),
                          (0, o.jsx)(f, {
                              isStart: !1,
                              buttonRef: R,
                              color: null != (l = D.end) ? l : 0,
                              showPopout: B.showEnd,
                              position: k,
                              onRequestClose: () => H("showEnd", !1),
                              onShowPopout: () => H("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return G(null != (t = D.start) ? t : c.p6O, e);
                              },
                              disabled: j,
                          }),
                      ],
                  });
        }, [k, j, D, B, G, H, C]),
        F = n.useCallback(
            () =>
                (0, o.jsx)(s.Z$W, {
                    onChange: q,
                    value: S,
                }),
            [q, S],
        ),
        W = n.useCallback(
            (e) => {
                let t = (0, o.jsx)(s.jHW, h(b({}, e), { "aria-label": u.intl.string(u.t["FHBa//"]) }));
                return j
                    ? t
                    : (0, o.jsx)(s.yRy, {
                          targetElementRef: m,
                          renderPopout: F,
                          position: k,
                          children: (e) =>
                              (0, o.jsx)(s.ua7, {
                                  targetElementRef: m,
                                  text: u.intl.string(u.t["FHBa//"]),
                                  position: "bottom",
                                  children: (r) => (0, o.jsx)("div", h(b({ ref: m }, r, e), { children: t })),
                              }),
                      });
            },
            [k, j, F],
        ),
        z = n.useCallback(
            (e) => {
                let t = (0, o.jsx)(s.AGO, b({}, e));
                return j
                    ? t
                    : (0, o.jsx)(s.ua7, {
                          text: u.intl.string(u.t.bBvAEB),
                          position: "bottom",
                          children: (e) => (0, o.jsx)("div", h(b({}, e), { children: t })),
                      });
            },
            [j],
        );
    return (0, o.jsx)(
        s.zH8,
        h(b({}, e), {
            renderDefaultButton: z,
            renderCustomButton: W,
            renderGradientCustomButton: I,
            isGradient: x,
            customColor: S,
            onChange: x ? G : L,
        }),
    );
}
