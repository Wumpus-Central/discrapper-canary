n.d(t, { Z: () => o });
var r = n(981631);
function i(e) {
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
}
function l(e, t) {
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
let a = '<removed>';
function o(e) {
    var t, n;
    let o = i({}, e);
    return (
        'object' == typeof (t = o).args &&
            'string' == typeof t.cmd &&
            (o = (function (e) {
                switch (e.cmd) {
                    case r.Etm.AUTHENTICATE:
                    case r.Etm.GET_PROVIDER_ACCESS_TOKEN:
                        return l(i({}, e), { args: l(i({}, e.args), { access_token: a }) });
                    default:
                        return i({}, e);
                }
            })(o)),
        'object' == typeof (n = o).data &&
            'string' == typeof n.cmd &&
            (o = (function (e) {
                switch (e.cmd) {
                    case r.Etm.AUTHENTICATE:
                    case r.Etm.GET_PROVIDER_ACCESS_TOKEN:
                        return l(i({}, e), { data: l(i({}, e.data), { access_token: a }) });
                    default:
                        return i({}, e);
                }
            })(o)),
        o
    );
}
