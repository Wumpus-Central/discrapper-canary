n.d(e, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(131951),
    c = n(388032);
function o(t) {
    return (0, i.e7)([a.Z], () => a.Z.hasContext(t.id), [t.id])
        ? (0, r.jsx)(l.sNh, {
              id: 'ingame-voice',
              label: c.intl.string(c.t['pOul5+']),
              action: () =>
                  (0, l.ZDy)(async () => {
                      let { default: e } = await n.e('66063').then(n.bind(n, 344516));
                      return (n) => {
                          var i, l;
                          return (0, r.jsx)(
                              e,
                              ((i = (function (t) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = null != arguments[e] ? arguments[e] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                              })
                                          )),
                                          r.forEach(function (e) {
                                              var r;
                                              (r = n[e]),
                                                  e in t
                                                      ? Object.defineProperty(t, e, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (t[e] = r);
                                          });
                                  }
                                  return t;
                              })({}, n)),
                              (l = l =
                                  {
                                      mediaEngineContext: t.id,
                                      title: t.name
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (t, e) {
                                        var n = Object.keys(t);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(t);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (t) {
                                        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(l, t));
                                    }),
                              i)
                          );
                      };
                  })
          })
        : null;
}
