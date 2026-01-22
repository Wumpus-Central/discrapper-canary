n.d(t, {
    A: () => d,
});
var r,
    l = n(311907),
    i = n(73153),
    o = n(381941);

function a(e, t, n) {
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
let c = {};
class s extends (r = l.Ay.Store) {
    getOptions(e) {
        return c[e];
    }
}
a(s, "displayName", "SendMessageOptionsStore");
let d = new s(i.h, {
    MESSAGE_CREATE: function (e) {
        let { message: t, sendMessageOptions: n } = e;
        if (null != n) {
            var r, l, i;
            c[t.id] =
                ((l = (function (e) {
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
                                a(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, n)),
                (i = i =
                    {
                        location: null != (r = n.location) ? r : o.Hx.OTHER,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                l);
        }
        null != t.nonce && t.nonce in c && delete c[t.nonce];
    },
});
