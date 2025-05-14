n.d(t, {
    B: () => p,
    U: () => _
}),
    n(539854);
var r = n(392711),
    o = n.n(r),
    a = n(536442),
    i = n(695346),
    s = n(626135),
    c = n(178635),
    l = n(250454),
    u = n(531578),
    d = n(981631);
function m(e) {
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
function b(e, t) {
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
let p = (e, t) => {
    let n = o().shuffle(e),
        r = n.findIndex((e) => e.value === t);
    if (r > -1) {
        let e = n[r];
        n.splice(r, 1), n.push(e);
    }
    return n;
};
function _(e) {
    let { feedbackType: t, location: n } = e,
        { persistToBackend: r } = (0, l.O)({ location: n }),
        o = c.R[t].hotspot;
    r
        ? (s.default.track(d.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: u.nw[t],
              opted_out_until: u.uf
          }),
          i.A2.updateSetting((e) => b(m({}, e), { [t]: b(m({}, e[t]), { optOutExpiryTime: u.uf }) })))
        : (0, a.Kw)(o);
}
