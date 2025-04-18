r.d(t, { Z: () => a });
var n = r(200651);
r(192379);
var i = r(481060),
    l = r(518756),
    o = r(576749),
    c = r(388032);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = (0, l.Z)(e),
        u = (0, o.Z)();
    return a
        ? (0, n.jsx)(i.sNh, {
              id: 'create-event',
              label: c.NW.string(c.t['60lJ0N']),
              icon: t ? i.VZI : void 0,
              action: () => {
                  (0, i.ZDy)(async () => {
                      let { default: t } = await Promise.all([r.e('18543'), r.e('22347'), r.e('82758'), r.e('58023'), r.e('51098')]).then(r.bind(r, 779250));
                      return (r) => {
                          var i, l;
                          return (0, n.jsx)(
                              t,
                              ((i = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              })
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              (n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = n);
                                          });
                                  }
                                  return e;
                              })({}, r)),
                              (l = l = { guildId: e }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i)
                          );
                      };
                  }, u);
              }
          })
        : null;
}
