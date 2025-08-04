(n.d(t, { Z: () => f }), n(388685));
var r = n(255367);
n(73800);
var o = n(442837),
    i = n(481060),
    l = n(567409),
    a = n(594174),
    c = n(823379),
    s = n(971082),
    u = n(388032),
    d = n(954775);
function f(e) {
    var { applicationId: t, hideLabel: n = !1, className: f } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        })(e, ['applicationId', 'hideLabel', 'className']);
    let m = (function (e) {
            let t = (0, l.N)(e);
            return (0, o.Wu)(
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
        b = m.length;
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
                      label: u.intl.formatToPlainString(u.t.ujhJdH, { numFriends: b }),
                      users: m,
                      maxUsers: 4,
                      size: i.EFr.SIZE_16,
                      overflowCountClassName: d.overflowButton,
                      className: f,
                      visuallyHideLabel: n
                  },
                  p
              )
          )
        : null;
}
