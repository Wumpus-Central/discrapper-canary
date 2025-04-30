n.d(t, { l: () => o }), n(388685);
var i = n(200651),
    r = n(481060),
    s = n(692114);
let l = 5 * n(70956).Z.Millis.DAY,
    a = new s.Z('overlay_survey_timestamps');
function o(e, t) {
    (function () {
        let e = Date.now(),
            t = Array.from(a.values()).reduce((e, t) => Math.max(e, t), 0);
        return null != t && e - t < l;
    })() ||
        Array.from(a.values()).filter((e) => {
            let t = new Date(e);
            return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
        }).length >= 3 ||
        (0, r.ZDy)(async () => {
            let { default: r } = await n.e('20114').then(n.bind(n, 536920)),
                s = Date.now();
            return (
                a.add(s),
                (n) => {
                    var s, l;
                    return (0, i.jsx)(
                        r,
                        ((s = (function (e) {
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
                        })({}, n)),
                        (l = l =
                            {
                                clientSettingType: e,
                                gameId: t
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        s)
                    );
                }
            );
        });
}
