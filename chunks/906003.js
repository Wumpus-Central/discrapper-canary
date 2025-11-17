n.d(t, { Y: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(924929),
    l = n(677554),
    c = n(213305),
    u = n(986794),
    d = n(155127),
    f = n(267843),
    _ = n(402453),
    p = n(551488),
    h = n(131573),
    m = n(777207),
    g = n(577650);
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
let T = {
        xs: "text-xs/medium",
        sm: "text-sm/medium",
        md: "text-md/medium",
    },
    S = {
        xs: "xxs",
        sm: "xs",
        md: "refresh_sm",
    },
    A = {
        xs: "sm",
        sm: "sm",
        md: "md",
    };
function C(e) {
    var t,
        n,
        {
            role: a = "button",
            variant: f = "primary",
            size: p = "md",
            text: h,
            icon: E,
            iconPosition: y = "start",
            iconOpticalOffsetMargin: I = 0,
            fullWidth: S = !1,
            focusProps: A,
            loading: C,
            loadingStartedLabel: D,
            loadingFinishedLabel: w,
            rounded: x = !1,
            type: L = "button",
            rel: M,
            onClick: k,
            onDoubleClick: j,
            onMouseEnter: U,
            onMouseLeave: G,
            onMouseUp: B,
            onMouseDown: Z,
            onKeyDown: F,
            disabled: V,
            minWidth: H,
            className: Y,
            style: W,
            buttonRef: K,
        } = e,
        z = v(e, [
            "role",
            "variant",
            "size",
            "text",
            "icon",
            "iconPosition",
            "iconOpticalOffsetMargin",
            "fullWidth",
            "focusProps",
            "loading",
            "loadingStartedLabel",
            "loadingFinishedLabel",
            "rounded",
            "type",
            "rel",
            "onClick",
            "onDoubleClick",
            "onMouseEnter",
            "onMouseLeave",
            "onMouseUp",
            "onMouseDown",
            "onKeyDown",
            "disabled",
            "minWidth",
            "className",
            "style",
            "buttonRef",
        ]);
    let q = (0, u.M)(),
        X = null != (t = null == q ? void 0 : q.size) ? t : p,
        Q = null != (n = null == q ? void 0 : q.fullWidth) ? n : S,
        J = null != h,
        $ = i.useRef(null),
        ee = null != K ? K : $,
        et = (0, r.jsx)(P, {
            icon: E,
            iconOpticalOffsetMargin: I,
            iconPosition: y,
            size: X,
            ref: ee,
            disabled: V,
        }),
        en = "expressive" === f,
        er = i.useContext(c.S),
        { theme: ei, i18n: ea } = (0, _.ZF)(),
        eo = (0, s.a)(ei),
        es = i.useRef(!1);
    i.useEffect(() => {
        !0 === C && ((es.current = !0), l.u.announce(null != D ? D : ea.BUTTON_LOADING_STARTED_LABEL)),
            !1 === C &&
                !0 === es.current &&
                (l.u.announce(null != w ? w : ea.BUTTON_LOADING_FINISHED_LABEL), (es.current = !1));
    }, [C, D, w, ea.BUTTON_LOADING_STARTED_LABEL, ea.BUTTON_LOADING_FINISHED_LABEL]);
    let el = (0, r.jsxs)("div", {
            className: o()(g.buttonChildren, { [g.loading]: C }),
            children: [
                null != et && "start" === y && et,
                J &&
                    (0, r.jsx)(m.x, {
                        tag: "span",
                        variant: T[X],
                        color: "none",
                        lineClamp: 1,
                        children: h,
                    }),
                null != et && "end" === y && et,
            ],
        }),
        ec = V || C,
        eu = H;
    null != eu && "number" == typeof eu && (eu = "".concat(eu, "px"));
    let ed = (0, r.jsx)(
        d.tE,
        O(b({}, A), {
            children: (0, r.jsxs)(
                "button",
                O(
                    b(
                        {
                            "data-mana-component": "button",
                            role: a,
                            "aria-busy": C,
                            className: o()(g.button, g[X], g[f], {
                                [g.hasText]: J,
                                [g.fullWidth]: Q,
                                [g.rounded]: x,
                            }),
                            ref: ee,
                            rel: M,
                            type: L,
                            onClick: ec ? (e) => e.preventDefault() : k,
                            onDoubleClick: ec ? (e) => e.preventDefault() : j,
                            onMouseUp: ec ? void 0 : B,
                            onMouseDown: ec ? void 0 : Z,
                            onKeyDown: ec ? void 0 : F,
                            onMouseEnter: ec ? void 0 : U,
                            onMouseLeave: ec ? void 0 : G,
                            disabled: V,
                            style: { "--__button-min-width": eu },
                        },
                        z,
                    ),
                    {
                        children: [
                            en &&
                                (0, r.jsx)(R, {
                                    hasReducedMotion: er.reducedMotion.enabled,
                                    buttonRef: ee,
                                    isLightMode: eo,
                                    disabled: V,
                                }),
                            null == C
                                ? (0, r.jsx)("div", {
                                      className: g.buttonChildrenWrapper,
                                      children: el,
                                  })
                                : (0, r.jsx)(N, {
                                      loading: C,
                                      size: X,
                                      children: el,
                                  }),
                        ],
                    },
                ),
            ),
        }),
    );
    return en
        ? (0, r.jsx)("div", {
              className: o()(g.expressiveWrapper, {
                  [g.fullWidth]: Q,
                  [g.hasText]: J,
              }),
              children: ed,
          })
        : ed;
}
function N(e) {
    let { children: t, loading: n, size: a } = e,
        s = i.useRef(null),
        [l, c] = i.useState(n);
    return (
        i.useEffect(
            () => (
                null != s.current && clearTimeout(s.current),
                n
                    ? c(!0)
                    : (s.current = setTimeout(() => {
                          c(!1);
                      }, 500)),
                () => {
                    null != s.current && clearTimeout(s.current);
                }
            ),
            [n],
        ),
        (0, r.jsxs)("div", {
            className: g.buttonChildrenWrapper,
            children: [
                t,
                l &&
                    (0, r.jsx)("div", {
                        className: o()(g.spinnerWrapper, {
                            [g.fadeIn]: n,
                            [g.fadeOut]: !n,
                        }),
                        children: (0, r.jsx)(h.$, {
                            type: h.R.PULSING_ELLIPSIS,
                            className: o()(g.spinner, g["spinner-".concat(a)]),
                            itemClassName: g.spinnerItem,
                        }),
                    }),
            ],
        })
    );
}
function R(e) {
    let { hasReducedMotion: t, buttonRef: n, isLightMode: a, disabled: s } = e,
        l = i.useRef(null);
    return (
        i.useEffect(() => {
            if (!s && t) {
                let e = n.current,
                    t = () => {
                        var e;
                        null == (e = l.current) || e.play();
                    },
                    r = () => {
                        var e;
                        null == (e = l.current) || e.pause();
                    };
                return (
                    null == e || e.addEventListener("mouseenter", t, !0),
                    null == e || e.addEventListener("mouseleave", r, !0),
                    () => {
                        null == e || e.removeEventListener("mouseenter", t, !0),
                            null == e || e.removeEventListener("mouseleave", r, !0);
                    }
                );
            }
        }, [t, n, s]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                !s &&
                    (0, r.jsx)(p.Q, {
                        className: o()(g.expressiveRive, g.expressiveBackground),
                        eventTargetRef: n,
                        fit: "layout",
                        artboard: "BaseGlowRemapped",
                        ref: l,
                        withReducedMotion: "short-loop",
                    }),
                !t &&
                    !s &&
                    (0, r.jsx)(p.Q, {
                        className: o()(g.expressiveRive, g.expressiveHoverContainer),
                        fit: "layout",
                        artboard: a ? "HoverLightmode" : "HoverDarkmode",
                    }),
                (0, r.jsx)("div", { className: o()(g.expressiveRive, g.expressiveFill) }),
            ],
        })
    );
}
function P(e) {
    let { icon: t, iconOpticalOffsetMargin: n, iconPosition: a, size: o, ref: s, disabled: l } = e,
        c = null;
    function u() {
        if (0 === n) return {};
        switch (a) {
            case "start":
                return { marginLeft: n };
            case "end":
                return { marginRight: n };
        }
        return {};
    }
    let [d, _] = i.useState(!1);
    if (
        (i.useEffect(() => {
            if ("object" == typeof t && "sticker" === t.type && null != s.current) {
                let e = s.current,
                    t = () => {
                        l || _(!0);
                    },
                    n = () => {
                        l || _(!1);
                    };
                return (
                    e.addEventListener("mouseenter", t),
                    e.addEventListener("mouseleave", n),
                    () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n);
                    }
                );
            }
        }, [t, s, l]),
        "function" == typeof t || (null == t ? void 0 : t.type) === "icon")
    ) {
        let e = "function" == typeof t ? t : t.asset;
        c = (0, r.jsx)(e, {
            color: "currentColor",
            style: u(),
            size: S[o],
            className: g.icon,
        });
    } else if (null != t) {
        if ("rive" === t.type) {
            let e = t.asset;
            c = (0, r.jsx)(
                e,
                O(b({}, t.riveProps), {
                    eventTargetRef: s,
                    style: {
                        width: f.Z[S[o]],
                        height: f.Z[S[o]],
                    },
                }),
            );
        } else if ("sticker" === t.type) {
            let e = t.component;
            c = (0, r.jsx)(e, {
                size: f.Z[A[o]],
                sticker: t.asset,
                isInteracting: d,
            });
        }
    }
    return c;
}
