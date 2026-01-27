n.d(t, {
    Tm: () => u,
    Wb: () => p,
    ug: () => d,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(622413),
    s = n(797232);

function o(e) {
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
}

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = 660,
    d = (e) =>
        (0, r.jsx)(
            a.A,
            c(o({}, e), {
                className: l()(e.className, {
                    [s.sN]: !e.isHorizontal,
                    [s.wO]: e.isHorizontal,
                }),
            }),
        ),
    p = (e) => {
        let { isHorizontal: t } = e;
        return (0, r.jsx)(
            d,
            c(o({}, e), {
                media: () =>
                    (0, r.jsx)("div", {
                        className: s.FR,
                        children: (0, r.jsx)("div", {
                            className: l()(s.Wv, {
                                [s._n]: t,
                            }),
                            children: (0, r.jsx)("div", {
                                className: s.h$,
                            }),
                        }),
                    }),
                title: () =>
                    (0, r.jsx)("div", {
                        className: l()(s.GE, {
                            [s.E9]: t,
                        }),
                    }),
            }),
        );
    };
