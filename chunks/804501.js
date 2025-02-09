n.d(t, { x: () => o });
var i = n(675478),
    s = n(915486),
    l = n(428967),
    r = n(605236),
    a = n(644916);
function o(e, t) {
    if (-1 !== l.k.indexOf(e)) {
        let t = (0, a.t)(e);
        return (function (e, t) {
            let { isDismissed: n, lastDismissedVersion: s } = (0, r.H4)(e);
            return {
                isDismissed: n,
                handleToggleDismissState: function () {
                    n ? (0, i.Z1)(e) : (0, i.Bn)(e, t);
                },
                recurringDismissibleContentInfo: {
                    lastDismissedVersion: null != s ? s : void 0,
                    lastDismissedAtMs: void 0
                }
            };
        })(e, t);
    }
    return -1 !== l.N.indexOf(e)
        ? (function (e) {
              let { isDismissed: t, lastDismissedAtMs: n } = (0, r.Fo)(e);
              return {
                  isDismissed: t,
                  handleToggleDismissState: function () {
                      t ? (0, i.Z1)(e) : (0, i.z2)(e);
                  },
                  recurringDismissibleContentInfo: {
                      lastDismissedVersion: void 0,
                      lastDismissedAtMs: null != n ? n : void 0
                  }
              };
          })(e)
        : (function (e, t) {
              let n = (0, s.jl)(t, e);
              return {
                  isDismissed: n,
                  handleToggleDismissState: function () {
                      n ? (0, i.w9)(e) : (0, i.nm)(e);
                  },
                  recurringDismissibleContentInfo: null
              };
          })(e, t);
}
