(n.d(t, { b: () => u }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(255432),
    o = n(142489);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            }));
    }
    return e;
}
function c(e) {
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
function u(e) {
    let { story: t } = e,
        n = i.useMemo(() => c(t), [t]),
        [s, u] = i.useState(n);
    i.useEffect(() => {
        u(c(t));
    }, [t]);
    let d = () => {
        let e = t.component;
        return (0, r.jsx)(e, l({}, s));
    };
    return (0, r.jsxs)('div', {
        className: o.main,
        children: [
            (0, r.jsx)('div', {
                className: o.canvas,
                children: (0, r.jsx)('div', {
                    className: o.storyContent,
                    children: d()
                })
            }),
            null != t.controls &&
                (0, r.jsx)('div', {
                    className: o.controls,
                    children: (0, r.jsx)(a.a, {
                        controls: t.controls,
                        props: s,
                        onPropsChange: u
                    })
                })
        ]
    });
}
