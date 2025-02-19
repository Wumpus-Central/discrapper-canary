n.d(t, {
    I: () => a,
    n: () => u
});
var i,
    r = n(15729),
    l = n(731965);
function o(e) {
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
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var a = (((i = {})[(i.ALL_CHANNELS_ACCESS = 0)] = 'ALL_CHANNELS_ACCESS'), (i[(i.SOME_CHANNELS_ACCESS = 1)] = 'SOME_CHANNELS_ACCESS'), i);
let u = (0, r.U)((e) => ({
    listings: {},
    setListing: (t, n) => (0, l.j)(() => e((e) => ({ listings: s(o({}, e.listings), { [t]: n(e.listings[t]) }) }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
        (0, l.j)(() => {
            e((e) => ({ editStateIdsForGroup: s(o({}, e.editStateIdsForGroup), { [t]: n(e.editStateIdsForGroup[t]) }) }));
        })
}));
