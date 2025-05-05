n.d(t, {
    S: () => a,
    V: () => l
});
var i = n(255367),
    r = n(481060),
    s = n(388032);
function l(e) {
    var { body: t } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['body']);
    (0, r.ZDy)(async () => {
        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
        return (n) => {
            var l, a;
            return (0, i.jsx)(
                e,
                ((l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, n, s)),
                (a = a =
                    {
                        children: (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            children: t
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                l)
            );
        };
    });
}
function a(e) {
    let { message: t } = e;
    l({
        header: s.intl.string(s.t.OjbtDg),
        confirmText: s.intl.string(s.t.BddRzc),
        body: t
    });
}
