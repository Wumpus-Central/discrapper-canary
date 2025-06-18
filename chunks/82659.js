n.d(t, { u: () => c });
var r = n(255367);
n(73800);
var l = n(257465),
    i = n(369585),
    a = n(530392),
    o = n(37148);
function c(e) {
    var t,
        n,
        { title: c, headerBody: s, input: d, preview: u, actions: h, actionBarInput: x, children: m } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['title', 'headerBody', 'input', 'preview', 'actions', 'actionBarInput', 'children']);
    return (0, r.jsxs)(
        l.IX,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, b)),
        (n = n =
            {
                children: [
                    (0, r.jsx)(o.x, {
                        title: c,
                        body: s
                    }),
                    (0, r.jsx)(a.h, {
                        controls: d,
                        children: m
                    }),
                    (0, r.jsx)(a.m, { children: u }),
                    (0, r.jsx)(i.G, {
                        leading: x,
                        actions: h,
                        actionsFullWidth: null == x
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
