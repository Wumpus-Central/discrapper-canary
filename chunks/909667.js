n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(723047),
    s = n(463939),
    a = n(981631),
    o = n(388032);
function c(e) {
    let { team: t, ...n } = e,
        c = (0, l.mY)() || null == t ? null : o.intl.format(o.t.d1sCiY, { url: a.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id) });
    return 0 === n.payoutsByPeriod.length
        ? (0, i.jsxs)(r.R94, {
              type: r.R94.Types.DESCRIPTION,
              children: [o.intl.string(o.t.RrtXu7), ' ', c]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(r.R94, {
                      type: r.R94.Types.DESCRIPTION,
                      children: [o.intl.string(o.t['9Ub4KS']), ' ', c]
                  }),
                  (0, i.jsx)(r.LZC, { size: 16 }),
                  (0, i.jsx)(s.Z, { ...n })
              ]
          });
}
