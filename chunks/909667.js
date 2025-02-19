n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(723047),
    a = n(463939),
    l = n(981631),
    o = n(388032);
function c(e) {
    var { team: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['team']);
    let c = (0, s.mY)() || null == t ? null : o.NW.format(o.t.d1sCiY, { url: l.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id) });
    return 0 === n.payoutsByPeriod.length
        ? (0, r.jsxs)(i.R94, {
              type: i.R94.Types.DESCRIPTION,
              children: [o.NW.string(o.t.RrtXu7), ' ', c]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(i.R94, {
                      type: i.R94.Types.DESCRIPTION,
                      children: [o.NW.string(o.t['9Ub4KS']), ' ', c]
                  }),
                  (0, r.jsx)(i.LZC, { size: 16 }),
                  (0, r.jsx)(
                      a.Z,
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
                      })({}, n)
                  )
              ]
          });
}
