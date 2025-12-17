n.d(t, {
    B: () => _,
    Z: () => m,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(213305),
    o = n(13140),
    s = n(645917),
    l = n(106767);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 200;
function _(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: c,
            delay: d = 300,
            onShow: _,
            title: m,
            body: h,
            graphic: g,
            size: E = "md",
            actions: b,
            gradientColor: y,
        } = e,
        O = i.useContext(a.S),
        [v, S] = i.useState("closed"),
        I = i.useRef(null),
        T = i.useRef(!1),
        C = "opening-mouse" === v || "open-mouse" === v,
        A = "opening-keyboard" === v || "open-keyboard" === v,
        N = "open-mouse" === v || "open-keyboard" === v,
        P = (O.keyboardModeEnabled || A) && null != b,
        R = P,
        [w, D] = i.useState(0),
        x = (0, l.$)(n, c, v),
        L = i.useCallback(() => {
            null != I.current && (clearTimeout(I.current), (I.current = null));
        }, []),
        j = i.useCallback(
            (e) => {
                e && (T.current = !0), L(), S("closing");
            },
            [L],
        );
    i.useEffect(() => L, [L]);
    let M = i.useCallback(() => {
            ("closed" === v || "closing" === v) && (L(), S("opening-mouse"));
        }, [L, v]),
        k = i.useCallback(() => {
            C && j(!1);
        }, [j, C]),
        U = i.useCallback(() => {
            if (T.current || ("closed" !== v && "closing" !== v)) {
                T.current = !1;
                return;
            }
            L(), S("opening-keyboard");
        }, [L, v]),
        G = i.useCallback(() => {
            (P && "opening-keyboard" !== v) || j(!1);
        }, [j, v, P]);
    i.useEffect(() => {
        if ("opening-mouse" === v)
            return (
                (I.current = window.setTimeout(() => {
                    (I.current = null), S("open-mouse"), null == _ || _();
                }, d)),
                L
            );
    }, [v, d, _, L]),
        i.useEffect(() => {
            if ("opening-keyboard" === v)
                return (
                    (I.current = window.setTimeout(() => {
                        (I.current = null), S("open-keyboard"), null == _ || _();
                    }, d)),
                    L
                );
        }, [v, d, _, L]),
        i.useEffect(() => {
            if ("closing" === v)
                return (
                    (I.current = window.setTimeout(() => {
                        (I.current = null), S("closed");
                    }, p)),
                    L
                );
        }, [v, L]),
        i.useEffect(() => {
            if (!N) return;
            let e = (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), j(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [N, j]);
    let Z = i.useMemo(
            () =>
                null == b
                    ? b
                    : b.map((e) =>
                          f(u({}, e), {
                              onClick: (t) => {
                                  var n;
                                  null == (n = e.onClick) || n.call(e, t), j(!1);
                              },
                          }),
                      ),
            [b, j],
        ),
        F = i.useCallback((e) => {
            D(e);
        }, []);
    return (0, r.jsxs)("div", {
        onMouseEnter: M,
        onMouseLeave: k,
        onFocus: U,
        onBlur: G,
        children: [
            t,
            (0, r.jsx)(s.R, {
                targetElementRef: n,
                shouldShow: N,
                position: x,
                align: "center",
                title: m,
                body: h,
                graphic: g,
                size: E,
                actions: Z,
                gradientColor: y,
                showCloseButton: R,
                shouldTrapFocus: P,
                returnRef: P ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: {
                    align: "custom",
                    customOffset: w,
                },
                onNudgeChange: F,
                onRequestClose: (e) => {
                    j(null != e && (0, o.Al)(e));
                },
            }),
        ],
    });
}
let m = _;
