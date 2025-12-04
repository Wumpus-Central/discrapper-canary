n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(607070),
    l = n(302221),
    c = n(324060),
    u = n(482617),
    d = n(246530);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = 500;
function m(e) {
    let { start: t = 0, end: n, alignment: f = "left" } = e,
        m = (0, i.useRef)(Date.now()),
        h = (0, i.useRef)(0),
        g = (0, i.useContext)(c.Q),
        E = (0, o.dQu)(g.primaryColor).hex(),
        b = (0, u.Z)(E),
        y = (0, l.a7)(b),
        [O, v] = (0, i.useState)(t),
        S = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    (0, i.useEffect)(() => {
        let e = () => {
            let r = Math.min((Date.now() - m.current) / _, 1);
            v(Math.round((n - t) * r + t)), r < 1 && (h.current = requestAnimationFrame(e));
        };
        return (h.current = requestAnimationFrame(e)), () => cancelAnimationFrame(h.current);
    }, [t, n, v]);
    let I = {
        className: d.animation,
        dataBinding: {
            DisplayValue: O,
            TextColor: {
                r: y.r,
                g: y.g,
                b: y.b,
                a: 255 * y.a,
            },
            reducedMotion: S,
        },
        fit: "layout",
        withReducedMotion: "play",
    };
    return "left" === f ? (0, r.jsx)(o.P9c, p({}, I)) : (0, r.jsx)(o.ljV, p({}, I));
}
