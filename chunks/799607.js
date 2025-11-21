n.d(t, {
    B: () => _,
    Z: () => p,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(13140),
    o = n(645917),
    s = n(106767);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = 200;
function _(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: l,
            delay: u = 300,
            onShow: _,
            title: p,
            body: h,
            graphic: m,
            size: g = "md",
            actions: E,
            gradientColor: b,
        } = e,
        [y, O] = i.useState("closed"),
        v = i.useRef(null),
        I = i.useRef(!1),
        T = "opening-mouse" === y || "open-mouse" === y,
        S = "opening-keyboard" === y || "open-keyboard" === y,
        A = "open-mouse" === y || "open-keyboard" === y,
        C = S,
        N = C,
        [R, P] = i.useState(0),
        D = (0, s.$)(n, l, y),
        w = i.useCallback(() => {
            null != v.current && (clearTimeout(v.current), (v.current = null));
        }, []),
        L = i.useCallback(
            (e) => {
                e && (I.current = !0), w(), O("closing");
            },
            [w],
        );
    i.useEffect(() => w, [w]);
    let x = i.useCallback(() => {
            "closed" === y && (w(), O("opening-mouse"));
        }, [w, y]),
        M = i.useCallback(() => {
            T && L(!1);
        }, [L, T]),
        j = i.useCallback(() => {
            if (I.current || "closed" !== y) {
                I.current = !1;
                return;
            }
            w(), O("opening-keyboard");
        }, [w, y]),
        k = i.useCallback(() => {
            "opening-keyboard" === y && L(!1);
        }, [L, y]);
    i.useEffect(() => {
        if ("opening-mouse" === y)
            return (
                (v.current = window.setTimeout(() => {
                    O("open-mouse"), null == _ || _();
                }, u)),
                w
            );
    }, [y, u, _, w]),
        i.useEffect(() => {
            if ("opening-keyboard" === y)
                return (
                    (v.current = window.setTimeout(() => {
                        O("open-keyboard"), null == _ || _();
                    }, u)),
                    w
                );
        }, [y, u, _, w]),
        i.useEffect(() => {
            if ("closing" === y) {
                let e = window.setTimeout(() => {
                    O("closed");
                }, f);
                return () => clearTimeout(e);
            }
        }, [y]),
        i.useEffect(() => {
            if (!A) return;
            let e = (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), L(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [A, L]);
    let U = i.useMemo(
            () =>
                null == E
                    ? E
                    : E.map((e) =>
                          d(c({}, e), {
                              onClick: (t) => {
                                  var n;
                                  null == (n = e.onClick) || n.call(e, t), L(!1);
                              },
                          }),
                      ),
            [E, L],
        ),
        G = i.useCallback((e) => {
            P(e);
        }, []);
    return (0, r.jsxs)("div", {
        onMouseEnter: x,
        onMouseLeave: M,
        onFocus: j,
        onBlur: k,
        children: [
            t,
            (0, r.jsx)(o.R, {
                targetElementRef: n,
                shouldShow: A,
                position: D,
                align: "center",
                title: p,
                body: h,
                graphic: m,
                size: g,
                actions: U,
                gradientColor: b,
                showCloseButton: N,
                shouldTrapFocus: C,
                returnRef: C ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: {
                    align: "custom",
                    customOffset: R,
                },
                onNudgeChange: G,
                onRequestClose: (e) => {
                    L(null != e && (0, a.Al)(e));
                },
            }),
        ],
    });
}
let p = _;
