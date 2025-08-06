(n.d(t, { Z: () => f }), n(388685));
var r = n(255367);
n(73800);
var l = n(442837),
    o = n(481060),
    i = n(567409),
    a = n(594174),
    c = n(823379),
    s = n(971082),
    d = n(388032),
    u = n(954775);
function f(e) {
    var { applicationId: t, hideLabel: n = !1, className: f } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['applicationId', 'hideLabel', 'className']);
    let m = (function (e) {
            let t = (0, i.N)(e);
            return (0, l.Wu)(
                [a.default],
                () => {
                    let e = new Set();
                    return (
                        t.forEach((t) => {
                            (e.add(t.author_id),
                                t.participants.forEach((t) => {
                                    e.add(t);
                                }));
                        }),
                        Array.from(e)
                            .map((e) => a.default.getUser(e))
                            .filter(c.lm)
                    );
                },
                [t]
            );
        })(t),
        g = m.length;
    return m.length > 0
        ? (0, r.jsx)(
              s.Z,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      ('function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              })
                          )),
                          r.forEach(function (t) {
                              var r;
                              ((r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = r));
                          }));
                  }
                  return e;
              })(
                  {
                      label: d.intl.formatToPlainString(d.t.ujhJdH, { numFriends: g }),
                      users: m,
                      maxUsers: 4,
                      size: o.EFr.SIZE_16,
                      overflowCountClassName: u.overflowButton,
                      className: f,
                      visuallyHideLabel: n
                  },
                  p
              )
          )
        : null;
}
