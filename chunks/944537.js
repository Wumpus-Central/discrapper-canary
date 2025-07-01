n.d(t, {
    I: () => s,
    n: () => c
});
var r,
    i = n(97519),
    l = n(731965);
function a(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
var s = (((r = {})[(r.ALL_CHANNELS_ACCESS = 0)] = 'ALL_CHANNELS_ACCESS'), (r[(r.SOME_CHANNELS_ACCESS = 1)] = 'SOME_CHANNELS_ACCESS'), r);
let c = (0, i.U)((e) => ({
    listings: {},
    setListing: (t, n) => (0, l.j)(() => e((e) => ({ listings: o(a({}, e.listings), { [t]: n(e.listings[t]) }) }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
        (0, l.j)(() => {
            e((e) => ({ editStateIdsForGroup: o(a({}, e.editStateIdsForGroup), { [t]: n(e.editStateIdsForGroup[t]) }) }));
        })
}));
