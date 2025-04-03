n.d(t, {
    cE: () => u,
    eu: () => d,
    fU: () => p
});
var r = n(372793),
    i = n(731965),
    a = n(902704);
function l(e) {
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
function o(e, t) {
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
let s = {},
    c = (0, r.F)((e) => ({
        polls: {},
        updatePollState(t, n, r) {
            (0, i.j)(() => {
                e((e) => {
                    var i;
                    return { polls: o(l({}, e.polls), { [t]: o(l({}, e.polls[t]), { [n]: r(null == (i = e.polls[t]) ? void 0 : i[n]) }) }) };
                });
            });
        }
    }));
function u(e) {
    return c((t) => {
        var n;
        return null != (n = t.polls[e]) ? n : s;
    }, a.Z);
}
function d(e, t, n) {
    c.getState().updatePollState(e, t, n);
}
function p(e, t) {
    var n;
    return null == (n = c.getState().polls[e]) ? void 0 : n[t];
}
