n.d(t, { b: () => c }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(255432),
    l = n(624315);
function s(e) {
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
function c(e) {
    let { story: t } = e,
        n = i.useMemo(() => s(t), [t]),
        [c, a] = i.useState(n);
    return (
        i.useEffect(() => {
            a(s(t));
        }, [t]),
        (0, r.jsxs)("div", {
            className: l.main,
            children: [
                (0, r.jsx)("div", {
                    className: l.canvas,
                    children: (0, r.jsx)("div", {
                        className: l.storyContent,
                        children: (() => {
                            let e = t.component;
                            return (0, r.jsx)(
                                e,
                                (function (e) {
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
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, c),
                            );
                        })(),
                    }),
                }),
                null != t.controls &&
                    (0, r.jsx)("div", {
                        className: l.controls,
                        children: (0, r.jsx)(o.a, {
                            controls: t.controls,
                            props: c,
                            onPropsChange: a,
                        }),
                    }),
            ],
        })
    );
}
