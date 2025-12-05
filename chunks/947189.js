n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(302221),
    d = n(324060),
    f = n(482617),
    p = n(246530);
function _(e, t, n) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = 500,
    g = 32;
function E(e) {
    let { start: t = 0, end: n, alignment: a = "left" } = e,
        _ = (0, i.useRef)(Date.now()),
        E = (0, i.useRef)(0),
        b = (0, i.useContext)(d.Q),
        y = (0, l.dQu)(b.primaryColor).hex(),
        O = (0, f.Z)(y),
        v = (0, u.a7)(O),
        [S, I] = (0, i.useState)(t),
        T = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
    (0, i.useEffect)(() => {
        let e = o().throttle(() => {
            let r = Math.min((Date.now() - _.current) / h, 1);
            I(Math.round((n - t) * r + t)), r < 1 && (E.current = requestAnimationFrame(e));
        }, g);
        return (
            (E.current = requestAnimationFrame(e)),
            () => {
                cancelAnimationFrame(E.current), e.cancel();
            }
        );
    }, [t, n, I]);
    let A = {
        className: p.animation,
        dataBinding: {
            DisplayValue: S,
            TextColor: {
                r: v.r,
                g: v.g,
                b: v.b,
                a: 255 * v.a,
            },
            reducedMotion: T,
        },
        fit: "layout",
        withReducedMotion: "play",
    };
    return "left" === a ? (0, r.jsx)(l.P9c, m({}, A)) : (0, r.jsx)(l.ljV, m({}, A));
}
