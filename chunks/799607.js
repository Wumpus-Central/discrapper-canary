n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(645917),
    o = n(106767);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = function (e) {
    let {
            children: t,
            targetElementRef: n,
            tooltipHeight: s,
            delay: c = 300,
            onShow: d,
            title: f,
            body: _,
            graphic: p,
            size: h = "md",
            actions: m,
            gradientColor: g,
        } = e,
        [E, b] = i.useState("closed"),
        y = i.useRef(null),
        O = i.useRef(!1),
        v = "opening-mouse" === E || "open-mouse" === E,
        I = "opening-keyboard" === E || "open-keyboard" === E,
        T = "open-mouse" === E || "open-keyboard" === E,
        S = I,
        A = S,
        C = i.useRef(null),
        [N, R] = i.useState(0),
        P = (0, o.$)(n, s, E),
        D = i.useCallback(() => {
            null != y.current && (clearTimeout(y.current), (y.current = null));
        }, []),
        w = i.useCallback(
            (e) => {
                e && (O.current = !0), D(), b("closing");
            },
            [D],
        );
    i.useEffect(() => D, [D]);
    let x = i.useCallback(() => {
            "closed" === E && (D(), b("opening-mouse"));
        }, [D, E]),
        L = i.useCallback(() => {
            v && w(!1);
        }, [w, v]),
        M = i.useCallback(() => {
            if (O.current || "closed" !== E) {
                O.current = !1;
                return;
            }
            D(), b("opening-keyboard");
        }, [D, E]),
        k = i.useCallback(() => {
            "opening-keyboard" === E && w(!1);
        }, [w, E]);
    i.useEffect(() => {
        "opening-mouse" === E &&
            (y.current = window.setTimeout(() => {
                b("open-mouse"), null == d || d();
            }, c));
    }, [E, c, d]),
        i.useEffect(() => {
            "opening-keyboard" === E &&
                (y.current = window.setTimeout(() => {
                    b("open-keyboard"), null == d || d();
                }, c));
        }, [E, c, d]),
        i.useEffect(() => {
            if ("closing" === E) {
                let e = window.setTimeout(() => {
                    b("closed");
                }, 200);
                return () => clearTimeout(e);
            }
        }, [E]),
        i.useEffect(() => {
            if (!T) return;
            let e = (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), w(!0));
            };
            return document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0);
        }, [T, w, n]);
    let j = i.useMemo(
            () =>
                null == m
                    ? m
                    : m.map((e) =>
                          u(l({}, e), {
                              onClick: (t) => {
                                  var n;
                                  null == (n = e.onClick) || n.call(e, t), w(!1);
                              },
                          }),
                      ),
            [m, w],
        ),
        U = i.useCallback((e) => {
            R(e);
        }, []);
    return (0, r.jsxs)("div", {
        onMouseEnter: x,
        onMouseLeave: L,
        onFocus: M,
        onBlur: k,
        children: [
            t,
            (0, r.jsx)(a.RB, {
                targetElementRef: n,
                shouldShow: T,
                position: P,
                align: "center",
                title: f,
                body: _,
                graphic: p,
                size: h,
                actions: j,
                gradientColor: g,
                showCloseButton: A,
                modal: S,
                returnRef: S ? n : void 0,
                isTooltip: !0,
                popoverRef: C,
                caretConfig: {
                    align: "custom",
                    customOffset: N,
                },
                onNudgeChange: U,
                onRequestClose: (e) => {
                    w(
                        null != e &&
                            "object" == typeof e &&
                            "nativeEvent" in e &&
                            0 === e.nativeEvent.clientX &&
                            0 === e.nativeEvent.clientY,
                    );
                },
            }),
        ],
    });
};
