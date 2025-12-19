n.d(t, {
    QR: () => m,
    Qr: () => f,
    Sg: () => h,
    gl: () => _,
}),
    n(388685),
    n(358797);
var r = n(54381),
    i = n(473749),
    a = n(620792),
    o = n(481060);
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
let c = -n(225055).sc.duration / 1000 / 2,
    u = 4,
    d = 0.2,
    f = (0, i.createContext)({
        addSpringRef: () => {},
        removeSpringRef: () => {},
    });
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    return 1 - Math.pow(1 - e, t);
}
function _() {
    let e = (0, i.useRef)(null),
        t = (0, o.q_F)({
            ref: e,
            from: {
                transform: "translate3d(0, 50px, 0)",
                opacity: 0,
            },
            to: {
                transform: "translate3d(0, 0px, 0)",
                opacity: 1,
            },
            config: {
                duration: 1000 * d,
                easing: (e) => e * e,
            },
        }),
        { addSpringRef: n, removeSpringRef: r } = (0, i.useContext)(f);
    return (
        (0, i.useEffect)(
            () => (
                n(e),
                () => {
                    r(e);
                }
            ),
            [n, r],
        ),
        t
    );
}
function m(e) {
    let { children: t, spring: n, className: i, style: o } = e;
    return (0, r.jsx)(a.animated.div, {
        className: i,
        style: l({}, n, o),
        children: t,
    });
}
function h() {
    let e = (0, i.useRef)(new Set()),
        [t, n] = (0, i.useState)([]),
        r = t.map((e, n) => (t.length <= 1 ? -c : Math.max(0, p((n / (t.length - 1)) * d, u) - c)));
    (0, a.useChain)(t, r);
    let o = (0, i.useCallback)((t) => {
        e.current.add(t);
    }, []);
    (0, i.useEffect)(() => {
        setImmediate(() => n(Array.from(e.current)));
    }, []);
    let s = (0, i.useCallback)((t) => {
        e.current.delete(t);
    }, []);
    return (0, i.useMemo)(
        () => ({
            addSpringRef: o,
            removeSpringRef: s,
        }),
        [o, s],
    );
}
