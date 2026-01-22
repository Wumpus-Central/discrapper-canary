n.d(t, {
    Tm: () => f,
    Wb: () => _,
    ug: () => p,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(622413),
    o = n(797232);

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
let f = 660,
    p = (e) =>
        (0, r.jsx)(
            s.A,
            d(c({}, e), {
                className: a()(e.className, {
                    [o.sN]: !e.isHorizontal,
                    [o.wO]: e.isHorizontal,
                }),
            }),
        ),
    _ = (e) => {
        let { isHorizontal: t } = e,
            n = () =>
                (0, r.jsx)("div", {
                    className: a()(o.GE, {
                        [o.E9]: t,
                    }),
                }),
            i = () =>
                (0, r.jsx)("div", {
                    className: o.FR,
                    children: (0, r.jsx)("div", {
                        className: a()(o.Wv, {
                            [o._n]: t,
                        }),
                        children: (0, r.jsx)("div", {
                            className: o.h$,
                        }),
                    }),
                });
        return (0, r.jsx)(
            p,
            d(c({}, e), {
                media: i,
                title: n,
            }),
        );
    };
