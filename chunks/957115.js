n.d(t, {
    B: () => m,
    U: () => _
}),
    n(539854);
var o = n(392711),
    i = n.n(o),
    r = n(536442),
    a = n(695346),
    l = n(626135),
    s = n(178635),
    c = n(250454),
    u = n(531578),
    d = n(981631);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                var o;
                (o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = o);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, o);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = (e, t) => {
    let n = i().shuffle(e),
        o = n.findIndex((e) => e.value === t);
    if (o > -1) {
        let e = n[o];
        n.splice(o, 1), n.push(e);
    }
    return n;
};
function _(e) {
    let { feedbackType: t, location: n } = e,
        { persistToBackend: o } = (0, c.O)({ location: n }),
        i = s.R[t].hotspot;
    o
        ? (l.default.track(d.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: u.nw[t],
              opted_out_until: u.uf
          }),
          a.A2.updateSetting((e) => p(b({}, e), { [t]: p(b({}, e[t]), { optOutExpiryTime: u.uf }) })))
        : (0, r.Kw)(i);
}
