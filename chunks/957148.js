n.d(t, { l: () => o }), n(47120);
var r = n(200651),
    i = n(481060),
    s = n(692114);
let a = 5 * n(70956).Z.Millis.DAY,
    l = new s.Z('overlay_survey_timestamps');
function o(e, t) {
    (function () {
        let e = Date.now(),
            t = Array.from(l.values()).reduce((e, t) => Math.max(e, t), 0);
        return null != t && e - t < a;
    })() ||
        Array.from(l.values()).filter((e) => {
            let t = new Date(e);
            return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
        }).length >= 3 ||
        (0, i.ZDy)(async () => {
            let { default: i } = await n.e('20114').then(n.bind(n, 536920)),
                s = Date.now();
            return (
                l.add(s),
                (n) => {
                    var s, a;
                    return (0, r.jsx)(
                        i,
                        ((s = (function (e) {
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
                        (a = a =
                            {
                                clientSettingType: e,
                                gameId: t
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        s)
                    );
                }
            );
        });
}
