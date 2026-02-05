"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(397927),
    r = n(465932),
    a = n(250627),
    o = n(71393),
    d = n(599941),
    c = n(311750),
    u = n(985018);
function m(e) {
    let { guildId: t, allPeriods: m } = e,
        g = (0, s.bG)([o.A], () => o.A.getGuild(t)),
        x = (0, d.uP)(t, { includeSoftDeleted: !0 }),
        h = (0, a.fZ)(t, { publishedOnly: !1 }),
        { allowSelfRemoveMonetization: _ } = (0, r.nq)(t),
        A = m.filter((e) => {
            let t = Object.values(e.ppgs ?? {})[0];
            return t?.status === c.U1.OPEN || t?.status === c.U1.PAYOUT_DEFERRED;
        }),
        p = x.length > 0,
        f = h.length > 0,
        j = A.length > 0;
    return null == g
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: u.intl.format(u.t.fvOn6J, { guildName: g.name }),
                  }),
                  (0, i.jsx)(l.hKd, { size: 16 }),
                  (0, i.jsx)(l.Button, {
                      variant: "critical-primary",
                      text: u.intl.string(u.t.FrOFSo),
                      disabled: !_ || p || f || j,
                      onClick: () => {
                          (0, l.mMO)(async () => {
                              let { default: e } = await n.e("43224").then(n.bind(n, 201291));
                              return (t) => (0, i.jsx)(e, { ...t, guild: g });
                          });
                      },
                  }),
              ],
          });
}
