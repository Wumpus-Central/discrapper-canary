n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(131951),
    c = n(388032);
function o(e) {
    return (0, i.e7)([a.Z], () => a.Z.hasContext(e.id), [e.id])
        ? (0, r.jsx)(l.sNh, {
              id: 'ingame-voice',
              label: c.NW.string(c.t['pOul5+']),
              action: () =>
                  (0, l.ZDy)(async () => {
                      let { default: t } = await n.e('45406').then(n.bind(n, 344516));
                      return (n) => {
                          var i, l;
                          return (0, r.jsx)(
                              t,
                              ((i = (function (e) {
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
                              })({}, n)),
                              (l = l =
                                  {
                                      mediaEngineContext: e.id,
                                      title: e.name
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i)
                          );
                      };
                  })
          })
        : null;
}
