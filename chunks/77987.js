n.d(t, { e: () => s });
var r = n(200651);
n(192379);
var i = n(314897),
    l = n(449934),
    a = n(857458),
    o = n(981631);
function s(e, t) {
    var n, s;
    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function u(n) {
        return !(0, l.$8)() && i.default.getLoginStatus() !== o.u34.LOGGING_IN && i.default.allowLogoutRedirect()
            ? null != t
                ? (0, r.jsx)(t, { renderRedirect: (0, r.jsx)(a.Z, {}) })
                : (0, r.jsx)(a.Z, {})
            : (0, r.jsx)(
                  e,
                  (function (e) {
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
                  })({}, c.passProps ? n : null)
              );
    }
    return (u.displayName = 'Authenticated('.concat(null != (s = null != (n = e.displayName) ? n : e.name) ? s : '<Unknown>', ')')), u;
}
