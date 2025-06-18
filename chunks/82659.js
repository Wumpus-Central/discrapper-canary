n.d(e, { u: () => s });
var i = n(255367);
n(73800);
var r = n(257465),
    l = n(369585),
    a = n(530392),
    d = n(37148);
function s(t) {
    var e,
        n,
        { title: s, headerBody: o, input: c, preview: u, actions: p, actionBarInput: _, children: g } = t,
        m = (function (t, e) {
            if (null == t) return {};
            var n,
                i,
                r = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(t);
                    for (i = 0; i < l.length; i++) (n = l[i]), e.indexOf(n) >= 0 || (r[n] = t[n]);
                    return r;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(t);
                for (i = 0; i < l.length; i++) (n = l[i]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
            }
            return r;
        })(t, ['title', 'headerBody', 'input', 'preview', 'actions', 'actionBarInput', 'children']);
    return (0, i.jsxs)(
        r.IX,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    i.forEach(function (e) {
                        var i;
                        (i = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = i);
                    });
            }
            return t;
        })({}, m)),
        (n = n =
            {
                children: [
                    (0, i.jsx)(d.x, {
                        title: s,
                        body: o
                    }),
                    (0, i.jsx)(a.h, {
                        controls: c,
                        children: g
                    }),
                    (0, i.jsx)(a.m, { children: u }),
                    (0, i.jsx)(l.G, {
                        leading: _,
                        actions: p,
                        actionsFullWidth: null == _
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e)
    );
}
