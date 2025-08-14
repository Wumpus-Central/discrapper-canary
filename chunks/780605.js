n.d(t, {
    E: () => w,
    Y: () => C,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(267843),
    l = n(680732),
    c = n(186325),
    u = n(84735),
    d = n(836459),
    f = n(922770),
    _ = n(993365),
    p = n(511857),
    h = n(410030),
    m = n(388032),
    g = n(974223),
    E = n(214785);
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = {
        sm: "text-sm/medium",
        md: "text-md/medium",
    },
    A = {
        sm: "xs",
        md: "refresh_sm",
    },
    N = {
        sm: "sm",
        md: "md",
    };
function C(e) {
    var t,
        n,
        {
            role: o = "button",
            variant: s = "primary",
            size: d = "md",
            text: f,
            icon: b,
            iconPosition: O = "start",
            iconOpticalOffsetMargin: T = 0,
            fullWidth: A = !1,
            focusProps: N,
            loading: C,
            loadingStartedLabel: D,
            loadingFinishedLabel: L,
            rounded: x = !1,
            type: M = "button",
            rel: j,
            onClick: k,
            onDoubleClick: U,
            onMouseEnter: G,
            onMouseLeave: B,
            onMouseUp: Z,
            onMouseDown: F,
            onKeyDown: V,
            disabled: H,
            className: Y,
            style: W,
            buttonRef: K,
        } = e,
        z = I(e, [
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
            "className",
            "style",
            "buttonRef",
        ]);
    let q = (0, g.M)(),
        X = null != (t = null == q ? void 0 : q.size) ? t : d,
        Q = null != (n = null == q ? void 0 : q.fullWidth) ? n : A,
        J = null != f,
        $ = i.useRef(null),
        ee = null != K ? K : $,
        et = (0, r.jsx)(w, {
            icon: b,
            iconOpticalOffsetMargin: T,
            iconPosition: O,
            size: X,
            ref: ee,
            disabled: H,
        }),
        en = "expressive" === s,
        er = i.useContext(c.S),
        ei = (0, p.a)((0, h.ZP)()),
        eo = i.useRef(!1);
    i.useEffect(() => {
        !0 === C && ((eo.current = !0), l.u.announce(null != D ? D : m.intl.string(m.t.A11Y_LOADING_STARTED))),
            !1 === C &&
                !0 === eo.current &&
                (l.u.announce(null != L ? L : m.intl.string(m.t.A11Y_LOADING_FINISHED)), (eo.current = !1));
    }, [C, D, L]);
    let ea = (0, r.jsxs)("div", {
            className: a()(E.buttonChildren, { [E.loading]: C }),
            children: [
                null != et && "start" === O && et,
                J &&
                    (0, r.jsx)(_.x, {
                        tag: "span",
                        variant: S[X],
                        color: "none",
                        lineClamp: 1,
                        children: f,
                    }),
                null != et && "end" === O && et,
            ],
        }),
        es = H || C,
        el = (0, r.jsx)(
            u.t,
            v(y({}, N), {
                children: (0, r.jsxs)(
                    "button",
                    v(
                        y(
                            {
                                "data-mana-component": "button",
                                role: o,
                                "aria-busy": C,
                                className: a()(E.button, E[X], E[s], {
                                    [E.hasText]: J,
                                    [E.fullWidth]: Q,
                                    [E.rounded]: x,
                                }),
                                ref: ee,
                                rel: j,
                                type: M,
                                onClick: es ? (e) => e.preventDefault() : k,
                                onDoubleClick: es ? (e) => e.preventDefault() : U,
                                onMouseUp: es ? void 0 : Z,
                                onMouseDown: es ? void 0 : F,
                                onKeyDown: es ? void 0 : V,
                                onMouseEnter: es ? void 0 : G,
                                onMouseLeave: es ? void 0 : B,
                                disabled: H,
                            },
                            z,
                        ),
                        {
                            children: [
                                en &&
                                    (0, r.jsx)(P, {
                                        hasReducedMotion: er.reducedMotion.enabled,
                                        buttonRef: ee,
                                        isLightMode: ei,
                                        disabled: H,
                                    }),
                                null == C
                                    ? (0, r.jsx)("div", {
                                          className: E.buttonChildrenWrapper,
                                          children: ea,
                                      })
                                    : (0, r.jsx)(R, {
                                          loading: C,
                                          size: X,
                                          children: ea,
                                      }),
                            ],
                        },
                    ),
                ),
            }),
        );
    return en
        ? (0, r.jsx)("div", {
              className: a()(E.expressiveWrapper, { [E.fullWidth]: Q }),
              children: el,
          })
        : el;
}
function R(e) {
    let { children: t, loading: n, size: o } = e,
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
            className: E.buttonChildrenWrapper,
            children: [
                t,
                l &&
                    (0, r.jsx)("div", {
                        className: a()(E.spinnerWrapper, {
                            [E.fadeIn]: n,
                            [E.fadeOut]: !n,
                        }),
                        children: (0, r.jsx)(f.$, {
                            type: f.R.PULSING_ELLIPSIS,
                            className: a()(E.spinner, E["spinner-".concat(o)]),
                            itemClassName: E.spinnerItem,
                        }),
                    }),
            ],
        })
    );
}
function P(e) {
    let { hasReducedMotion: t, buttonRef: n, isLightMode: o, disabled: s } = e,
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
                    (0, r.jsx)(d.GlowButtonRive, {
                        className: a()(E.expressiveRive, E.expressiveBackground),
                        eventTargetRef: n,
                        fit: "layout",
                        artboard: "BaseGlowRemapped",
                        ref: l,
                        withReducedMotion: "short-loop",
                    }),
                !t &&
                    !s &&
                    (0, r.jsx)(d.GlowButtonRive, {
                        className: a()(E.expressiveRive, E.expressiveHoverContainer),
                        fit: "layout",
                        artboard: o ? "HoverLightmode" : "HoverDarkmode",
                    }),
                (0, r.jsx)("div", { className: a()(E.expressiveRive, E.expressiveFill) }),
            ],
        })
    );
}
function w(e) {
    let { icon: t, iconOpticalOffsetMargin: n, iconPosition: o, size: a, ref: l, disabled: c } = e,
        u = null;
    function d() {
        if (0 === n) return {};
        switch (o) {
            case "start":
                return { marginLeft: n };
            case "end":
                return { marginRight: n };
        }
        return {};
    }
    let [f, _] = i.useState(!1);
    if (
        (i.useEffect(() => {
            if ("object" == typeof t && "sticker" === t.type && null != l.current) {
                let e = l.current,
                    t = () => {
                        c || _(!0);
                    },
                    n = () => {
                        c || _(!1);
                    };
                return (
                    e.addEventListener("mouseenter", t),
                    e.addEventListener("mouseleave", n),
                    () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n);
                    }
                );
            }
        }, [t, l, c]),
        "function" == typeof t || (null == t ? void 0 : t.type) === "icon")
    ) {
        let e = "function" == typeof t ? t : t.asset;
        u = (0, r.jsx)(e, {
            color: "currentColor",
            style: d(),
            size: A[a],
            className: E.icon,
        });
    } else if (null != t) {
        if ("rive" === t.type) {
            let e = t.asset;
            u = (0, r.jsx)(
                e,
                v(y({}, t.riveProps), {
                    eventTargetRef: l,
                    style: {
                        width: s.Z[A[a]],
                        height: s.Z[A[a]],
                    },
                }),
            );
        } else if ("sticker" === t.type) {
            let e = t.component;
            u = (0, r.jsx)(e, {
                size: s.Z[N[a]],
                sticker: t.asset,
                isInteracting: f,
            });
        }
    }
    return u;
}
