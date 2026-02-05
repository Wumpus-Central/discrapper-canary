"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(11351),
    r = n(495063),
    a = n(652215),
    o = n(985018);
function d(e) {
    let { team: t, ...n } = e,
        d =
            (0, l.gN)() || null == t
                ? null
                : o.intl.format(o.t.d1sCiW, { url: a.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id) });
    return 0 === n.payoutsByPeriod.length
        ? (0, i.jsxs)(s.Text, { variant: "text-sm/medium", children: [o.intl.string(o.t.RrtXuy), " ", d] })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(s.Text, { variant: "text-sm/medium", children: [o.intl.string(o.t["9Ub4KY"]), " ", d] }),
                  (0, i.jsx)(s.hKd, { size: 16 }),
                  (0, i.jsx)(r.A, { ...n }),
              ],
          });
}
