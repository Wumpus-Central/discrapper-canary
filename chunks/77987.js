o.d(t, { e: () => i });
var r = o(200651);
o(192379);
var n = o(314897),
    a = o(449934),
    s = o(857458),
    l = o(981631);
function i(e, t) {
    var o, i;
    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function d(o) {
        return !(0, a.$8)() && n.default.getLoginStatus() !== l.u34.LOGGING_IN && n.default.allowLogoutRedirect()
            ? null != t
                ? (0, r.jsx)(t, { renderRedirect: (0, r.jsx)(s.Z, {}) })
                : (0, r.jsx)(s.Z, {})
            : (0, r.jsx)(
                  e,
                  (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var o = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(o);
                          'function' == typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                  Object.getOwnPropertySymbols(o).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(o, e).enumerable;
                                  })
                              )),
                              r.forEach(function (t) {
                                  var r;
                                  (r = o[t]),
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
                  })({}, c.passProps ? o : null)
              );
    }
    return (d.displayName = 'Authenticated('.concat(null != (i = null != (o = e.displayName) ? o : e.name) ? i : '<Unknown>', ')')), d;
}
