n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(834730),
    s = n(696986),
    r = n(11351),
    a = n(495063),
    o = n(652215),
    d = n(985018);
function c(e) {
    let { team: t, ...n } = e,
        c =
            (0, r.gN)() || null == t
                ? null
                : d.intl.format(d.t.d1sCiW, { url: o.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id) });
    return 0 === n.payoutsByPeriod.length
        ? (0, i.jsxs)(l.E, { variant: "text-sm/medium", children: [d.intl.string(d.t.RrtXuy), " ", c] })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(l.E, { variant: "text-sm/medium", children: [d.intl.string(d.t["9Ub4KY"]), " ", c] }),
                  (0, i.jsx)(s.h, { size: 16 }),
                  (0, i.jsx)(a.A, { ...n }),
              ],
          });
}
