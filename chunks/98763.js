n.d(t, { b: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(405283),
    l = n(409738);
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
function d(e) {
    let t = e.controls,
        n = {};
    return (
        null != t &&
            Object.entries(t).forEach((e) => {
                let [t, r] = e;
                n[t] = r.defaultValue;
            }),
        n
    );
}
function f(e) {
    let { story: t, controlsLayout: n } = e,
        a = i.useMemo(() => d(t), [t]),
        [c, f] = i.useState(a);
    i.useEffect(() => {
        f(d(t));
    }, [t]);
    let p = () => {
            let e = t.component;
            return (0, r.jsx)(e, u({}, c));
        },
        _ = "hidden" !== n && null != t.controls;
    return (0, r.jsxs)("div", {
        className: o()(l.main, {
            [l.mainBottomLayout]: "bottom" === n,
            [l.mainRightLayout]: "right" === n,
        }),
        children: [
            (0, r.jsx)("div", {
                className: l.canvas,
                children: (0, r.jsx)("div", {
                    className: l.storyContent,
                    children: p(),
                }),
            }),
            _ &&
                null != t.controls &&
                (0, r.jsx)("div", {
                    className: o()(l.controls, {
                        [l.controlsBottom]: "bottom" === n,
                        [l.controlsRight]: "right" === n,
                    }),
                    children: (0, r.jsx)(s.a, {
                        controls: t.controls,
                        props: c,
                        onPropsChange: f,
                    }),
                }),
        ],
    });
}
