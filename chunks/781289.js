n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(192308),
    r = n(834730),
    a = n(696986),
    o = n(821609),
    d = n(465932),
    c = n(250627),
    u = n(71393),
    m = n(599941),
    g = n(311750),
    h = n(985018);
function x(e) {
    let { guildId: t, allPeriods: x } = e,
        _ = (0, l.bG)([u.A], () => u.A.getGuild(t)),
        p = (0, m.uP)(t, { includeSoftDeleted: !0 }),
        A = (0, c.fZ)(t, { publishedOnly: !1 }),
        { allowSelfRemoveMonetization: E } = (0, d.nq)(t),
        f = x.filter((e) => {
            let t = Object.values(e.ppgs ?? {})[0];
            return t?.status === g.U1.OPEN || t?.status === g.U1.PAYOUT_DEFERRED;
        }),
        j = p.length > 0,
        N = A.length > 0,
        I = f.length > 0;
    return null == _
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(r.E, {
                      variant: "text-sm/normal",
                      children: h.intl.format(h.t.fvOn6J, { guildName: _.name }),
                  }),
                  (0, i.jsx)(a.h, { size: 16 }),
                  (0, i.jsx)(o.$, {
                      variant: "critical-primary",
                      text: h.intl.string(h.t.FrOFSo),
                      disabled: !E || j || N || I,
                      onClick: () => {
                          (0, s.openModalLazy)(async () => {
                              let { default: e } = await n.e("43224").then(n.bind(n, 201291));
                              return (t) => (0, i.jsx)(e, { ...t, guild: _ });
                          });
                      },
                  }),
              ],
          });
}
